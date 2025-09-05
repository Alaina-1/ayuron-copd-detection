import React, { useState } from "react";

function Recorder() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");

  let mediaRecorder;
  let audioChunks = [];

  const startRecording = async () => {
    // ask for microphone access
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunks, { type: "audio/wav" });
      audioChunks = [];

      // create playback URL
      const url = URL.createObjectURL(blob);
      setAudioURL(url);

      // send to backend
      const formData = new FormData();
      formData.append("file", blob, "recording.wav");

      fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Backend says: " + JSON.stringify(data));
        });
    };

    mediaRecorder.start();
    setRecording(true);

    // auto stop after 5 seconds
    setTimeout(() => {
      mediaRecorder.stop();
      setRecording(false);
    }, 5000);
  };

  return (
    <div>
      <h2>Mic Recorder</h2>
      <button onClick={startRecording} disabled={recording}>
        {recording ? "Recording..." : "Start Recording"}
      </button>

      {/* playback audio */}
      {audioURL && <audio src={audioURL} controls />}
    </div>
  );
}

export default Recorder;
