import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import img35 from "../assets/img35.jpg";
import img36 from "../assets/img36.jpg";
import img37 from "../assets/img37.jpg";
import img38 from "../assets/img38.jpg";
import img39 from "../assets/img39.jpg";
import img40 from "../assets/img40.jpg";
import img41 from "../assets/img41.jpg";
import img42 from "../assets/img42.jpg";
import vid16 from "../assets/vid16.mp4";
import vid17 from "../assets/vid17.mp4";
import vid18 from "../assets/vid18.mp4";
import vid19 from "../assets/vid19.mp4";

const media = [
  { type: "image", src: img35 },
  { type: "image", src: img36 },
  { type: "video", src: vid16 },
  { type: "image", src: img37 },
  { type: "image", src: img38 },
  { type: "video", src: vid17 },
  { type: "image", src: img39 },
  { type: "image", src: img40 },
  { type: "video", src: vid18 },
  { type: "image", src: img41 },
  { type: "image", src: img42 },
  { type: "video", src: vid19 },
];

const PersonalMoments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Move to next media
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  // Move to previous media
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const currentMedia = media[currentIndex];

    if (currentMedia.type === "image") {
      const timer = setTimeout(() => {
        nextSlide();
      }, 3000); // Change image every 3 seconds

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

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
        background: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Media Display */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* Backward Button */}
        <button
          onClick={prevSlide}
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
            alt="Personal Moment"
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
            onEnded={nextSlide}
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

        {/* Forward Button */}
        <button
          onClick={nextSlide}
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

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        {/* Back Button */}
        <button
          onClick={() => navigate("/warning-ullu")}
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

        {/* Few More Button */}
        <button
          onClick={() => navigate("/few-more")}
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
          Few More
        </button>
      </div>
    </div>
  );
};

export default PersonalMoments;
