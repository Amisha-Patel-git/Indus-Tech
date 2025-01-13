import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useNavigate } from "react-router-dom";

const Offer = () => {
    const navigate = useNavigate();

    const offerData = [
        {
            id: 1,
            animationData: "https://lottie.host/2c7ef28a-8bc5-46b9-b3d6-8f2bfc3a29d8/pGoBsBO5bl.json",
            title: "Medical Equipment Financing",
            link: "/MEF"
        },
        {
            id: 2,
            animationData: "https://lottie.host/9bc375d7-068e-4e39-833f-45ee77d0ffe3/EPHxlE3lO8.json",
            title: "Collection Solutions",
            link: "/collectionsolutions"
        },
        {
            id: 3,
            animationData: "https://lottie.host/693c5e24-8f94-4f7d-8ff2-d933a0b415a0/Y4vOLzlthz.json",
            title: "Payout Solutions",
            link: "/payoutsolutions"
        },
        {
            id: 4,
            animationData: "https://lottie.host/96adc6e0-7f1e-4464-afa9-9feedf2205df/3BQWA2ZP0L.json",
            title: "Escrow Account",
            link: "/escrowaccount"
        },
        {
            id: 5,
            animationData: "https://lottie.host/06421a3b-9532-4ff2-8c94-adbdfee2e53d/3mvlU4md6X.json",
            title: "Connected Banking",
            link: "/connectedbanking"
        },
        {
            id: 6,
            animationData: "https://lottie.host/3bc2d2bc-168e-4960-a8bc-e0a4acfb965a/udxHiLa7Qc.json",
            title: "Structured Solutions",
            link: "/structuredsolutions"
        },
    ];

    const handleCardClick = (link) => {
        navigate(link);
    };

    return (
        <>
            <style>{`
                .offers-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    align-items: center;
                    gap: 30px;
                    padding: 50px 20px;
                    background: white;
                    min-height: 40vh;
                    margin-top: 10px;
                }

                .card {
                    flex: 1 1 250px;
                    max-width: 300px;
                    height: 400px;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    overflow: hidden;
                    animation: fadeIn 3s ease-out;
                    margin-bottom: 20px;
                }

                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
                }

                .card-title {
                    font-size: 20px;
                    font-weight: bold;
                    margin-top: 20px;
                    color: #333;
                    transition: color 0.3s ease;
                    padding: 0 10px;  /* Added padding to make the title more readable */
                }

                .card:hover .card-title {
                    color: #FF6347;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* For large screens */
                @media screen and (min-width: 1200px) {
                    .offers-container {
                        display: flex;
                        flex-wrap: nowrap;
                    }
                    .card {
                        flex: 1 1 250px;
                    }
                }

                /* For medium screens (768px and below) */
                @media screen and (max-width: 768px) {
                    .card {
                        flex: 1 1 100%;
                        max-width: none;
                        height: auto;  /* Allow cards to be flexible in height */
                    }

                    .card-title {
                        font-size: 18px;
                        padding: 0 10px;
                    }

                    .card .lottie-player {
                        width: 60%;  /* Adjust the size of animation for smaller screens */
                        height: auto;  /* Make sure height adjusts */
                    }
                }

                /* For extra small screens (480px and below) */
                @media screen and (max-width: 480px) {
                    .card-title {
                        font-size: 16px;
                    }

                    .card .lottie-player {
                        width: 50%;  /* Make animation smaller */
                        height: auto;  /* Maintain aspect ratio */
                    }
                }
            `}</style>
            <div className="offers-container">
                {offerData.map((card) => (
                    <div className="card" key={card.id} onClick={() => handleCardClick(card.link)}>
                        <Player
                            autoplay
                            loop
                            src={card.animationData}
                            style={{
                                width: "80%", // Ensure the animation stays within the card width
                                height: "80%" // Ensure the animation stays within the card height
                            }}
                        />
                        <h3 className="card-title">{card.title}</h3>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Offer;
