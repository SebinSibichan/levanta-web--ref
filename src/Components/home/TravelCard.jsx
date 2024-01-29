import React from "react";

function TravelCard() {
  return (
    <>
      <header className="travel-card">
        <div className="header-container">
          <div className="card-section">
            <span className="card-head">Who We Are</span>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a626f1ed77ae4ecff282bd1f37195229a70e2972abbed8d1e464f687530d8116?"
              alt="Logo"
              className="logo-image"
            />
          </div>
          <div className="tcdescription-section">
            <div className="tcdescription">
              At Levanta, we believe that travel is not just about reaching a destination;
              it's about experiencing the journey, creating memories, and discovering the beauty of the world.
              Our passion for travel drives us to curate exceptional experiences that go beyond the ordinary,
              ensuring that each journey with us is unforgettable.
            </div>
            <a href="/about" className="about-link">
              About Us
            </a>
          </div>
        </div>
      </header>

      <style jsx>{`
        .travel-card {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0px 20px 0 20px;
          overflow: hidden;
          min-height: 100vh;

        }

        @media (max-width: 991px) {
          .travel-card {
            padding: 20px 21px;
          }
        }

        .header-container {
          margin: 100px 30px 20px 40px;
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .header-container {
            max-width: 100%;
            margin: 40px 10px 40px 0;
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }

        .card-section {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 0px;
          position: relative;
        }

        @media (max-width: 991px) {
          .card-section {
            width: 100%;
          }
        }

        .card-head {
          color: #161616;
          letter-spacing: -1.6px;
          font: 600 32px Manrope, sans-serif;
        }

        @media (max-width: 991px) {
          .card-head {
            max-width: 100%;
            margin-left: 10px;
            font-size: 28px;
          }
        }

        .logo-image {
          aspect-ratio: 0.87;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          margin-top: 60px;
        }

        @media (max-width: 991px) {
          .logo-image {
            max-width: 100%;
            margin-top: 40px;
            margin-left: 5px;
          }
        }

        .tcdescription-section {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 60%;
          margin-left: 20px;
          margin-top: 7%;
        }

        @media (max-width: 991px) {
          .tcdescription-section {
            width: 100%;
          }
        }

        .tcdescription {
          color: #444;
          position: relative;
          align-self: normal;
          white-space: normal;
          font: 400 28px/44px Manrope, -apple-system, Roboto, Helvetica, sans-serif;
        }

        @media (max-width: 991px) {
          .tcdescription {
            max-width: 95%;
            margin-top: 40px;
            font-size: 24px;
          }
        }

        .about-link {
          color: #000;
          text-align: center;
          letter-spacing: -0.54px;
          white-space: nowrap;
          justify-content: center;
          border-radius: 47px;
          border: 1px solid #af1222;
          background-color: #fff;
          align-self: start;
          margin: 48px 0 41px;
          padding: 17px 60px;
          font: 600 18px/113.4% Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          text-decoration: none;
        }

        .about-link:hover {
          background-color: #af1222;
          color: #ffffff;
          box-shadow: 5px 5px 15px rgba(255, 2, 2, 0.336);
          transition: all ease 0.2s;
        }

        @media (max-width: 991px) {
          .about-link {
            white-space: initial;
            margin: 40px 0;
            padding: 3% 32%;
          }
        }
      `}</style>
    </>
  );
}

export default TravelCard;
