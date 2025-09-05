import React from "react";

function Research() {
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
      width: "100%",
      marginBottom: "40px",
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
    list: {
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
      <h1 style={styles.title}>Research & AI Technology</h1>
      <p style={styles.subtitle}>Advanced machine learning for respiratory health</p>

      {/* Focus Areas */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Focus Areas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>AI-based audio signal processing</li>
          <li style={styles.listItem}>Early COPD detection algorithms</li>
          <li style={styles.listItem}>Validation with clinical datasets</li>
          <li style={styles.listItem}>Continuous improvement via user feedback</li>
        </ul>
      </section>

      {/* Publications */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Publications & Studies</h2>
        <p style={styles.sectionText}>
          Our research is grounded in peer-reviewed studies and real-world clinical data to ensure the accuracy and reliability of AYURON’s AI models. 
          We continuously publish findings to contribute to the global health community.
        </p>
      </section>
    </div>
  );
}

export default Research;
