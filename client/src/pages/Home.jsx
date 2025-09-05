import React, { useState, useRef } from "react";
import "./Page.css";

function Home() {
  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showRecorder, setShowRecorder] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => audioChunksRef.current.push(event.data);
      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      alert("Microphone access is required to start diagnosis.");
      console.error(err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    mediaRecorderRef.current.onstop = async () => {
      const blob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      audioChunksRef.current = [];

      const formData = new FormData();
      formData.append("file", blob, `recording_${Date.now()}.wav`); // Unique filename

      setLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:5000/analyze", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        setResult(data);

        // Create download URL for local download
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);

      } catch (err) {
        alert("Error analyzing audio.");
        console.error(err);
      }
      setLoading(false);
      setRecording(false);
    };
  };

  const handleStartDiagnosis = () => {
    setShowRecorder(true);
    setResult(null);
    setDownloadUrl(null);
    startRecording();
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero hero-center">
        <h1>
          Welcome to <span className="brand">AYURON</span>
        </h1>
        <p>AI-powered Respiratory Health Detection</p>

        {!showRecorder ? (
          <button className="cta-btn" onClick={handleStartDiagnosis}>
            Start Diagnosis
          </button>
        ) : (
          <div className="card hero-recorder-card">
            <h2 className="card-title">🎤 Record Your Audio</h2>

            {!recording ? (
              <button className="btn btn-green" onClick={startRecording}>
                Start Recording
              </button>
            ) : (
              <button className="btn btn-red" onClick={stopRecording}>
                Stop Recording
              </button>
            )}

            {loading && <p className="loading">Analyzing your audio...</p>}

            {result && (
              <div className="result">
                <h3>Prediction Result</h3>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      result.label === "COPD" ? "label copd" : "label healthy"
                    }
                  >
                    {result.label}
                  </span>
                </p>
                <p>
                  <strong>Confidence:</strong>{" "}
                  {(result.confidence * 100).toFixed(2)}%
                </p>
              </div>
            )}

            {downloadUrl && (
              <div style={{ marginTop: "15px" }}>
                <a href={downloadUrl} download="recording.wav" className="btn btn-green">
                  Download Recording
                </a>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose AYURON?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>AI-Powered</h3>
            <p>Uses advanced AI to analyze your voice and breathing sounds.</p>
          </div>
          <div className="feature-card">
            <h3>Fast & Easy</h3>
            <p>Get insights within seconds by just recording your voice.</p>
          </div>
          <div className="feature-card">
            <h3>Non-Invasive</h3>
            <p>No equipment needed – completely safe and non-invasive.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Record</h3>
            <p>Record your voice and breathing sounds using our tool.</p>
          </div>
          <div className="step">
            <h3>2. Analyze</h3>
            <p>Our AI model analyzes your audio in real-time.</p>
          </div>
          <div className="step">
            <h3>3. Get Result</h3>
            <p>Receive a clear prediction and confidence score.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} AYURON | AI for Respiratory Health</p>
      </footer>
    </div>
  );
}

export default Home;
