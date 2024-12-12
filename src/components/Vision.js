import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Vision=()=>{
    return(
        <section className="vision-section py-5">
          <div className="container d-flex align-items-center">
            <div className="vision-text w-50">
              <h2 className="vision-title">Transforming Technology for <span className="highlighted-text">Your Business</span></h2>
              <p className="vision-subtitle">
                Fueling Business Expansion with our Cutting-Edge Payment Solutions
              </p>
              <button className="btn get-started-btn">Get Started Today</button>
            </div>

            <div className="lottie-animation w-50">
              <Player
                autoplay
                loop
                src={"https://lottie.host/8dd7a97a-bae7-4290-a210-b2093d86a92c/Agchp1uLtK.json"}
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          </div>
        </section>
    );
};

export default Vision;