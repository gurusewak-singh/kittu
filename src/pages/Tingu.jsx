import React from "react";
import { Link } from "react-router-dom";

// Import images and videos
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";
import vid5 from "../assets/vid5.mp4";

const messages = [
  "Happy Birthday, my dear!",
  "Wishing you joy always!",
  "You are truly special!",
  "May your dreams come true!",
  "Enjoy your beautiful day!",
  "Sending love and happiness!",
  "You're one in a million!",
  "Celebrate today with laughter!",
  "Memories to cherish forever!",
  "Here's to many more!",
  "You make life brighter!",
  "Happiness looks good on you!",
  "Another year, another adventure!",
  "Stay happy and blessed!",
  "Wishing you endless smiles!",
];

const media = [
  { type: "image", src: img1 },
  { type: "video", src: vid1 },
  { type: "image", src: img2 },
  { type: "video", src: vid2 },
  { type: "image", src: img3 },
  { type: "video", src: vid3 },
  { type: "image", src: img4 },
  { type: "video", src: vid4 },
  { type: "image", src: img5 },
  { type: "video", src: vid5 },
  { type: "image", src: img6 },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "image", src: img9 },
  { type: "image", src: img10 },
];

// Shuffle media to mix images and videos
const shuffledMedia = [...media].sort(() => Math.random() - 0.5);

// Generate random tilt angles between -5 and 5 degrees
const getRandomTilt = () => `${Math.random() * 10 - 5}deg`;

const Tingu = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {/* Hide Scrollbars */}
      <style>
        {`
          body {
            overflow-x: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Grid Layout with 4 Media per Row and Increased Row Gap */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 items per row
          gap: "30px 20px", // Increased row gap for better spacing
          width: "90%",
          marginBottom: "50px",
        }}
      >
        {shuffledMedia.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "300px", // Increased size
              height: "400px",
              perspective: "1000px",
            }}
          >
            <div
              className="flip-container"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                transform: `rotate(${getRandomTilt()})`, // Random tilt applied
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "rotateY(180deg) " + `rotate(${getRandomTilt()})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform =
                  "rotateY(0deg) " + `rotate(${getRandomTilt()})`)
              }
            >
              {/* Front Side - Image or Video */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)", // Glass effect
                  background: "rgba(255, 255, 255, 0.2)", // Slight transparency
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                )}
              </div>

              {/* Back Side - Message with Glass Effect */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden", // Ensures proper flipping
                  backdropFilter: "blur(20px)", // Glass effect
                  background: "rgba(255, 255, 255, 0.3)", // Semi-transparent background
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#333",
                  padding: "20px",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                {messages[index]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons Container */}
      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        {/* Go Back Button */}
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
            Go Back
          </button>
        </Link>

        {/* New Button - Redirects to Next Page */}
        <Link to="/next-page">
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
            Chalo! ab aur dekho
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tingu;
