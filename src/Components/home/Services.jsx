import * as React from "react";
import localImage from '../images/hotelaccom.webp';


function ServicePg() {
  return (
    <>
      <div className="div-1">
        <div className="div-2">
          <div className="div-3">
            <span className="span">
              <div className="div-4">Our Services</div>
              <div className="div-5">
                Unlock extraordinary journeys with our seamless travel
                solutions—curated accommodations, premium transport, exclusive
                VIP experiences, and comprehensive travel assistance. Your
                adventure, perfected
              </div>
            </span>
          </div>
        </div>
        <div className="card">
        <img
          loading="lazy"
          srcSet={localImage} 
          className="card-image"
          alt="Image description"
        />
        <div className="card-overlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            className="card-icon"
          >
            <path d="M26.25 29H29.25V17H20.25V29H23.25V20H26.25V29ZM5.25 29V6.5C5.25 6.10218 5.40804 5.72064 5.68934 5.43934C5.97064 5.15804 6.35218 5 6.75 5H27.75C28.1478 5 28.5294 5.15804 28.8107 5.43934C29.092 5.72064 29.25 6.10218 29.25 6.5V14H32.25V29H33.75V32H3.75V29H5.25ZM11.25 17V20H14.25V17H11.25ZM11.25 23V26H14.25V23H11.25ZM11.25 11V14H14.25V11H11.25Z" fill="white" />
          </svg>
          <h2 className="card-title">Accommodation</h2>
        </div>
        <div className="hover-overlay">
             <div className="contents">
                <div >Hotel Accommodation</div>
                <div >Levanta Connect (B2B Online Portal)</div>
                <span className="link-wrapper">
                <a href="#" className="link">
                    View More
                </a>
                </span>
             </div>  
        </div>
      </div>

      </div>
      <style jsx>{`
        .div-1 {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 50px 80px;
        }
        @media (max-width: 991px) {
          .div-1 {
            padding: 0 20px;
          }
        }
        .div-2 {
          justify-content: center;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          margin: 50px 10px 0;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-3 {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 60px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .span {
          display: flex;
          width: 860px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
        }
        .div-4 {
          color: #161616;
          text-align: center;
          letter-spacing: -1.28px;
          white-space: nowrap;
          font: 600 32px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
          }
        }
        .div-5 {
          color: #444;
          text-align: center;
          align-self: stretch;
          margin-top: 24px;
          font: 400 16px/24px Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
          }
        }
        .div-6 {
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          margin: 48px 10px 0;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-7 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-8 {
          disply: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: start;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.0308219178082192;
          flex-grow: 1;
          padding: 50px 24px 24px;
        }
        @media (max-width: 991px) {
          .div-8 {
            margin-top: 18px;
            padding: 0 20px;
          }
        }
        .img-serv {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 23px;
        }
        .icon-1 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 36px;
          overflow: hidden;
          margin-top: 145px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .icon-1 {
            margin-top: 40px;
          }
        }
        .accommodations-title {
          position: relative;
          align-self: stretch;
          color: #fff;
          letter-spacing: -1.2px;
          margin-top: 4px;
          white-space: nowrap;
          font: 600 24px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
          .accommodations-title {
            white-space: initial;
          }
        }

        .hover-card {
          
            width: 100%;
            height: 100%;
            display: none;
            position: absolute;
            background-color: #292f366e; 
            backdrop-filter: blur(5px);
            padding: 30px 30px 30px 30px;
            border-radius: 22px;
            flex-direction: column;
            justify-content: center;
            transition-delay: 5s;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
                    
        }
        
        .div-8:hover .hover-card {
            display: block;
        }
        



        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-10 {
          disply: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: start;
          box-shadow: 0px 0px 6px 0px rgba(92, 104, 128, 0.08),
            0px 12px 20px 0px rgba(92, 104, 128, 0.08);
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.0342465753424657;
          flex-grow: 1;
          padding: 50px 24px 24px;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin-top: 18px;
            padding: 0 20px;
          }
        }
        .icon-2 {
          aspect-ratio: 1.25;
          object-fit: contain;
          object-position: center;
          width: 30px;
          fill: #fff;
          overflow: hidden;
          margin-top: 151px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .icon-2 {
            margin-top: 40px;
          }
        }
        .transportations-title {
          position: relative;
          align-self: stretch;
          color: #fff;
          letter-spacing: -1.2px;
          margin-top: 10px;
          white-space: nowrap;
          font: 600 24px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
          .transportations-title {
            white-space: initial;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-12 {
          disply: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: start;
          box-shadow: 0px 0px 6px 0px rgba(92, 104, 128, 0.08),
            0px 12px 20px 0px rgba(92, 104, 128, 0.08);
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.0308219178082192;
          flex-grow: 1;
          padding: 50px 24px 24px;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-top: 18px;
            padding: 0 20px;
          }
        }
        .icon-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 36px;
          overflow: hidden;
          margin-top: 145px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .icon-3 {
            margin-top: 40px;
          }
        }
        .luxury-title {
          position: relative;
          align-self: stretch;
          color: #fff;
          letter-spacing: -1.2px;
          margin-top: 4px;
          white-space: nowrap;
          font: 600 24px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
          .luxury-title {
            white-space: initial;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-14 {
          disply: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: start;
          box-shadow: 0px 0px 6px 0px rgba(92, 104, 128, 0.08),
            0px 12px 20px 0px rgba(92, 104, 128, 0.08);
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.0342465753424657;
          flex-grow: 1;
          padding: 50px 24px 24px;
        }
        @media (max-width: 991px) {
          .div-14 {
            margin-top: 18px;
            padding: 0 20px;
          }
        }
        .icon-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 36px;
          overflow: hidden;
          margin-top: 145px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .icon-4 {
            margin-top: 40px;
          }
        }
        .travelasst-title {
          position: relative;
          align-self: stretch;
          color: #fff;
          letter-spacing: -1.2px;
          margin-top: 4px;
          white-space: nowrap;
          font: 600 24px Manrope, sans-serif;
        }
        @media (max-width: 991px) {
          .travelasst-title {
            white-space: initial;
          }
        }
        .div-16 {
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          margin: 48px 10px 50px;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
            margin: 40px 0;
          }
        }
        .div-17 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-17 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        
        .div-39 {
          position: relative;
          align-self: stretch;
          color: #e2e2e2;
          font: 400 14px/24px Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .span-5 {
          position: relative;
          align-self: stretch;
          display: flex;
          margin-top: 45px;
          justify-content: space-between;
          gap: 5px;
          padding: 0 2px;
        }
        @media (max-width: 991px) {
          .span-5 {
            margin-top: 40px;
          }
        }
        .div-40 {
          color: #444;
          flex-grow: 1;
          white-space: nowrap;
          font: 600 14px/24px Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-40 {
            white-space: initial;
          }
        }
        .img-serv-13 {
          aspect-ratio: 1.06;
          object-fit: contain;
          object-position: center;
          width: 17px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        
        /* Adjust as needed */

        .title {
        position: relative;
        align-self: stretch;
        color: #ffff0;
        letter-spacing: -1.2px;
        margin-top: 4px;
        white-space: nowrap;
        font: 600 24px Manrope, sans-serif;
        }

        .description {
        position: relative;
        align-self: stretch;
        color: #ffffbb;
        margin-top: 18px;
        white-space: nowrap;
        font: 600 11px/24px Manrope, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .description:last-child {
        margin-top: 0px;
        }

        .link-wrapper {
        position: relative;
        align-self: stretch;
        display: flex;
        margin-top: 79px;
        justify-content: space-between;
        gap: 6px;
        padding: 0 2px;
        }

        .link {
        color: #aaaadd;
        flex-grow: 1;
        white-space: nowrap;
        font: 600 14px/24px Manrope, -apple-system, Roboto, Helvetica, sans-serif;
        }

      `}</style>
    </>
  );
}

export default ServicePg;
