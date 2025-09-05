import React from "react";

function About() {
  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      background: "#f9fbff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 20px",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "3rem",
      color: "#1e40af",
      marginBottom: "10px",
      textAlign: "center",
    },
    subtitle: {
      fontSize: "1.5rem",
      color: "#1e40af",
      marginBottom: "40px",
      textAlign: "center",
    },
    section: {
      maxWidth: "900px",
      margin: "40px auto",
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#1e40af",
    },
    sectionText: {
      fontSize: "1.15rem",
      lineHeight: "1.7",
      color: "#333",
    },
    valuesList: {
      listStyle: "disc",
      margin: "20px auto",
      paddingLeft: "20px",
      textAlign: "left",
      maxWidth: "700px",
    },
    listItem: {
      marginBottom: "10px",
      fontSize: "1.1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About AYURON</h1>
      <p style={styles.subtitle}>AI-powered Respiratory Health Detection</p>

      {/* Overview */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Overview</h2>
        <p style={styles.sectionText}>
          AYURON is an innovative platform designed to assist in early detection of COPD and other respiratory conditions by analyzing breathing and voice patterns using advanced AI technology.
          Our platform is non-invasive, easy to use, and delivers rapid insights for individuals and healthcare professionals.
        </p>
      </section>

      {/* Mission */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.sectionText}>
          To provide accessible, accurate, and AI-driven respiratory health analysis to empower individuals to take proactive steps in managing their health.
        </p>
      </section>

      {/* Vision */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Vision</h2>
        <p style={styles.sectionText}>
          To revolutionize preventive healthcare by integrating AI technologies for early detection of respiratory conditions, ultimately improving global health outcomes.
        </p>
      </section>

      {/* Values */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <ul style={styles.valuesList}>
          <li style={styles.listItem}>Accuracy: Leveraging reliable AI models for precise analysis.</li>
          <li style={styles.listItem}>Accessibility: Making healthcare tools easy to use for everyone.</li>
          <li style={styles.listItem}>Innovation: Continuously improving our technology with cutting-edge research.</li>
          <li style={styles.listItem}>Privacy: Ensuring user data is secure and confidential.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
