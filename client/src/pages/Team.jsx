import React from "react";

// Example team members
const teamMembers = [
  {
    name: "Dr. Alice Johnson",
    role: "AI Research Lead",
    img: "https://via.placeholder.com/120", // Replace with actual image URL
  },
  {
    name: "Dr. John Smith",
    role: "Clinical Advisor",
    img: "https://via.placeholder.com/120",
  },
  {
    name: "Dr. Emily Davis",
    role: "Data Scientist",
    img: "https://via.placeholder.com/120",
  },
];

function Team() {
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
      marginBottom: "40px",
      textAlign: "center",
    },
    teamCards: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "30px",
      width: "100%",
      maxWidth: "1000px",
    },
    card: {
      background: "white",
      borderRadius: "16px",
      padding: "20px",
      textAlign: "center",
      maxWidth: "220px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    },
    img: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "15px",
    },
    name: {
      fontSize: "1.25rem",
      color: "#1e40af",
      marginBottom: "5px",
    },
    role: {
      fontSize: "1rem",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meet Our Team</h1>
      <div style={styles.teamCards}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.card}>
            <img src={member.img} alt={member.name} style={styles.img} />
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
