import React from "react";
import { Link } from "react-router-dom";

const MessagePage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right, #ffffff, #f8f9fa)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>
        This is for you only!!
      </h1>
      <p style={{ fontSize: "20px", maxWidth: "600px", lineHeight: "1.5", color: "#555" }}>
        Do saal ya jada hii hua haii ham donon ko saath mein...You are the one for me shayad ham bhi tumhare liye.
        I know you love me so much but at the end I love you more💖
        Jyada kuch haii nahin kehne ke liye....
        You are my suar, gadhi, ullu, chudail, bandariya, tingu, buggu.
      </p>
      <h1 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>
        Happiest Birthday Tingu💖<br />
        Tu to meri JAUUUN haiii!!
      </h1>

      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        {/* Back Button */}
        <Link to="/aaj-ke-moments">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "none",
              background: "#007bff",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            ← Back
          </button>
        </Link>

        {/* Home Button */}
        <Link to="/">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "none",
              background: "#28a745",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            🏠 Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MessagePage;
