# train_copd_model.py

import os
import numpy as np
import librosa
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.callbacks import ModelCheckpoint
from tensorflow.keras.utils import to_categorical

# ------------------------
# 1. Settings
# ------------------------
DATA_DIR = "dataset"  # Folder containing subfolders 'Healthy' and 'COPD'
SAMPLE_RATE = 16000
N_MELS = 128
MAX_PAD_LEN = 128  # pad/truncate to 128 frames
EPOCHS = 30
BATCH_SIZE = 32

# ------------------------
# 2. Load and preprocess data
# ------------------------
def extract_features(file_path, n_mels=N_MELS, max_len=MAX_PAD_LEN):
    y, sr = librosa.load(file_path, sr=SAMPLE_RATE)
    y, _ = librosa.effects.trim(y)
    if np.max(np.abs(y)) > 0:
        y = y / np.max(np.abs(y))
    mel_spec = librosa.feature.melspectrogram(y=y, sr=sr, n_mels=n_mels)
    mel_spec_db = librosa.power_to_db(mel_spec, ref=np.max)
    
    # pad or truncate to (n_mels, max_len)
    padded = np.zeros((n_mels, max_len))
    min_len = min(mel_spec_db.shape[1], max_len)
    padded[:, :min_len] = mel_spec_db[:, :min_len]
    return padded

X = []
y_labels = []

class_map = {"Healthy": 0, "COPD": 1}

for label in ["Healthy", "COPD"]:
    folder = os.path.join(DATA_DIR, label)
    if not os.path.exists(folder):
        continue
    for file in os.listdir(folder):
        if file.endswith(".wav"):
            file_path = os.path.join(folder, file)
            features = extract_features(file_path)
            X.append(features)
            y_labels.append(class_map[label])

X = np.array(X)
y_labels = np.array(y_labels)

# Add channel dimension for CNN
X = X[..., np.newaxis]

# ------------------------
# 3. Split data
# ------------------------
X_train, X_test, y_train, y_test = train_test_split(X, y_labels, test_size=0.15, random_state=42, stratify=y_labels)
X_train, X_val, y_train, y_val = train_test_split(X_train, y_train, test_size=0.15, random_state=42, stratify=y_train)

# ------------------------
# 4. Build CNN model
# ------------------------
model = Sequential([
    Conv2D(32, (3,3), activation='relu', input_shape=(N_MELS, MAX_PAD_LEN,1)),
    MaxPooling2D((2,2)),
    Conv2D(64, (3,3), activation='relu'),
    MaxPooling2D((2,2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(2, activation='softmax')  # 2 classes
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.summary()

# ------------------------
# 5. Train model
# ------------------------
checkpoint = ModelCheckpoint("copd_binary_model.h5", monitor='val_accuracy', save_best_only=True, verbose=1)

history = model.fit(
    X_train, y_train,
    validation_data=(X_val, y_val),
    epochs=EPOCHS,
    batch_size=BATCH_SIZE,
    callbacks=[checkpoint]
)

# ------------------------
# 6. Evaluate
# ------------------------
loss, acc = model.evaluate(X_test, y_test)
print(f"Test Accuracy: {acc*100:.2f}%")
