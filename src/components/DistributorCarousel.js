import React from "react";
import logo1 from "../assets/distributor1.png";
import logo2 from "../assets/distributor2.png";
import logo3 from "../assets/distributor3.png";
import logo4 from "../assets/distributor4.png";


const DistributorCarousel = () => {
  return (
    <>
      <style>
        {`
          .distributor-carousel-container {
            background-color: #fff;
            padding: 20px 0;
            overflow: hidden;
            border-top: 1px solid #ddd;
          }

          .carousel-heading {
            text-align: center;
            font-size: 1.2rem;
            margin-bottom: 10px;
            color: #333;
          }

          .carousel-track {
            display: flex;
            overflow: hidden;
            position: relative;
          }

          .carousel-slide {
            display: flex;
            animation: scroll 20s linear infinite;
          }

          .carousel-slide img {
            width: 150px;
            height: auto;
            margin: 0 20px;
            object-fit: contain;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <div className="distributor-carousel-container">
        <h3 className="carousel-heading">Our Authorized Distributors</h3>
        <div className="carousel-track">
          <div className="carousel-slide">
            <img src={logo1} alt="Distributor 1" />
            <img src={logo2} alt="Distributor 2" />
            <img src={logo3} alt="Distributor 3" />
            <img src={logo4} alt="Distributor 4" />
            {/* Duplicates for seamless loop */}
            <img src={logo1} alt="Distributor 1" />
            <img src={logo2} alt="Distributor 2" />
            <img src={logo3} alt="Distributor 3" />
            <img src={logo4} alt="Distributor 4" />

            <img src={logo1} alt="Distributor 1" />
            <img src={logo2} alt="Distributor 2" />
            <img src={logo3} alt="Distributor 3" />
            <img src={logo4} alt="Distributor 4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DistributorCarousel;
