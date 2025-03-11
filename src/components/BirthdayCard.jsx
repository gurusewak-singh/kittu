import React from "react";
import { useNavigate } from "react-router-dom";
import leftImg from "../assets/left-image.jpg"; // Replace with actual image path
import rightImg from "../assets/right-image.jpg"; // Replace with actual image path
import bg from "../assets/background.jpg"; // Import background image

const BirthdayCard = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          width: "50vw",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Left Image */}
        <img src={leftImg} alt="Left" style={{ height: "80%", width: "auto" }} />

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <h1 style={{ color: "#fff", fontSize: "24px", marginBottom: "20px" }}>
            Happiest Birthday Gadhi 🎉
          </h1>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255, 255, 255, 0.3)",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => navigate("/tingu")}
            onMouseOver={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.5)")}
            onMouseOut={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.3)")}
          >
            Let's see what I've for you 🎁
          </button>
        </div>

        {/* Right Image */}
        <img src={rightImg} alt="Right" style={{ height: "80%", width: "auto" }} />
      </div>
    </div>
  );
};

export default BirthdayCard;
