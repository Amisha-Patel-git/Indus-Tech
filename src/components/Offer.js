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

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex < offerData.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };


    const handlePrev = () => {
        if (startIndex >0) {
            setStartIndex(startIndex - 1);
        }
    };

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
                position:relative;
                width:100vw;
                height:300px;
                overflow:hidden;
            }
            .cards-wrapper{
                display:flex;
                gap:0;
                transition:transform 0.3s ease-in-out;
                width:100%;
            }
            .card{
                flex:0 0 33.33%;
                height:100%;
                background-color:#f9f9f9;
                border-radius:10px;
                box-shadow:0 4px 6px rgba(0,0,0,0.1);
                text-align:center;
                cursor:pointer;
            }
            .card:hover{
                transform:scale(1.05);
            }
            .card-title{
                font-size:18px;
                margin-top:10px;
            }
            .arrow-button{
                background-color:#6f42c1;
                color:white;
                border:none;
                border-radius:70%;
                font-size:20px;
                padding:10px;
                cursor:pointer;
                position:absolute;
                top:50%;
                transform:translateY(-50%);
                z-index:10;
            }
            .left-arrow{
                left:10px;
            }
            .right-arrow{
                right:25px;
            }
            .arrow-button:disable{
                background-color:#ccc;
                cursor:not-allowed;
            }
            .cards-wrapper{
                transform:translateX(-${startIndex*33.33}%);
            }
            @media screen and (max-width:768px){
                .offers-container{
                    height:auto;
                    flex-direction:column;
                    align-items:center;
                }
                .cards-wrapper{
                    flex-direction:column;
                }
                .card{
                    width:80%;
                    margin-bottom:20px;
                }
                .arrow-button{
                    position:static;
                    margin:10px 0;
                    width:40px;
                    height:40px;
                }
                .left-arrow{
                    margin-right:10px;
                }
                .right-arrow{
                    margin-left:10px;
                }
            }
        `}</style>
        <div className="offers-container">
            <button className="arrow-button left-arrow" onClick={handlePrev} disabled={startIndex===0}>
                &lt;
            </button>
            <div className="cards-wrapper">
                {offerData.slice(startIndex, startIndex+3).map((card)=>(
                    <div className="card" key={card.id} onClick={()=>handleCardClick(card.link)}>
                        <Player autoplay loop src={card.animationData} style={{ width: "150px", height: "150px" }} />
                        <h3 className="card-title">{card.title}</h3>
                    </div>
                ))}
            </div>
            <button className="arrow-button right-arrow" onClick={handleNext} disabled={startIndex>=offerData.length-3}>
                &gt;
            </button>
        </div>
        </>

            );
        };

export default Offer;