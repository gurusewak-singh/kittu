import React from "react";
import { Link } from "react-router-dom";

const WarningUllu = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Lighter gradient background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
        color: "#333",
      }}
    >
      {/* Hide Scrollbars */}
      <style>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>

      <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "20px", color: "#d9534f" }}>
        🚨 WARNING!! 🚨
      </h1>
      <p style={{ fontSize: "22px", maxWidth: "600px", lineHeight: "1.5" }}>
        Yeh page sirf tere liye hai. Isse kisi ko mat dikhana!! 🤫  
        Iske baad jo hai woh sirf hamare personal moments hain. 😍❤️
      </p>

      {/* Buttons */}
      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        {/* Back Button */}
        <Link to="/gadhi">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              background: "#ff6f61",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            ← Wapas Jao
          </button>
        </Link>

        {/* Secret Page Button (For next page, if needed) */}
        <Link to="/personal-moments">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              background: "#ff8566",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Chalo, Aage Dekho! 😏
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WarningUllu;
