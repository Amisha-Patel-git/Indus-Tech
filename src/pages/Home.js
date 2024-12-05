import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import "./Home.css";

const Home=()=>{
    return(
        <div className="vision-container">
            <div className="vision-content">
            <h1>Transforming Technology </h1><span><h1>for Your Business</h1></span> 
            <h3>Fueling Business Expansion with Our Cutting-Edge Payment Solutions</h3>
            </div>
            
            
                <Player autoplay loop src={"https://lottie.host/93519802-5090-4bea-ba10-31fda1a557d3/H23m4CXi1d.json"} className="anm1" />
            
        </div>
        
    );
};
export default Home;