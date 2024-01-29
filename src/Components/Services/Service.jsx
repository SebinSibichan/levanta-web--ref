import accomImage from '../../images/hotelroom.webp';
import accomIcon from '../../images/accomicon.svg';
import ContactUsSection from '../../Components/common/ContactBanner';

// Section 1 Component

const ImageSection = () => (
    <div className="image-section">
      <img
        loading="lazy"
        srcSet={accomImage}
        className="image"
      />
    </div>
  );
  
  // Section 2 Component
  const AccommodationsSection = () => (
    <div className="accommodation-wrap">
            <div className="accommodations-section">
            <div className="icon">
                <img
                loading="lazy"
                src={accomIcon}
                className="icon-image"
                />
            </div>
            <div className="heading">Accommodations</div>
            <div className="subheading">Hotel Accommodation</div>
            <div className="description">
            We provide a vast selection of hotel accommodation options across the globe, catering to various budgets and preferences. Our extensive network of partner hotels ensures that our clients have access to the best rates and availability. Whether it's a luxury resort, boutique hotel, or budget-friendly accommodation, we have options to suit every traveller’s needs.   </div>

                    <div className="subheading">Levanta Connect (B2B Online Portal)</div>
                <div className="description">
                Levanta Connect is a B2B online portal designed to streamline and simplify the travel booking process for travel agents, tour operators, and other travel industry professionals. With a user-friendly interface and a wide range of features, Levanta Connect provides a comprehensive platform for accessing and booking hotel accommodation, airport transfers, chauffeur services, and other travel services worldwide.
                </div>
            </div>
    </div>       
  );

  
  // Main Services Component
  const Services = () => (
    <>
      <ImageSection />
      <AccommodationsSection />
      <ContactUsSection />
      <style jsx>{`
        .image-section {
            align-items: center;
            background-color: #fff;
            display: flex;
            max-width: 100%;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .image-section {
              
            }
          }
        
        .image {
          aspect-ratio: 3.8;
            object-fit: cover;
            object-position: center;
            width: 100%;
            overflow: hidden;
            align-self: stretch;
        }
        @media (max-width: 991px) {
            .image{
              aspect-ratio: 0.8;
              max-width: 100%;
              margin-top: 100px;
            }
          }


        .accommodation-wrap{
            align-items: center;
            display: flex;
            flex-direction: column;
            align-content: center;
        }
  
       
        .accommodations-section {            
            display: flex;
            max-width: 860px;
            flex-direction: column;
            margin-bottom: 0px;
            padding: 100px 0 100px 0;
            align-items: left;    
}
          @media (max-width: 991px) {
            .accommodations-section {
              max-width: 100%;
              margin-left: 20px;
            }
          }
  
        .icon-image {
          aspect-ratio: 1.26;
            object-fit: contain;
            object-position: center;
            width: 53px;
            fill: #161616;
            overflow: hidden;
            align-self: start;
            max-width: 100%;
        }
  
        .heading {
          color: #ffffgg;
            letter-spacing: -1.44px;
            align-self: stretch;
            width: 100%;
            font: 600 36px Manrope, sans-serif;
        }
         @media (max-width: 991px) {
            .heading {
              max-width: 100%;
            }
          }
  
        .subheading {
          color: #161616;
            letter-spacing: -0.96px;
            align-self: stretch;
            margin-top: 60px;
            width: 100%;
            font: 600 24px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
            .subheading {
              max-width: 100%;
              margin-top: 40px;
            }
          }
  
        .description {
          align-self: stretch;
            color: #444;
            margin-top: 12px;
            width: 100%;
            font: 400 16px/24px Manrope, -apple-system, Roboto, Helvetica,
              sans-serif;
        }
        
        @media (max-width: 991px) {
            .description {
              max-width: 90%;
            }
          }
  
        .contact-us-section {
          display: flex;
            flex-direction: column;
            justify-content: center;
            align-self: stretch;
            overflow: hidden;
            position: relative;
            display: flex;
            min-height: 195px;
            margin-top: 100px;
            width: 100%;
            padding: 37px 50px;
          }
          @media (max-width: 991px) {
            .contact-us-section {
              max-width: 100%;
              margin-top: 40px;
              padding: 0 20px;
            }
          }
  
          .contact-us-section {
            position: relative;
            overflow: hidden;
          }

          .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 100%;
            padding: 0 40px; 
            z-index: 1;
            position: relative;
          }

          .text-content {
            max-width: 450px;
            margin-left: 72px;

          }

          .heading2 {
            color: #fff;
            letter-spacing: -1.44px;
            font: 600 65px Manrope, sans-serif;
            margin-bottom: 16px; 
          }
          @media (max-width: 991px) {
            .heading2 {
              max-width: 100%;
              font: 30px;
            }
          }

          .description2 {
            color: #fff;
            font: 500 18px/29px Manrope, -apple-system, Roboto, Helvetica, sans-serif;
            text-shadow: #888;
          }

          @media (max-width: 991px) {
            .description2 {
              max-width: 100%;
              font: 10px;
            }
          }

          .lets-talk-button {
            color: #99999;
            text-align: center;
            margin-right: 50px;
            letter-spacing: -0.48px;
            white-space: nowrap;
            border-radius: 47px;
            background-color: #fff;
            padding: 18px 60px;
            font: 600 16px/113.4% Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          }

          .background-image {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }

          @media (max-width: 991px) {
            .lets-talk-button {
              white-space: initial;
              padding: 10px 45px;
              margin:0px;
            }
          }
        
          .lets-talk-button:hover{
            color: #fff;
            background-color: #aaa;}
      }

    `}</style>
  </>
);

export default Services;
  