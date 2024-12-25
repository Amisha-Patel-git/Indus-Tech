import React from "react";

const Values=()=>{
    return(
        <>
        <style>
            {`
            .merchant-connect-section{
    background-color: transparent;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.merchant-image-container{
    text-align: center;
}

.merchant-image{
   
   
    object-fit: cover; 
    
    
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */

    max-width: 100%; /* Ensure the image doesn't overflow */
  height: auto; /* Maintain aspect ratio */
  
  
}

@media(max-width:768px){
    .merchant-image{
        width: 200px;
        height: 200px;
    }
}

.customer-interaction-section{
    background-color: #fefefe;
    padding: 60px 20px;
    position: relative;
    overflow: hidden;
}

.customer-interaction-section::before{
    content:"";
    position: absolute;
    top: 0;
    left:50%;
    width: 120%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(230, 57, 70, 0.1) 10%, transparent 80%);
    transform: translateX(-50%);
    z-index: 1;
}

.interaction-title,
.interaction-subtitle{
    position: relative;
    z-index: 2;
}

.interaction-title{
    font-size: 2.5rem;
    color: #333;
    line-height: 1.4;
    font-weight: bold;
    margin-bottom: 10px;
}

.interaction-subtitle{
    font-size: 1.5rem;
    color: #666;
    line-height: 1.2;
}

.interaction-subtitle strong{
    color: #e63946;
    font-weight: bold;
}
            `}
        </style>
        <section className="merchant-connect-section py-5">
          <div className="container d-flex justify-content-center align-items-center">
            <div className="merchant-image-container">
              <img src="./merchantImg.png" alt="Merchant Connect" className="merchant-image" />
            </div>
          </div>
        </section>

        <section className="customer-interaction-section py-5">
          <div className="container d-flex justify-content-center align-items-center flex-column text-center">
            <h2 className="interaction-title">
              Gateway without boundries
            </h2>
            <p className="interaction-subtitle">
              <strong>Unlock Growth </strong>with ease
            </p>
          </div>
        </section>
        </>
    );
};

export default Values;