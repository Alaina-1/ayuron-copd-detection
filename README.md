<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>AYURON — ML-Based COPD Detection & Holistic Respiratory Care</title>
  <meta name="description" content="AYURON: mobile-friendly ML screening for COPD with integrated Indian Knowledge Systems (Ayurveda, Pranayama, Swasthavritta)">
  <style>
    :root{
      --bg:#f7fafc; --card:#ffffff; --accent:#0f6cff; --muted:#6b7280;
      --maxw:900px; font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    *{box-sizing:border-box}
    body{margin:0;background:linear-gradient(180deg,#f4f7fb,var(--bg));color:#0f1724;line-height:1.5}
    .wrap{max-width:var(--maxw);margin:32px auto;padding:24px}
    header{display:flex;gap:16px;align-items:center}
    .logo{width:64px;height:64px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#2dd4bf);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:20px}
    h1{margin:0;font-size:22px}
    p.lead{margin:8px 0 18px;color:var(--muted)}
    .card{background:var(--card);border-radius:14px;padding:18px;box-shadow:0 6px 20px rgba(15,23,42,0.06);margin-bottom:18px}
    h2{margin-top:0}
    ul{margin:8px 0 16px 20px}
    .grid{display:grid;grid-template-columns:1fr;gap:14px}
    @media(min-width:840px){.grid{grid-template-columns:1fr 320px}}
    .aside h3{margin-top:0}
    .btn{display:inline-block;padding:10px 14px;border-radius:10px;background:var(--accent);color:white;text-decoration:none;font-weight:600}
    code{background:#f3f4f6;padding:2px 6px;border-radius:6px;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace}
    footer{margin-top:18px;text-align:center;color:var(--muted);font-size:13px}
    .pill{display:inline-block;padding:6px 10px;border-radius:999px;background:#eef2ff;color:#312e81;font-weight:600;font-size:13px}
    .section-title{display:flex;align-items:center;gap:10px}
    .mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco,'Roboto Mono',monospace}
  </style>
</head>
<body>
  <main class="wrap">
    <header>
      <div class="logo">AY</div>
      <div>
        <h1>AYURON — ML-Based COPD Detection &amp; Holistic Respiratory Care</h1>
        <p class="lead">A mobile-friendly, non-invasive screening tool for early COPD detection using voice &amp; cough recordings, combined with personalized holistic care from Indian Knowledge Systems.</p>
      </div>
    </header>

    <section class="grid">
      <div>
        <article class="card">
          <div class="section-title"><h2>Overview</h2><span class="pill">Non-invasive · Mobile</span></div>
          <p>Chronic Obstructive Pulmonary Disease (COPD) is a leading cause of morbidity worldwide. AYURON uses smartphone-recorded audio (voice &amp; cough), converts it into spectrograms, and applies machine learning to detect acoustic biomarkers associated with COPD — enabling early, low-cost screening especially suited for rural and resource-limited settings.</p>
        </article>

        <article class="card">
          <h2>Primary Objectives</h2>
          <ul>
            <li>Develop an accurate ML system to detect COPD from voice &amp; cough audio recorded via smartphones.</li>
            <li>Classify COPD severity stages using advanced spectrogram analysis and deep learning.</li>
            <li>Integrate personalized Ayurvedic remedy suggestions in collaboration with qualified practitioners.</li>
            <li>Deliver a holistic care pathway: <em>Aushadhi</em> (herbal remedies), <em>Pranayama</em> (breathing practices), and <em>Swasthavritta</em> (lifestyle hygiene) tailored by <em>Prakriti</em> analysis.</li>
          </ul>
        </article>

        <article class="card">
          <h2>Methodology</h2>
          <ol>
            <li><strong>Data Acquisition:</strong> Recordings captured on mobile phone microphones (voice, cough).</li>
            <li><strong>Preprocessing:</strong> Noise reduction, normalization, conversion to spectrograms (STFT, Mel-spectrograms).</li>
            <li><strong>Feature Extraction:</strong> CNN-friendly spectrogram tensors; time–frequency features and handcrafted features (MFCCs, spectral centroid, bandwidth).</li>
            <li><strong>Modeling:</strong> Deep CNNs / transfer learning (e.g., EfficientNet, ResNet variants) and ensemble classifiers for presence &amp; severity staging.</li>
            <li><strong>Evaluation:</strong> Cross-validation, sensitivity/specificity analysis, ROC-AUC, confusion matrices, and real-world field testing.</li>
          </ol>
        </article>

        <article class="card">
          <h2>Holistic Care Integration (IKS)</h2>
          <p>AYURON augments ML screening with Indian Knowledge Systems to provide person-centric care:</p>
          <ul>
            <li><strong>Aushadhi:</strong> Evidence-backed Ayurvedic herbal suggestions (provided in collaboration with registered practitioners).</li>
            <li><strong>Pranayama:</strong> Tailored breathing exercises to improve lung function and reduce symptoms.</li>
            <li><strong>Swasthavritta:</strong> Lifestyle and hygiene guidelines to reduce environmental triggers and promote respiratory health.</li>
            <li><strong>Prakriti analysis:</strong> Personalized recommendations based on an individual's constitution.</li>
          </ul>
        </article>

        <article class="card">
          <h2>Impact &amp; Outcomes</h2>
          <ul>
            <li>Low-cost, scalable screening for underserved and rural areas.</li>
            <li>Early detection enabling timely clinical referral and intervention.</li>
            <li>Holistic symptom management and improved patient outcomes through integrated care pathways.</li>
          </ul>
        </article>

        <article class="card">
          <h2>Future Scope</h2>
          <ul>
            <li>Extend to other respiratory conditions (asthma, bronchitis, pneumonia).</li>
            <li>Deploy within telemedicine platforms and community health programs.</li>
            <li>Integrate with wearables / IoT for continuous monitoring.</li>
            <li>Clinical trials and regulatory pathway for medical classification use.</li>
          </ul>
        </article>

      </div>

      <aside class="aside">
        <div class="card">
          <h3>Quick Start (for researchers)</h3>
          <p class="mono">Steps to reproduce core pipeline:</p>
          <ol>
            <li>Collect mobile audio samples in WAV format at 16–44.1 kHz.</li>
            <li>Preprocess: denoise, trim silence, normalize amplitude.</li>
            <li>Generate Mel-spectrograms (e.g., 128 Mel bands, 2048 window).</li>
            <li>Train CNN models with data augmentation (time-shift, noise, pitch).</li>
            <li>Validate with stratified cross-validation and external field test set.</li>
          </ol>
          <p><a class="btn" href="#">Download sample dataset »</a></p>
        </div>

        <div class="card">
          <h3>Ethics &amp; Safety</h3>
          <ul>
            <li>Not a replacement for clinical diagnosis — intended as a screening aid.</li>
            <li>Data privacy: anonymize recordings, store securely, obtain informed consent.</li>
            <li>All Ayurvedic recommendations must be validated and authorized by licensed practitioners.</li>
          </ul>
        </div>

        <div class="card">
          <h3>Contributors</h3>
          <p>Interdisciplinary team: ML researchers, clinicians, and Ayurvedic practitioners.</p>
          <p><strong>Contact:</strong> <span class="mono">research@ayuron.example</span></p>
        </div>

      </aside>
    </section>

    <footer>
      <small>© AYURON Project — For research &amp; non-commercial use. Please cite appropriately when used in publications.</small>
    </footer>
  </main>
</body>
</html>
