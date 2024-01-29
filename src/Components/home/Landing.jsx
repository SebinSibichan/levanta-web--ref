import React from 'react';
import { useNavigate } from 'react-router-dom';
import localImage1 from '../../images/bali.webp';
import localImage2 from '../../images/ireland.webp';
import localImage3 from '../../images/sydney.webp';
import localImage4 from '../../images/eiffel.webp';



function LandingComponent() {
  const history = useNavigate();

  function DestinationCard({ placeName, imageUrl }) {
    return (
      <div className="destination-card">
        <span className="place-name">{placeName}</span>
        <img loading="lazy" srcSet={imageUrl} className="img" alt=""/>
      </div>
    );
  }

  

  return (
    <>
      <div className="landing-wrapper">
        <div className="background-img">
          <div className="main-header">
            <span style={{ textTransform: "none" }}>Discover Your Next </span>
            <span style={{ textTransform: "none" }}>Adventure with Levanta</span>
          </div>
          <button className="explore-btn" onClick={() => history('/services/page2')}>
  Explore our Services
</button>
          <div className="popular-destinations">Popular Destinations</div>
          <div className="destinations-container">
            <DestinationCard placeName="Bali, Indonesia" imageUrl={localImage1} />
            <DestinationCard placeName="Kerry, Ireland" imageUrl={localImage2} />
            <DestinationCard placeName="Sydney, Australia" imageUrl={localImage3} />
            <DestinationCard placeName="Paris, France" imageUrl={localImage4} />
          </div>
        </div>
      </div>

      <style jsx>{`
     
       .landing-wrapper {
          align-items: center;
          max-width: 100%;
          padding: 20px 0px;
          background-color: #fff;
          overflow: hidden;
          height: 100vh;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 991px){
          .landing-wrapper{
            height:100vh;
          }
        }

        .background-img {
          width:100%;
          background-image: url('../images/main-background.webp');
          background-size: cover;
          z-index: 1;
          height:70vh;
          margin-top: -17px;
          object-fit: cover;
          object-position: center;
          
        }
        
        @media (max-width:991px){
          .background-img{
            height:80vh;
          }
        }
        

        .main-header {
          color: #fcfcfc;
          letter-spacing: -0.25px;
          text-transform: uppercase;
          width: 440px;
          max-width: 100%;
          font: 600 56px/59px Manrope, -apple-system, Roboto, Helvetica, sans-serif;
          margin-left: 50px;
          margin-top: 68px;
          padding: 70px 23px 0px;

        }

        @media (max-width: 991px) {
          .main-header {
            font-size: 37px;
            max-width: 312px;
            line-height: 42px;
            margin-left: 4px;
            position: relative;
            top: 190px;
            transform: translateY(-50px);
          }
        }

        .explore-btn {
          color: #4f4f4f;
          white-space: nowrap;
          justify-content: center;
          border-radius: 23.004px;
          backdrop-filter: blur(6.441144943237305px);
          background-color: #fff;
          margin-top: 32px;
          padding: 15px 46px;
          font: 500 15px Inter, sans-serif;
          margin-left: 75px;
          text-decoration: none;
        }

        .explore-btn:hover {
          background-color: #AF1222;
          color:#ffffff;
          box-shadow: 5px 5px 15px rgba(255, 2, 2, 0.336);
          transition: all ease 0.2s;
        }

        @media (max-width: 991px) {
          .explore-btn {
            white-space: initial;
            padding: 14px 42px;
            margin: 175px 24px 0px;
          }
        }

        .popular-destinations {
          color: #fdfdfd;
          align-self: stretch;
          margin: 17px 0px;
          width: 100%;
          font: 500 22px/24px Manrope, sans-serif;
          margin-left: 72px;
          padding: 70px 0px 0px;

        }

        @media (max-width: 991px) {
          .popular-destinations {
            font-height: 20;
            max-width: 100%;
            margin: 48px 0px 48px 27px;
            font-size: 20px;
            padding: 24px 0px;
          }
        }

        .destinations-container {
          align-self: stretch;
          display: flex;
          max-width: 100%;
          justify-content: flex-start;
          gap: 20px;
          padding: 0 13px 10px;
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: transparent;
          margin: 2% 32px;
          display: flex;

        }

        @media (max-width: 991px) {
          .destinations-container {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin: -285px 14px;

        }
          }
        

        .destinations-container::-webkit-scrollbar {
          width: 70px;
        }

        .destinations-container::-webkit-scrollbar-thumb {
          background-color: transparent;
          transition: background-color 0.3s;
        }
        .destinations-container:hover::-webkit-scrollbar-thumb {
          background-color: #ddd;
        }
        .destinations-container:hover::-webkit-scrollbar-track {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .destination-card {
          display: flex;
          flex-direction: column;
          color: #fff;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          border-radius: 8px;
          aspect-ratio: 1.6;
          flex-shrink: 0;
          flex-grow: 1;
          align-items: start;
          padding: 14px 27px;
          font: 400 18px Manrope, sans-serif;
          transition: padding 0.3s;
          min-width: 250px;
        }

        .destination-card:hover {
          padding: 14px 54px;
        }

        @media (max-width: 991px) {
          .destination-card {
            white-space: initial;
            /* padding: 0px 0px 0; */
            position: relative;
            margin-top: 31vh;
          }
        }

        .img {
          color: #ddd;
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 991px){
          .img{
          position: absolute;
          inset: 0;
          height: 100%;
          width: 102%;
          }
          }

        .place-name {
          position: absolute;
          left: 20px;
          bottom: 20px;
          color: #fff;
          font: 500 16px Manrope, sans-serif;
          z-index: 1;  
        }
      `}</style>
    </>
  );
}

export default LandingComponent;