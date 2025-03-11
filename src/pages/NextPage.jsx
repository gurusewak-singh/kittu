import React from "react";
import { Link } from "react-router-dom";

// Import videos
import vid6 from "../assets/vid6.mp4";
import vid7 from "../assets/vid7.mp4";
import vid8 from "../assets/vid8.mp4";
import vid9 from "../assets/vid9.mp4";
import vid10 from "../assets/vid10.mp4";
import vid11 from "../assets/vid11.mp4";
import vid12 from "../assets/vid12.mp4";
import vid13 from "../assets/vid13.mp4";
import vid14 from "../assets/vid14.mp4";

const videos = [vid6, vid7, vid8, vid9, vid10, vid11, vid12, vid13, vid14];

// Function to generate random tilt angles
const getRandomTilt = () => `${Math.random() * 10 - 5}deg`;

const NextPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
        color: "#333",
        overflowX: "hidden",
      }}
    >
      {/* Hide Horizontal Scrollbar */}
      <style>
        {`
          body {
            overflow-x: hidden;
          }
          .media-container {
            transition: transform 0.4s ease-in-out;
          }
          .media-container:hover {
            transform: scale(1.05) rotate(0deg); /* Slight zoom & reset tilt on hover */
          }
        `}
      </style>

      <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "20px" }}>
        🎉 Few of your moments 🎉
      </h1>
      <p style={{ fontSize: "20px", maxWidth: "600px", lineHeight: "1.5" }}>
        These are your some of moments😍 Which I've got in 2 Years 💖
      </p>

      {/* Video Grid (Scrollable) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 videos per row
          gap: "30px",
          width: "80%",
          marginTop: "20px",
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="media-container"
            style={{
              width: "300px",
              height: "400px",
              borderRadius: "15px",
              overflow: "hidden",
              position: "relative",
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              transform: `rotate(${getRandomTilt()})`,
            }}
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        {/* Go Back Button */}
        <Link to="/tingu">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255, 255, 255, 0.3)",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            🔙 Wapas Chalo
          </button>
        </Link>

        {/* Home Button */}
        <Link to="/">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255, 255, 255, 0.3)",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            🏠 Home
          </button>
        </Link>

        {/* New Button - Redirects to "Gadhi" Page */}
        <Link to="/gadhi">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255, 255, 255, 0.5)", // Slightly different opacity
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            🚀 Aur bhi kuch haii!!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NextPage;
