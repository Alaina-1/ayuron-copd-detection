from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import librosa
import numpy as np
from tensorflow.keras.models import load_model

MODEL_PATH = os.path.join("models", "copd_binary_model.h5")
model = load_model(MODEL_PATH)


app = Flask(__name__)
CORS(app)

# --- simple test route ---
@app.route("/health")
def health():
    return jsonify({"ok": True})

# --- uploads folder ---
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

CLASS_LABELS = {0: "Healthy", 1: "COPD"}


# --- analyze route ---
@app.route("/analyze", methods=["POST"])
def analyze_audio():
    file = request.files["file"]

    if file:
        save_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(save_path)

        # Step 1: Load audio
        y, sr = librosa.load(save_path, sr=16000)

        # Step 2: Preprocess
        y, _ = librosa.effects.trim(y)
        if np.max(np.abs(y)) > 0:
            y = y / np.max(np.abs(y))

        # Step 3: Extract Features
        mel_spec = librosa.feature.melspectrogram(y=y, sr=sr, n_mels=128)
        mel_spec_db = librosa.power_to_db(mel_spec, ref=np.max)

        # --- Fix: pad or truncate to (128,128) ---
        desired_shape = (128, 128)
        padded_spec = np.zeros(desired_shape, dtype=np.float32)

        min_x = min(mel_spec_db.shape[0], desired_shape[0])
        min_y = min(mel_spec_db.shape[1], desired_shape[1])
        padded_spec[:min_x, :min_y] = mel_spec_db[:min_x, :min_y]

        # Expand for model input
        input_data = np.expand_dims(padded_spec, axis=(0, -1))

        # Step 4: Predict with model
        prediction = model.predict(input_data)
        predicted_class = int(np.argmax(prediction))
        confidence = float(np.max(prediction))

        return jsonify({
            "message": "Prediction complete!",
            "filename": file.filename,
            "predicted_class": predicted_class,
            "label": CLASS_LABELS.get(predicted_class, "Unknown"),
            "confidence": confidence
        })
    else:
        return jsonify({"error": "No file uploaded"}), 400

if __name__ == "__main__":
    app.run(port=5000, debug=True)
