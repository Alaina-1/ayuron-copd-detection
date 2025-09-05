import tensorflow as tf
from tensorflow.keras import layers, models

# Simple CNN that takes a spectrogram input
model = models.Sequential([
    layers.Input(shape=(128, 128, 1)),   # spectrogram size
    layers.Conv2D(16, (3,3), activation="relu"),
    layers.MaxPooling2D((2,2)),
    layers.Conv2D(32, (3,3), activation="relu"),
    layers.MaxPooling2D((2,2)),
    layers.Flatten(),
    layers.Dense(64, activation="relu"),
    layers.Dense(5, activation="softmax")  # 5 classes (Healthy, COPD0-4 for example)
])

model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])

# Save to models folder
model.save("models/copd_model.h5")

print("✅ Dummy model saved to models/copd_model.h5")
