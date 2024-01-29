import ContactUsSection from '../../Components/common/ContactBanner';
import Image2 from '../../images/flight.webp';


// Section 1 Component
const ImageSection = () => (
    <div className="image-section">
      <img
        loading="lazy"
        srcSet={Image2}
        className="image"
      />
    </div>
  );
  
  // Section 2 Component
  const TransportationsSection = () => (
    <div className="transportaion-wrap">
            <div className="transportations-section">
            <div className="icon">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89eb814a6f30ce4a72501f141d9048ece17592696e3d1e5f121267ca13e75eab?"
                className="icon-image"
                />
            </div>
            <div className="heading">Transportations</div>
            <div className="subheading">Airline Tickets</div>
            <div className="description">
            As a full-service travel agency, we offer airline ticket booking
                    services for both domestic and international flights. Our
                    experienced travel consultants assist clients in finding the best
                    flight options, considering factors such as price, schedule, and
                    airline preferences. We strive to provide competitive prices and
                    convenient travel arrangements.      </div>

                    <div className="subheading">Airport Transfers & Chauffeur Service</div>
                <div className="description">
                    We understand the importance of seamless transportation when
                    traveling. Our airport transfer services ensure hassle-free journeys
                    from the airport to the hotel or any other desired destination. Our
                    professional chauffeurs are well-trained, punctual, and
                    knowledgeable about the local area, ensuring a comfortable and
                    efficient travel experience.
                </div>
                <div className="subheading">Cruises</div>
                <div className="description">
                    We offer a wide range of cruise options, allowing clients to explore
                    various destinations while enjoying the comfort and luxury of a
                    cruise ship. From river cruises to ocean cruises, we can assist in
                    finding the perfect cruise itinerary that suits our clients'
                    preferences and interests.
                </div>{" "}
                <div className="subheading">Car Rental</div>{" "}
                <div className="description">
                    We provide car rental services in various locations worldwide,
                    allowing clients to have the freedom and flexibility to explore
                    their destination at their own pace. Our extensive fleet of vehicles
                    ensures that clients have access to a wide range of options, from
                    economy cars to luxury vehicles.
                </div>    
            </div>
    </div>       
  );
  
  
  const Services = () => (
    <>
      <ImageSection />
      <TransportationsSection />
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
            max-width: 100%;
            overflow: hidden;
            align-self: stretch;
        }
        @media (max-width: 991px) {
            .image{
              aspect-ratio: 0.8;
              margin-top: 100px;
            }
          }


        .transportaion-wrap{
            align-items: center;
            display: flex;
            flex-direction: column;
            align-content: center;
        }
  
       
        .transportations-section {
            align-items: left;
            display: flex;
            max-width: 860px;
            flex-direction: column;
            margin-bottom: 0px;
            padding: 100px 0 50px 0;
}
          @media (max-width: 991px) {
            .transportations-section {
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
              max-width: 90%;            }
          }
  
        .contact-us-section {
          disply: flex;
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
          z-index: 1;
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
            font: 400 15px/24px Manrope, -apple-system, Roboto, Helvetica,sans-serif;
            margin-left: 0px;
            sans-serif;
            max-width: 450px; 
            background-color: #000 50% transparent;
            z-index: 1;
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
              padding: 0px 20px;
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