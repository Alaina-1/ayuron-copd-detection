import numpy as np
import soundfile as sf
import os

os.makedirs("dataset/Healthy", exist_ok=True)
os.makedirs("dataset/COPD", exist_ok=True)

# Generate dummy Healthy audio
for i in range(5):
    y = np.random.randn(16000)  # 1 second of random noise
    sf.write(f"dataset/Healthy/h{i}.wav", y, 16000)

# Generate dummy COPD audio
for i in range(5):
    y = np.sin(2 * np.pi * 220 * np.linspace(0, 1, 16000))  # 220 Hz tone
    sf.write(f"dataset/COPD/c{i}.wav", y, 16000)

print("✅ Dummy audio dataset generated")
