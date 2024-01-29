import Image1 from '../../images/hotelroom.webp';
import Image2 from '../../images/car.webp';
import Image3 from '../../images/yacht.webp';
import Image4 from '../../images/travel.webp';

function OurServices() {
  return (
    <>
      <div className='main-wrap-serv'>
        <div className="div-serv-1">
          <div className="div-serv-2">
              <span className="span-serv">
                <div className="div-serv-3">Our Services</div>
                <div className="div-serv-4">
                  Unlock extraordinary journeys with our seamless travel
                  solutions—curated accommodations, premium transport, exclusive
                  VIP experiences, and comprehensive travel assistance. Your
                  adventure, perfected
                </div>
              </span>
              </div>
          </div>
        <div className="card-container">
          <div className="card">
            <img
            loading="lazy"
            srcSet={Image1}
            className="card-image"
            alt="Image description"
          />
          <div className="card-overlay">
            <div className="hover-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                className="card-icon"
              >
                <path d="M26.25 29H29.25V17H20.25V29H23.25V20H26.25V29ZM5.25 29V6.5C5.25 6.10218 5.40804 5.72064 5.68934 5.43934C5.97064 5.15804 6.35218 5 6.75 5H27.75C28.1478 5 28.5294 5.15804 28.8107 5.43934C29.092 5.72064 29.25 6.10218 29.25 6.5V14H32.25V29H33.75V32H3.75V29H5.25ZM11.25 17V20H14.25V17H11.25ZM11.25 23V26H14.25V23H11.25ZM11.25 11V14H14.25V11H11.25Z" 
                fill="white" /> 
              </svg>
              <h2 className="card-title">Accommodation</h2>
            </div>
            <div className="contents">
              <h3>Hotel Accommodation</h3>
              <h3>Levanta Connect (B2B Online Portal)</h3>
              <span className="link-wrapper">
              <a href="/services/page1" className="link">View More</a>
              </span>
            </div>
          </div>
          </div>
          <div className="card">
            {}
            <img
              loading="lazy"
              srcSet={Image2}
              className="card-image"
              alt="Image description"
            />
          <div className="card-overlay">
            <div className="hover-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
  <path d="M15 0.351685H4.5C3.30653 0.351685 2.16193 0.82579 1.31802 1.6697C0.474106 2.51362 0 3.65821 0 4.85168V16.8517C0 18.0452 0.474106 19.1898 1.31802 20.0337C2.16193 20.8776 3.30653 21.3517 4.5 21.3517L3 22.8517V24.3517H4.5L7.5 21.3067L10.5 21.3517V13.8517H3V3.35168H16.5V6.35168H19.5V4.85168C19.5 3.65821 19.0259 2.51362 18.182 1.6697C17.3381 0.82579 16.1935 0.351685 15 0.351685ZM4.5 15.3517C4.89782 15.3517 5.27936 15.5097 5.56066 15.791C5.84196 16.0723 6 16.4539 6 16.8517C6 17.2495 5.84196 17.631 5.56066 17.9123C5.27936 18.1936 4.89782 18.3517 4.5 18.3517C4.10218 18.3517 3.72064 18.1936 3.43934 17.9123C3.15804 17.631 3 17.2495 3 16.8517C3 16.4539 3.15804 16.0723 3.43934 15.791C3.72064 15.5097 4.10218 15.3517 4.5 15.3517ZM27.855 8.84168C27.645 8.24168 27.075 7.85168 26.4 7.85168H15.615C14.925 7.85168 14.37 8.24168 14.145 8.84168L12 15.0067V23.2717C12 23.8417 12.48 24.3517 13.05 24.3517H13.98C14.55 24.3517 15 23.7817 15 23.2117V21.3517H27V23.2117C27 23.7817 27.465 24.3517 28.035 24.3517H28.95C29.52 24.3517 30 23.8417 30 23.2717V15.0067L27.855 8.84168ZM15.615 9.35168H26.4L27.945 13.8517H14.07L15.615 9.35168ZM15 18.3517C14.6022 18.3517 14.2206 18.1936 13.9393 17.9123C13.658 17.631 13.5 17.2495 13.5 16.8517C13.5 16.4539 13.658 16.0723 13.9393 15.791C14.2206 15.5097 14.6022 15.3517 15 15.3517C15.3978 15.3517 15.7794 15.5097 16.0607 15.791C16.342 16.0723 16.5 16.4539 16.5 16.8517C16.5 17.2495 16.342 17.631 16.0607 17.9123C15.7794 18.1936 15.3978 18.3517 15 18.3517ZM27 18.3517C26.6022 18.3517 26.2206 18.1936 25.9393 17.9123C25.658 17.631 25.5 17.2495 25.5 16.8517C25.5 16.4539 25.658 16.0723 25.9393 15.791C26.2206 15.5097 26.6022 15.3517 27 15.3517C27.3978 15.3517 27.7794 15.5097 28.0607 15.791C28.342 16.0723 28.5 16.4539 28.5 16.8517C28.5 17.2495 28.342 17.631 28.0607 17.9123C27.7794 18.1936 27.3978 18.3517 27 18.3517Z" 
  fill="white"/>
</svg>
              <h2 className="card-title">Transportations</h2>
            </div>
            <div className="contents2">
              <h3>Airline Tickets</h3>
              <h3>Airport Transfers & Chauffeur Service</h3>
              <h3>Cruises</h3>
              <h3>Car Rental</h3>

              <span className="link-wrapper">
                <a href="/services/page2" className="link">View More</a>
              </span>
            </div>
          </div>
            {}
          </div>
          <div className="card">
            {}
            <img
            loading="lazy"
            srcSet={Image3}
            className="card-image"
            alt="Image description"
          />
          <div className="card-overlay">
            <div className="hover-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <path d="M3.5075 28.8517H33.5075V31.8517H3.5075V28.8517ZM3.5075 7.85168L11.0075 12.3517L18.5075 3.35168L26.0075 12.3517L33.5075 7.85168V25.8517H3.5075V7.85168Z" 
  fill="white"/>
</svg>
              <h2 className="card-title">Luxury and VIP </h2>
            </div>
            <div className="contents3">
              <h3>VIP Meet & Greet</h3>
              <h3>Private Charter Flights</h3>
              <h3>Yacht & Helicopter Rental</h3>
              <span className="link-wrapper">
                <a href="/services/page3" className="link">View More</a>
              </span>
            </div>
          </div>
            {}
          </div>
          <div className="card">
            {}
            <img
            loading="lazy"
            srcSet={Image4}
            className="card-image"
            alt="Image description"
          />
          <div className="card-overlay">
            <div className="hover-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <path d="M18 33.3517C15.925 33.3517 13.975 32.9577 12.15 32.1697C10.325 31.3817 8.7375 30.3132 7.3875 28.9642C6.0375 27.6142 4.969 26.0267 4.182 24.2017C3.395 22.3767 3.001 20.4267 3 18.3517C3 16.2767 3.394 14.3267 4.182 12.5017C4.97 10.6767 6.0385 9.08918 7.3875 7.73918C8.7375 6.38918 10.325 5.32068 12.15 4.53368C13.975 3.74668 15.925 3.35268 18 3.35168C21.65 3.35168 24.844 4.49568 27.582 6.78368C30.32 9.07168 32.026 11.9402 32.7 15.3892H29.625C29.15 13.5642 28.2935 11.9332 27.0555 10.4962C25.8175 9.05918 24.299 7.97768 22.5 7.25168V7.85168C22.5 8.67668 22.2065 9.38318 21.6195 9.97118C21.0325 10.5592 20.326 10.8527 19.5 10.8517H16.5V13.8517C16.5 14.2767 16.356 14.6332 16.068 14.9212C15.78 15.2092 15.424 15.3527 15 15.3517H12V18.3517H15V22.8517H13.5L6.3 15.6517C6.225 16.1017 6.1565 16.5517 6.0945 17.0017C6.0325 17.4517 6.001 17.9017 6 18.3517C6 21.6267 7.15 24.4392 9.45 26.7892C11.75 29.1392 14.6 30.3267 18 30.3517V33.3517ZM31.65 32.6017L26.85 27.8017C26.325 28.1017 25.7625 28.3517 25.1625 28.5517C24.5625 28.7517 23.925 28.8517 23.25 28.8517C21.375 28.8517 19.7815 28.1957 18.4695 26.8837C17.1575 25.5717 16.501 23.9777 16.5 22.1017C16.5 20.2267 17.1565 18.6332 18.4695 17.3212C19.7825 16.0092 21.376 15.3527 23.25 15.3517C25.125 15.3517 26.719 16.0082 28.032 17.3212C29.345 18.6342 30.001 20.2277 30 22.1017C30 22.7767 29.9 23.4142 29.7 24.0142C29.5 24.6142 29.25 25.1767 28.95 25.7017L33.75 30.5017L31.65 32.6017ZM23.25 25.8517C24.3 25.8517 25.1875 25.4892 25.9125 24.7642C26.6375 24.0392 27 23.1517 27 22.1017C27 21.0517 26.6375 20.1642 25.9125 19.4392C25.1875 18.7142 24.3 18.3517 23.25 18.3517C22.2 18.3517 21.3125 18.7142 20.5875 19.4392C19.8625 20.1642 19.5 21.0517 19.5 22.1017C19.5 23.1517 19.8625 24.0392 20.5875 24.7642C21.3125 25.4892 22.2 25.8517 23.25 25.8517Z" 
  fill="white"/>
</svg>
              <h2 className="card-title">Travel Assistance</h2>
            </div>
            <div className="contents4">
              <h3>Travel Insurance</h3>
              <h3>MICE & Events (Meetings, Incentives,
                 Conferences, and Events)</h3>
              <span className="link-wrapper">
                <a href="/services/page4" smooth className="link">View More</a>
              </span>
            </div>
          </div>
            {}
          </div>
          
        </div>
        </div>
      <style jsx>
        {`
        
        .div-serv-1 {
          justify-content: center;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          margin: 50px 10px 0;
        }
        @media (max-width: 991px) {
          .div-serv-1 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-serv-2 {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 100px 60px;
        }
        @media (max-width: 991px) {
          .div-serv-2 {
            max-width: 100%;
            padding: 0px 20px 0px;
          }
        }
        .span-serv {
          display: flex;
          width: 860px;
          max-width: 100%;
          align-items: center;
          flex-direction: column;
          margin-left: 0px;
        }

        @media (max-width: 991px){
          .span-serv {
          display: flex;
          width: 860px;
          max-width: 100%;
          align-items: center;
          flex-direction: column;
          margin-left: 0px;
        }
        }

        .div-serv-3 {
          color: #161616;
          text-align: center;
          letter-spacing: -1.28px;
          white-space: nowrap;
          font: 600 42px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
          .div-serv-3 {
          font-size: 28px;
          line-height: normal;
          letter-spacing: -0.12px;
          }
        }
        .div-serv-4 {
          color: #444;
          text-align: center;
          align-self: stretch;
          margin-top: 24px;
          font: 400 16px/24px Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-serv-4 {
            max-width: 100%;
          }
        }

        .card-container {
          display: flex;
          padding: 0px 3%;
          align-content: center;
          align-items: stretch;
          justify-content: space-evenly;
          flex-wrap: nowrap;

          }

          @media (max-width: 991px) {
            .card-container {
              display: flex;
              padding: 60px 46px;
              align-items: center;
              flex-direction: column;
              gap: 18px;
              justify-content: flex-end;
            }
          }

          .card {
            position: relative;
            width: 100%;
            max-width: 301px;
            max-height: 301px;
            border-radius: 36px;
            overflow: hidden; 
            margin-right: 20px; 
            }


            @media (max-right: 991px)
            {.card{
              margin-right: 0px; 
              }
            }


          .card-image {
            width: 100%;
            height: 100%;
            border-radius: 36px;
            object-fit: cover;
            transition: filter 0.3s ease-in-out;
          }

          @media (max-width:991px )
          {.card-image{
            width: 100%;
          }}

          .card-overlay {
            position: absolute;
            top: 180px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0px 0px 0px 20px;
            transition: transform 0.38s ease-in-out;
          }

          .card:hover .card-image {
            filter: blur(1px) grayscale(60%) brightness(40%);
          }

          .card:hover .card-overlay {
            transform: translateY(-150px);
            height:150%;
          }

          .card-icon {
            margin-bottom: 0px;
          }




          .contents {
            display: none; 
            align-items: flex-start;
            flex-direction: column;
            color: #fff;

            h3{
              font: 350 12px/15px Manrope, sans-serif;
              line-height: 0.5px;
            }
          }

          .contents2 {
            display: none; 
            align-items: flex-start;
            flex-direction: column;
            color: #fff;

            h3{
              font: 350 12px/15px Manrope, sans-serif;
              line-height: 0.5px;

            }
          }

          .contents3 {
            display: none; 
            align-items: flex-start;
            flex-direction: column;
            color: #fff;

            h3{
              font: 350 12px/15px Manrope, sans-serif;
              line-height: 0.5px;

            }
          }

          .contents4 {
            display: none; 
            align-items: flex-start;
            flex-direction: column;
            color: #fff;

            h3{
              font: 350 11px/5px Manrope, sans-serif;
              line-height: normal;


            }
          }

          .card:hover .contents,
          .card:hover .contents2,
          .card:hover .contents3,
          .card:hover .contents4 {
            display: flex;
          }


          .card-title {
            color: white;
            font: 400 24px/24px Manrope, sans-serif;
          }

          .hover-overlay {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
          }

        .link-wrapper {
          margin-top: 15px;
        }

        .link {
          color: #fff;
          text-decoration: none;
          font: 600 14px/10px Manrope, sans-serif;
          letter-spacing: 1.5px;
          transition: color 0.3s ease-in-out;
          display: inline-block; 
        }

        .link:hover {
          color: #fdc134;
        }

        `}
      </style>
    </>
  );
}

export default OurServices;