import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const Vision=()=>{

  const navigate = useNavigate();

    return(
      <>
      <style>
        {`
        .vision-section{
    background-color: transparent;
    padding-top: 100px;
}
.py-5 {
    padding-top: 5rem !important;}

.vision-text{
    padding-right: 50px;
}

.vision-title{
    font-family: "Arial Rounded MT Bold", sans-serif;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.4;
}

.highlighted-text{
    font-family: "Libre Baskerville";
    border-radius: 50%;
    background-color: #f4a300;
    padding:0 8px;
    font-size: 30px;
    font-weight: bold;
}

.vision-subtitle{
    font-family: Arial,sans-serif;
    font-size: 18px;
    
    margin-top: 20px;
}

.get-started-btn{
    background-color: #6f42c1;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 25px;
    border: none;
    border-radius: 30px;
    margin-top: 30px;
    cursor: pointer;
}

.get-started-btn:hover{
    background-color: #5a32a3;
}

.lottie-anination{
    display: flex;
    justify-content: center;
    align-items: center;
}
    @media (max-width: 767px) {
            .vision-text {
              padding-right: 0;
              text-align: center;
              margin-bottom: 20px;
            }

            .vision-title {
              font-size: 22px;
              color:white;
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

            .lottie-animation {
              width: 100%;
              justify-content: center;
              align-items: center;
            }

            .lottie-animation .player {
              width: 250px;
              height: 250px;
            }

            .container {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
      
        <section className="vision-section py-5">
          <div className="container d-flex align-items-center">
            <div className="vision-text w-50">
              <h2 className="vision-title" style={{color:"black"}}> Transforming Technology for <span className="highlighted-text">Your Business</span></h2>
              <p style={{color:"black", fontWeight:'bold'}}className="vision-subtitle">
                Fueling Business Expansion with our Cutting-Edge Payment Solutions
              </p>
              <button className="btn get-started-btn" onClick={() => navigate("/signup")}>Get Started Today</button>
            </div>

            <div  className="lottie-animation w-50">
              <Player
                autoplay
                loop
                src={"https://lottie.host/8dd7a97a-bae7-4290-a210-b2093d86a92c/Agchp1uLtK.json"}
                style={{ width: "300px", height: "300px" , marginLeft:400}}
              />
            </div>
          </div>
        </section>
        </>
    );
};

export default Vision;