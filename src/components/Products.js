import React from "react";
import { useNavigate } from "react-router-dom";

const Products =()=>{

  const navigate = useNavigate();
    
  const products = [
    {
      title: "Collection Solutions",
      content: "Empower yout business with seamlesscollection solutions tailored to suit your needs.",
      imgSrc: "CollectionSolutions.jpeg",
      link:"/collectionsolutions",
    },
    {
      title: "Payout Solutions",
      content: "Simlify payments and enhance efficiency with our reliable payout solutions.",
      imgSrc: "PayoutSolutions.jpeg",
      link:"/payoutsolutions"
    },
    {
      title: "Escrow with Banks",
      content: "Experience secure transactionswith our escrow services in partnership with banks.",
      imgSrc: "escrow.jpg",
      link:"/escrowaccount"
    },
    {
      title: "Structured Solutions",
      content: "Unlock growth with customized and structured financial solutions for your business",
      imgSrc: "StructuredSolutions.jpeg",
      link:"/structuredsolutions"
    },
    {
      title: "Connected Banking",
      content: "Integrate banking solutions seamlessly with our advanced connected banking tools.",
      imgSrc: "ConnectedBanking.jpeg",
      link:"/connectedbanking"
    }
  ]

  const handleCardClick=(link)=>{
    navigate(link);
};

    return(
      <>
      <style>
        {`
          .products-page{
    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.products-page-content{
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 90%;
    
    padding: 10%;
    
    top: 50%;
    left: 50%;
    
    text-align: center;
    overflow-y: auto;
    max-height: 90%;
    z-index: 1000;
}

.products-heading{
    font-size: 28px;
    font-weight: bold;
    color: #ff5722;
    margin-top: 10px;
    margin-bottom: 20px;
}
.products-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}
.product-card{
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover{
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.product-image{
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
}
.product-title{
    font-size: 22px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 10px;
}
.product-content{
    font-size: 16px;
    color: #666666;
    line-height: 1.6;
}
    @media (max-width: 768px) {
            .products-page-content {
              padding: 5%;
            }

            .products-heading {
              font-size: 24px;
            }

            .product-card {
              max-width: 100%;
              padding: 15px;
            }

            .product-image {
              max-height: 150px;
            }

            .product-title {
              font-size: 18px;
            }

            .product-content {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .products-heading {
              font-size: 20px;
            }

            .product-title {
              font-size: 16px;
            }

            .product-content {
              font-size: 12px;
            }
          }
        `}
      </style>
        <div className="products-page">
            <div className="products-page-content">
              <h1 className="products-heading">Our Products</h1>
              <div className="products-container">
                {products.map((product, index) => (
                  <div
                    className="product-card"
                    key={index}
                    onClick={()=>handleCardClick(product.link)}
                  >
                    <img src={product.imgSrc}
                      alt={product.title}
                      className="product-image"
                    />
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-content">{product.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </>
    );
};

export default Products;