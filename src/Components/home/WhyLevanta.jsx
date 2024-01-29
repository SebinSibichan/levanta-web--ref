import * as React from "react";

function Why(props) {
  return (
    <>
      <div className="why-container">
        <div className="why-header">Why choose Levanta Travel</div>

        <div className="why-content">
          <ServiceCard
            title="Comprehensive Services"
            description="We offer a wide range of travel services, ensuring that all aspects of our clients' travel needs are taken care of."
          />
          <ServiceCard
            title="Customer Satisfaction"
            description="We prioritize customer satisfaction and go the extra mile to ensure a seamless and memorable travel experience."
          />
          <ServiceCard
            title="Professionalism"
            description="Our team of experienced professionals is dedicated to providing exceptional service, ensuring that every aspect of the journey is well taken care of."
          />
        </div>

        <div className="why-content">
          <ServiceCard
            title="Global Reach"
            description="With a presence in major cities worldwide, we can cater to the travel needs of clients across the globe."
          />
          <ServiceCard
            title="Competitive Pricing"
            description="We offer competitive pricing without compromising on the quality of our services, making luxury travel accessible to a wider audience."
          />
        </div>
      </div>

      <style jsx>{`
        .why-container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 100px 100px 100px 100px;
        }

        @media (max-width: 991px) {
          .why-container {
            padding: 60px 24px;
            align-items: flex-start;
            gap: 0px;
          }
        }

        .why-header {
          align-self: stretch;
          color: #161616;
          text-align: center;
          letter-spacing: -1.28px;
          font: 600 32px Manrope, sans-serif;
        }

        @media (max-width: 991px) {
          .why-header {
            align-self: center;
            color: #333;
            text-align: center;
            letter-spacing: 0.44px;
            font: 600 28px Manrope, sans-serif;
            line-height:44px;
            padding: 0px 0px 40px;


          }
        }

        .why-content {
          align-self: stretch;
          margin-top: 48px;
          display: flex;
          justify-content: space-between;
          gap:36px;
        }

        @media (max-width: 991px) {
          .why-content {
            flex-direction: column;
            align-items: center;
            gap: 24px;
            display: flex;
            /* margin: 40px 2px 0 0; */
            /* justify-content: center; */
            flex: 18 16 16;
            margin: 0px 7px 0px 24px;
          }
        }
      `}</style>{" "}
    </>
  );
}

function ServiceCard({ title, description }) {
    return (
      <div className="service-card">
        <div className="service-header">{title}</div>
        <div className="service-description">{description}</div>
        <style jsx>
          {`
            .service-card {
              justify-content: center;
              border-radius: 22px;
              box-shadow: 0px 0px 6px 0px rgba(92, 104, 128, 0.08),
                0px 12px 20px 0px rgba(92, 104, 128, 0.08);
              background-color: #fff;
              display: flex;
              flex-grow: 1;
              flex-direction: column;
              width: 48%; 
              padding: 32px 24px;
              margin-bottom: 20px; 
            }
  
            @media (max-width: 991px) {
              .service-card {
                width: 100%;
                margin-top: 20px;
                margin-left: -20px;

              }
            }
  
            .service-header {
              color: #af1222;
              letter-spacing: -0.52px;
              white-space: nowrap;
              font: 700 26px/169% Manrope, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
  
            @media (max-width: 991px) {
              .service-header {
                white-space: initial;
              }
            }
  
            .service-description {
              color: #444;
              margin-top: 16px;
              font: 400 16px/24px Manrope, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
          `}
        </style>
      </div>
    );
  }
  

export default Why;
