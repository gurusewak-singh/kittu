import React from "react";
import { Link } from "react-router-dom";

// Import images
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import img28 from "../assets/img28.jpg";
import img29 from "../assets/img29.jpg";
import img30 from "../assets/img30.jpg";
import img31 from "../assets/img31.jpg";
import img32 from "../assets/img32.jpg";
import img33 from "../assets/img33.jpg";
import img34 from "../assets/img34.jpg";

const images = [
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34,
];

const Gadhi = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
      <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "40px", color: "#333" }}>
        Here are you where I like you the most.
      </h1>

      {/* Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          width: "90%",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              height: "375px",
              overflow: "hidden",
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 4px 20px rgba(255, 255, 255, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
            }}
          >
            <img
              src={img}
              alt="Gallery"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Buttons Container */}
      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        {/* Previous Page Button */}
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
            ← Firse dekhna haii
          </button>
        </Link>

        {/* Next Page Button */}
        <Link to="/warning-ullu">
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
            Thoda sa aur!! →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gadhi;