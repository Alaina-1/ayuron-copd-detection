import React from "react";

function Contact() {
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
      maxWidth: "700px",
      width: "100%",
      marginBottom: "40px",
      textAlign: "center",
    },
    infoText: {
      fontSize: "1.15rem",
      marginBottom: "10px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto",
    },
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      width: "100%",
      boxSizing: "border-box",
    },
    textarea: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
    },
    button: {
      padding: "14px 28px",
      background: "#1e40af",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      background: "#3b82f6",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.subtitle}>Have questions or need support? Reach out!</p>

      {/* Contact Info */}
      <section style={styles.section}>
        <p style={styles.infoText}><strong>Email:</strong> support@ayuron.com</p>
        <p style={styles.infoText}><strong>Phone:</strong> +1 234 567 890</p>
        <p style={styles.infoText}><strong>Address:</strong> 123 Health St, Wellness City, USA</p>
      </section>

      {/* Contact Form */}
      <section style={styles.section}>
        <h2 style={{...styles.title, fontSize: "2rem", marginBottom: "20px"}}>Send a Message</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" required style={styles.input} />
          <input type="email" placeholder="Your Email" required style={styles.input} />
          <textarea placeholder="Your Message" rows="5" required style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
