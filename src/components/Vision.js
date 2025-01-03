import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const Vision = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
        .vision-section {
          background-color: transparent;
          padding-top: 100px;
        }

        .py-5 {
          padding-top: 5rem !important;
        }

        .vision-text {
          padding-right: 50px;
          display: block;
          width: 100%;
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .vision-title {
          font-family: "Arial Rounded MT Bold", sans-serif;
          font-size: 28px;
          font-weight: bold;
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #333;
          animation: slideIn 1.5s ease-in-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .highlighted-text {
  font-family: "Libre Baskerville";
  padding: 4px 12px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  /* Remove background-clip and set a solid background instead */
  background: linear-gradient(45deg, #ff8c00, #f4a300);
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.7), 0 0 20px rgba(255, 165, 0, 0.5);
  display: inline-block;
}


        .vision-subtitle {
          font-family: Arial, sans-serif;
          font-size: 18px;
          margin-top: 20px;
          color: #333;
          font-weight: 500;
          animation: fadeIn 1.5s ease-in-out;
        }

        .get-started-btn {
          background-color: #6f42c1;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          padding: 12px 30px;
          border: none;
          border-radius: 30px;
          margin-top: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: bounceIn 1.5s ease-in-out;
          position: relative;
          z-index: 10; /* Ensure button stays clickable */
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          60% {
            opacity: 1;
            transform: translateY(-20px);
          }
          80% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .get-started-btn:hover {
          background-color: #5a32a3;
          transform: scale(1.05);
        }

        .lottie-animation {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        /* Mobile and medium screen adjustments */
        @media (max-width: 767px) {
          .vision-text {
            padding-right: 0;
            text-align: center;
            margin-bottom: 20px;
          }

          .vision-title {
            font-size: 22px;
            color: black;
          }

          .highlighted-text {
            font-size: 24px;
          }

          .vision-subtitle {
            font-size: 16px;
          }

          .get-started-btn {
            font-size: 16px;
            padding: 8px 20px;
          }

          .lottie-animation .player {
            width: 250px;
            height: 250px;
          }

          .container {
            flex-direction: column;
            align-items: center;
          }

          .vision-section {
            padding-top: 60px;
          }

          /* Ensuring full width for the text on small screens */
          .vision-text {
            width: 100%;
            margin-bottom: 30px;
          }

          /* Ensure the animation is placed below the text */
          .lottie-animation {
            margin-top: 20px;
          }

          .get-started-btn {
            margin-top: 20px;
          }

          /* Hide mobile animation for small and medium screens */
          .mobile-animation {
            display: none;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .vision-text {
            width: 100%;
            padding-right: 20px;
          }

          .lottie-animation .player {
            width: 250px;
            height: 250px;
          }

          /* Hide mobile animation for medium screens */
          .mobile-animation {
            display: none;
          }
        }

        /* Large screen (desktop) adjustments: show mobile animation */
        @media (min-width: 1025px) {
          .mobile-animation {
            display: block; /* Show the mobile animation only on large screens */
          }
        }
        `}
      </style>

      <section className="vision-section py-5">
        <div className="container d-flex align-items-center flex-column">
          <div className="vision-text">
            <h2 className="vision-title">
              Transforming Technology for{" "}
              <span className="highlighted-text">Your Business</span>
            </h2>
            <p className="vision-subtitle">
              Fueling Business Expansion with our Cutting-Edge Payment
              Solutions
            </p>
            <button
              className="btn get-started-btn"
              onClick={() => navigate("/signup")}
            >
              Get Started Today
            </button>
          </div>

          {/* This animation will only be visible on large screens */}
          <div className="lottie-animation mobile-animation">
            <Player
              autoplay
              loop
              src={
                "https://lottie.host/8dd7a97a-bae7-4290-a210-b2093d86a92c/Agchp1uLtK.json"
              }
              style={{
                width: "250px",
                height: "250px",
                marginLeft: "85%",
                marginTop: -100,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
