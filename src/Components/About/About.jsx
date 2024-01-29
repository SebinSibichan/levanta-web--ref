import * as React from "react";

function About() {
  return (
    <>
      <div className="about-contain">
        
          <div className="about-div-6">The Story of Levanta</div>
          <div className="about-div-7">
            Levanta Travel is a leading provider of comprehensive travel
            services worldwide. With a focus on customer satisfaction, we offer
            a wide range of services including hotel accommodation, airline
            tickets, airport transfers, chauffeur services, VIP meet and greet,
            private charter flights, yacht and helicopter rental, cruises, car
            rental, travel insurance, and MICE (Meetings, Incentives,
            Conferences, and Events) planning.
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7590546dd45f0a1baaba1724a00afa8326bd3fdff09dba3294bae46c49c4185c?
            "
            className="about-cover"
          />
          <span className="about-span-4">

            <div className="about-div-8">Our mission</div>
            <div className="about-div-9">
              Our mission is to provide exceptional travel experiences that
              inspire and enrich the lives of our clients. We aim to create
              personalized itineraries that cater to their unique preferences and
              interests, ensuring that every journey is memorable and
              transformative. We strive to be a trusted partner, offering expert
              guidance, seamless logistics, and unparalleled customer service.
            </div>
            <div className="about-div-10">Our vision</div>
            <div className="about-div-11">
              Our vision is to be the preferred travel agency for discerning
              travellers seeking extraordinary experiences. We aspire to be known
              for our attention to detail, creativity, and commitment to
              delivering exceptional service. We aim to continuously innovate and
              expand our offerings, staying ahead of industry trends and providing
              our clients with the most immersive and authentic travel
              experiences. We envision a world where travel becomes a catalyst for
              personal growth, cultural understanding, and lifelong memories.
            </div>
          
        </span>
        
      </div>
      <style jsx>{`
        .about-contain {
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }
        .about-div-2 {
          justify-content: space-between;
          background-color: #fff;
          display: flex;
          width: 100%;
          gap: 20px;
          padding: 12px 80px;
        }
        @media (max-width: 991px) {
          .about-div-2 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
       
        .about-span {
          align-items: flex-start;
          align-self: start;
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .about-div-3 {
          color: #777;
          letter-spacing: -0.42px;
          text-transform: uppercase;
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 600 14px/107% Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .about-div-3 {
            white-space: initial;
          }
        }
        .about-span-2 {
          color: #333;
          letter-spacing: -0.42px;
          text-transform: uppercase;
          white-space: nowrap;
          justify-content: center;
          border-bottom: 2px solid #af1222;
          align-self: stretch;
          aspect-ratio: 1.1428571428571428;
          padding: 10px 0;
          font: 600 14px/107% Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .about-span-2 {
            white-space: initial;
          }
        }
        .about-div-4 {
          color: #777;
          letter-spacing: -0.42px;
          text-transform: uppercase;
          align-self: center;
          margin: auto 0;
          font: 600 14px/107% Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .about-div-5 {
          color: #777;
          letter-spacing: -0.42px;
          text-transform: uppercase;
          align-self: center;
          margin: auto 0;
          font: 600 14px/107% Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .about-span-3 {
          color: #fff;
          letter-spacing: -0.42px;
          text-transform: uppercase;
          white-space: nowrap;
          justify-content: center;
          border-radius: 36px;
          background-color: #af1222;
          align-self: center;
          flex-grow: 1;
          margin: auto 0;
          padding: 8px 24px;
          font: 600 14px/107% Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .about-span-3 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .about-span-4 {
          align-items: center;
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 20px 0px 50px;
        }
        @media (max-width: 991px) {
          .about-span-4 {
            max-width: 84%;
            margin-top: 40px;
            margin-left: 34px;

          }
        }
        .about-div-6 {
          color: #161616;
          text-align: center;
          letter-spacing: -1.6px;
          align-self: center;
          font: 600 40px Manrope, sans-serif;
          top: 10px;
          margin-top: 100px;
        }
        @media (max-width: 991px) {
          .about-div-6 {
            max-width: 100%;
            margin-top: 129px;
            font-size: 32px;
            margin-left: -45px;
          }
        }

        .about-div-7 {
          color: #444;
          text-align: left;
          align-self: center;
          margin-top: 30px;
          max-width: 81%;
          font: 400 20px/34px Manrope, -apple-system, Roboto, Helvetica, sans-serif;
        }

        @media (max-width: 991px) {
          .about-div-7 {
            max-width: 90%;
            font: 500 20px/40px Manrope, -apple-system, Roboto, Helvetica,
            sans-serif
          }
        }
        .about-cover {
          aspect-ratio: 3.42;
          object-fit: contain;
          object-position: center;
          width: 100%;
          align-self: stretch;
          overflow: hidden;
          margin-top: 100px;
        }
        @media (max-width: 991px) {
          .about-cover {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .about-div-8 {
          color: #161616;
          text-align: center;
          letter-spacing: -1.28px;
          align-self: center;
          margin-top: 100px;
          white-space: nowrap;
          font: 600 32px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
          .about-div-8 {
            margin-top: 40px;
            white-space: initial;
            align-self: flex-start;
          }
        }
        .about-div-9 {
          align-self: center;
          color: #444;
          text-align: center;
          margin-top: 12px;
          max-width: 860px;
          font: 400 16px/24px Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .about-div-9 {
            max-width: 100%;
            text-align: left;
          }
        }

        .about-div-10 {
          color: #161616;
          text-align: center;
          letter-spacing: -1.28px;
          align-self: center;
          margin-top: 36px;
          white-space: nowrap;
          font: 600 32px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
          .about-div-10 {
            margin-top: 40px;
            white-space: initial;
            align-self: flex-start;
          }
        }
        .about-div-11 {
          align-self: center;
          color: #444;
          text-align: center;
          margin-top: 12px;
          max-width: 860px;
          font: 400 16px/24px Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .about-div-11 {
            max-width: 100%;
            text-align: left;

          }
        }
        
      `}</style>
    </>
  );
}

export default About;