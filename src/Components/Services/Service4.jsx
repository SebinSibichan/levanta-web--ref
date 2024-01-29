import travelImage from '../../images/travel.webp';
import travIcon from '../../images/travelicon.svg';
import ContactUsSection from '../../Components/common/ContactBanner';



// Section 1 Component
const ImageSection = () => (
    <div className="image-section">
      <img
        loading="lazy"
        srcSet={travelImage}
        className="image"
      />
    </div>
  );
  
  // Section 2 Component
  const TravelAssist = () => (
    <div className="travelassist-wrap">
            <div className="travelassist-section">
            <div className="icon">
                <img
                loading="lazy"
                src={travIcon}
                className="icon-image"
                />
            </div>
            <div className="heading">Travel Assistance</div>
            <div className="subheading">Travel Insurance</div>
            <div className="description">
            We understand the importance of travel insurance in protecting our clients' travel investments and providing peace of mind. We offer comprehensive travel insurance plans that cover various aspects such as trip cancellation, medical emergencies, lost luggage, and more.     </div>

                    <div className="subheading">MICE & Events</div>
                <div className="description">
                    Our dedicated MICE team specializes in planning and organizing corporate meetings, incentives, conferences, and events. From venue selection to logistics management, we ensure that every aspect of the event is meticulously planned and executed to meet our clients' objectives and expectations.
                </div>
                
            </div>
    </div>       
  );
  
  
  // Main Services Component
  const Services = () => (
    <>
      <ImageSection />
      <TravelAssist />
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
            object-position: ;
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

        .travelassist-wrap{
            align-items: center;
            display: flex;
            flex-direction: column;
            align-content: center;
        }
  
       
        .travelassist-section {
            align-items: left;
            display: flex;
            max-width: 860px;
            flex-direction: column;
            margin-bottom: 0px;
            padding: 100px 0 50px 0;
            }
            
            @media (max-width: 991px) {
            .travelassist-section {
              max-width: 100%;
              margin-left: 20px;
            }
          }
  
          .contain-box{
            display: flex;
            justify-content: space-around;
            z-index: 1;
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

      `}</style>
    </>
  );
  
  export default Services;
  