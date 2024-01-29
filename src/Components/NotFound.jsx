// NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import localImage from '../images/error.svg';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="not-found">
      <div className="container">
        <h1 className="heading">Oops! Page Not Found</h1>
        <p className="description">
          It seems like you've wandered into uncharted territory.
        </p>
        <button className="home-button" onClick={handleHomeClick}>
          Take Me Home
        </button>
        <img
        className="illustration"
        src={localImage}
        alt="404 Illustration"
      />
      </div>
      
      <style jsx>{`
        .not-found {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        .container {
          max-width: 600px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .heading {
          font-size: 3em;
          margin-bottom: 16px;
          color: #333;
        }

        .description {
          font-size: 1.2em;
          color: #666;
          margin-bottom: 24px;
        }

        .home-button {
          background-color: #3498db;
          color: #fff;
          padding: 12px 24px;
          font-size: 1em;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .home-button:hover {
          background-color: #2980b9;
        }

        .illustration {
          margin-top: 40px;
          width: 100%;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default NotFound;