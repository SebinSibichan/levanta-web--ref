import * as React from "react";

function TravelDescription() {
  return (
    <div className="main-desc">
        

            <section className="description-desc">
                <p>
                At Levanta Travel, we strive to create unforgettable travel experiences
                and provide exceptional services that exceed our clients' expectations.
                Whether it's a business trip, family vacation, or a special event, we are
                committed to making every journey a memorable one.
                </p>
            </section>
     

      <style jsx>{`
        .main-desc {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 100px 90px 100px 90px;
          width:100%;

        @media (max-width: 991px) {
          .main-desc {
            padding: 0 20px;
          }
        }

        .header-desc {
          text-align: center;
        }

        .description-desc {
          text-align: center;
          width: 100%;
          max-width: 1029px;
          align-items: center;
          background-color: #fff;
          justify-content: center;
          margin: 50px 30px;
          padding: 0 60px;
          font-size: 20px;
          line-height: 30px;
          color: #444;
          font: 400 18px/28px Manrope, -apple-system, Roboto, Helvetica, sans-serif;

        }

        @media (max-width: 991px) {
          .description-desc {
            max-width: 100%;
            margin: 40px 10px 40px 0;
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default TravelDescription;