import luxImage from '../../images/yacht.webp';
import luxIcon from '../../images/vip-crown-fill.svg';
import ContactUsSection from '../../Components/common/ContactBanner';



// Section 1 Component
const ImageSection = () => (
    <div className="image-section">
      <img
        loading="lazy"
        srcSet={luxImage}
        className="image"
      />
    </div>
  );
  
  // Section 2 Component
  const Luxury = () => (
    <div className="luxury-wrap">
            <div className="luxury-section">
            <div className="icon">
                <img
                loading="lazy"
                src={luxIcon}
                className="icon-image"
                />
            </div>
            <div className="heading">Luxury and VIP</div>
            <div className="subheading">VIP Meet & Greet</div>
            <div className="description">
            For our esteemed clients, we offer VIP meet and greet services to enhance their travel experience. Our dedicated team ensures a warm welcome upon arrival, assisting with immigration and customs procedures, luggage handling, and providing personalized assistance throughout the journey. We prioritize privacy, convenience, and efficiency to make our VIP clients feel valued and well taken care of.      </div>

                    <div className="subheading">Private Charter Flights</div>
                <div className="description">
                We provide private charter flight services for clients who prefer a more personalized and flexible travel experience. Whether it's for business or leisure purposes, our team can arrange private jet or helicopter charters to various destinations worldwide. We ensure a seamless and luxurious travel experience tailored to our clients' specific requirements.

                </div>
                <div className="subheading">Yacht & Helicopter Rental</div>
                <div className="description">
                For clients seeking unique and luxurious travel experiences, we offer yacht and helicopter rental services. Whether it's exploring the coastline on a private yacht or enjoying a scenic helicopter tour, we can arrange these experiences to create unforgettable memories.
                </div>{" "}
                 
            </div>
    </div>       
  );
  
  
  
  // Main Services Component
  const Services = () => (
    <>
      <ImageSection />
      <Luxury />
      <ContactUsSection />
      <style jsx>{`
        .image-section {
          
            align-items: center;
            background-color: #fff;
            display: flex;
            max-width: 100%;
            flex-direction: column;
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


        .luxury-wrap{
            align-items: center;
            display: flex;
            flex-direction: column;
            align-content: center;
        }
  
       
        .luxury-section {
            align-items: left;
            display: flex;
            max-width: 860px;
            flex-direction: column;
            margin-bottom: 0px;
            padding: 100px 0 50px 0;
            }
        
            @media (max-width: 991px) {
            .luxury-section {
              max-width: 100%;
              margin-left: 20px;
            }
          }
  
        .icon {
          /* Icon styles */
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
              max-width: 90%;            }
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

          .heading2 {
          color: #fff;
            letter-spacing: -1.44px;
            align-self: stretch;
            width: 83%;
            font: 600 65px Manrope, sans-serif;
        }
         @media (max-width: 991px) {
            .heading2 {
              max-width: 100%;
            }
          }
  
          .background-image {
          position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
  
        .content {
          max-width: 100%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          margin-top: -59px;
            }
          @media (max-width: 991px) {
            .content {
              max-width: 100%;
            }
          }

          .description2 {
           align-self: stretch;
            color: #fff;
            margin-top: 0px;
            font: 400 20px/24px Manrope, -apple-system, Roboto, Helvetica,sans-serif;
            margin-left: 0px;
            sans-serif;
            max-width: 450px; 
            background-color: #000 50% transparent;
        }
        
        @media (max-width: 991px) {
            .description2 {
              max-width: 100%;
            }
          }
  
        .lets-talk-button {
           color: #000;
            text-align: center;
            letter-spacing: -0.48px;
            white-space: nowrap;
            justify-content: right;
            align-items: center;
            border-radius: 47px;
            background-color: #fff;
            align-self: flex-start;
            margin: -34px 0;
            padding: 18px 60px;
            font: 600 16px/113.4% Plus Jakarta Sans, -apple-system, Roboto,
            Helvetica, sans-serif;
            z-index: 1;
        }
        
        @media (max-width: 991px) {
            .lets-talk-button {
              white-space: initial;
              padding: 5px 20px;
              margin:0px;
            }
          }
        
          .lets-talk-button:hover{
            color: #fff;
            background-color: #aaa;

        }

      `}</style>
    </>
  );
  
  export default Services;
  