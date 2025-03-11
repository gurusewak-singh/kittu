import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import vid20 from "../assets/vid20.mp4";
import vid21 from "../assets/vid21.mp4";
import vid22 from "../assets/vid22.mp4";
import vid23 from "../assets/vid23.mp4";
import vid24 from "../assets/vid24.mp4";

const videos = [vid20, vid21, vid22, vid23, vid24];

const FewMore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Move to next video
  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Move to previous video
  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333", fontSize: "24px" }}>
        Few More Memories 🎥
      </h2>

      {/* Video Slider */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Backward Button */}
        <button
          onClick={prevVideo}
          style={{
            background: "transparent",
            color: "#333",
            border: "2px solid #333",
            padding: "12px 18px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "8px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#333";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#333";
          }}
        >
          {"<"}
        </button>

        {/* Video Display */}
        <video
          ref={videoRef}
          src={videos[currentIndex]}
          style={{
            maxWidth: "80vw",
            maxHeight: "80vh",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
          controls
          autoPlay
          onEnded={nextVideo} // Auto-play next video
        />

        {/* Forward Button */}
        <button
          onClick={nextVideo}
          style={{
            background: "transparent",
            color: "#333",
            border: "2px solid #333",
            padding: "12px 18px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "8px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#333";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#333";
          }}
        >
          {">"}
        </button>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        {/* Back Button */}
        <button
          onClick={() => navigate("/personal-moments")}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "2px solid #333",
            background: "transparent",
            color: "#333",
            cursor: "pointer",
            transition: "0.3s",
            fontWeight: "bold",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#333";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#333";
          }}
        >
          Back
        </button>

        {/* "Aaj ke Moments" Button */}
        <button
          onClick={() => navigate("/aaj-ke-moments")}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "2px solid #ff4b2b",
            background: "transparent",
            color: "#ff4b2b",
            cursor: "pointer",
            transition: "0.3s",
            fontWeight: "bold",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#ff4b2b";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#ff4b2b";
          }}
        >
          Aaaj ke Moments!!
        </button>
      </div>
    </div>
  );
};

export default FewMore;
