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
