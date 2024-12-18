import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Offer = () => {
    const navigate = useNavigate();

    const offerData = [
        {
            id: 1,
            animationData:"https://lottie.host/9bc375d7-068e-4e39-833f-45ee77d0ffe3/EPHxlE3lO8.json",
            title: "Collection Solutions",
            link:"/collectionsolutions"
        },
        {
            id: 2,
            animationData:"https://lottie.host/693c5e24-8f94-4f7d-8ff2-d933a0b415a0/Y4vOLzlthz.json",
            title: "Payout Solutions",
            link:"/payoutsolutions"
        },
        {
            id: 3,
            animationData:"https://lottie.host/96adc6e0-7f1e-4464-afa9-9feedf2205df/3BQWA2ZP0L.json",
            title: "Escrow Account",
            link:"/escrowaccount"
        },
        {
            id: 4,
            animationData:"https://lottie.host/06421a3b-9532-4ff2-8c94-adbdfee2e53d/3mvlU4md6X.json",
            title: "Connected Banking",
            link:"/connectedbanking"
        },
        {
            id: 5,
            animationData:"https://lottie.host/3bc2d2bc-168e-4960-a8bc-e0a4acfb965a/udxHiLa7Qc.json",
            title: "Structured Solutions",
            link:"/structuredsolutions"
        },
    ];

    

    const handleCardClick=(link)=>{
        navigate(link);
    };

    return (

        <>
        <style>{`
            .offers-container{
                display:flex;
                align-items:center;
                justify-content:center;
                width:100vw;
                height:300px;   
            }
            .card{
                flex: 0 0 18%; /* Each card takes 18% of the container width */
          height: 300px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease-in-out;
            }
            .card:hover{
                transform:scale(1.05);
            }
            .card-title{
                font-size:18px;
                margin-top:10px;
            }
          
            @media screen and (max-width:768px){
                .offers-container{
                    flex-direction:column;
                    align-items:center;
                }
                .card{
                    width:80%;
                    margin-bottom:20px;
                }
            }
        `}</style>
        <div className="offers-container">
            {offerData.map((card)=>(
                    <div className="card" key={card.id} onClick={()=>handleCardClick(card.link)}>
                        <Player autoplay loop src={card.animationData} style={{ width: "150px", height: "150px" }} />
                        <h3 className="card-title">{card.title}</h3>
                    </div>
                ))}
            </div>
        </>

            );
        };

export default Offer;