import React, { useState, useRef, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import img43 from "../assets/img43.jpg";
import img44 from "../assets/img44.jpg";
import img45 from "../assets/img45.jpg";
import img46 from "../assets/img46.jpg";
import img47 from "../assets/img47.jpg";
import img48 from "../assets/img48.jpg";
import img49 from "../assets/img49.jpg";
import img50 from "../assets/img50.jpg";
import vid25 from "../assets/vid25.mp4";
import vid26 from "../assets/vid26.mp4";

const media = [
  { type: "image", src: img43 },
  { type: "image", src: img44 },
  { type: "image", src: img45 },
  { type: "image", src: img46 },
  { type: "image", src: img47 },
  { type: "image", src: img48 },
  { type: "image", src: img49 },
  { type: "image", src: img50 },
  { type: "video", src: vid25 },
  { type: "video", src: vid26 },
];

const AajKeMoments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const nextMedia = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (media[currentIndex].type === "video" && videoRef.current) {
      videoRef.current.play();
    }
  }, [currentIndex]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h2 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
        Aaj ke Moments 📸✨
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button
          onClick={prevMedia}
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

        {media[currentIndex].type === "image" ? (
          <img
            src={media[currentIndex].src}
            alt="Today's Moment"
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />
        ) : (
          <video
            ref={videoRef}
            src={media[currentIndex].src}
            onEnded={nextMedia}
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            controls
          />
        )}

        <button
          onClick={nextMedia}
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

      <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
        <button onClick={() => navigate("/few-more")}>Back</button>
        <button onClick={() => navigate("/message")}>I have to say something</button>
      </div>
    </div>
  );
};

export default AajKeMoments;
