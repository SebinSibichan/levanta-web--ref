import * as React from "react";

function TravelComponent() {
  return (
    <form>
      <header className="note">
        At Levanta Travel, we strive to create unforgettable travel experiences
        and provide exceptional services that exceed our clients' expectations.
        Whether it's a business trip, family vacation, or a special event, we
        are committed to making every journey a memorable one.
      </header>
      <style jsx>{`
        .note {
            display: flex;
            flex-direction: column;
            padding: 50px 60px;
            color: #444;
            text-align: center;
            width: 90%;
            align-items: center;
            background-color: #fff;
            margin: 92px 3%;
            padding: 0px 35px;
            font: 400 28px/49px Manrope, -apple-system, Roboto, Helvetica, sans-serif;
            align-content: center;
            justify-content: center;
            margin-top: 10%;
            overflow: hidden;
        }
        @media (max-width: 991px) {
          .note {
            padding: 0 20px;
            max-width: 100%;
            margin: 0px 0px 0px 0px;
            padding: 60px 24px;
            font-size: 23px;

          }
        }
      `}</style>
    </form>
  );
}

export default TravelComponent;