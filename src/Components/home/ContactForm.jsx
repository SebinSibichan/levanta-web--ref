
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React, { useState } from 'react';
import firebaseConfig from './firebaseConfig'; 

const Header = () => <div className="form-header">Contact us</div>;

const Description = () => (
  <div className="form-description">
    We would be delighted to assist you in planning your next
    adventure. Contact us today to speak with one of our travel
    advisors and start creating memories that will last a
    lifetime.
  </div>
);

const FormFields = ({ formData, handleInputChange, handleSubmit }) => (
  <div className="table-form">
    <form onSubmit={handleSubmit}> 
      <div className="div-name">
        <div className="half-width">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="span-2"
            required
          />
        </div>
        <div className="half-width">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="span-3"
            required
          />
        </div>
      </div>
      <div className="full-width">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="span-4"
          required
        />
      </div>
      <div className="full-width">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          className="span-5"
          required
        ></textarea>
      </div>
    <div className="full-width">
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  </div>
);

// Form Component
function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase initialized successfully!');

      }

      const db = firebase.firestore();
      const formDataCollection = db.collection('formData');

      await formDataCollection.add(formData);
      console.log('Form data submitted:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form data: ', error);
      alert('Form submission failed. Please try again.');
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <div className="common-container-form">
            <div className="column-contact">
              <span className="span-form">
                <Header />
                <Description />
              </span>
            </div>
            <div className="column-form">
              <FormFields
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .table-form {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .div-name {
          display: flex;
          justify-content: space-between;
          gap: 55px; 
        }

        @media (max-width: 991px){
          .div-name {
          flex-direction: column;
          gap:0px; 
        }
        }

        .half-width {
          width: 100%; 
        }

        .full-width {
          width: 100%;
        }
     

        .form-container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 100px;
          background-image: url('../images/formbackground.webp');
          background-size: cover;
        }

        @media (max-width: 991px) {
          .form-container {
            padding: 0 20px;
          }
        }

        .form-content {
          justify-content: space-between;
          margin: 22px 0;
          max-width: 100%;
        }

        @media (max-width: 991px) {
          .form-content {
            max-width: 100%;
            margin-right: 4px;
          }
        }

        .common-container-form {
            display: flex;
            flex-direction: row;
            padding: 80px 80px 80px 80px;
            justify-content: space-between;
            align-content: center;
            align-items: flex-start;
            background-color: #ecececcc;
            border-radius: 20px;
            box-shadow: 2px 1px #38383e33;
            overflow: hidden;
            width: 90%
        }


        @media(max-width: 1091px)
        {.common-container-form {
          flex-direction: column;
          align-items: center;
          gap: 23px;
          padding: 40px 0px;
          width: 100%;
        }
        }

        .table-form {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            margin: 61px 0px 0px;
            justify-content: space-between;
            align-content: center;
            flex-wrap: wrap;
            align-items: baseline;
        }
        .span-form {
            display: flex;
            width: 495px;
            max-width: 100%;
            align-items: flex-start;
            flex-direction: column;
            margin-left: 30px;
        }

        @media(max-width:991px ){
          .span-form{
            display: flex;
            width: 380px;
            max-width: 63%;
            align-items: center;
            margin-left: 83px;
            padding: 5px 1px;
            flex-direction: column;
            {/* align-content: flex-start; */}
          }

        }

        .button-contain{
          position: relative;
        }

        .form-header {
          color: #161616;
          letter-spacing: -0.96px;
          font: 600 32px Manrope, sans-serif;
        }

        .form-description {
          color: #444;
          margin-top: 31px;
          font: 400 16px/24px Manrope, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .column-form {
            
            line-height: normal;
            margin-left: 9px;
            margin-top: -70px;
            margin-right: 50px;
            justify-content: center;
        }

        .form-group {
          margin-top: 18px;
        }

        label {
          color: #000;
          letter-spacing: -0.48px;
          white-space: nowrap;
          align-items: start;
          border-radius: 12px;
          border: 1px solid #eaeaea;
          background-color: #fff;
          flex-grow: 1;
          justify-content: center;
          padding: 15px 60px 15px 20px;
          font: 400 16px/113.4% Plus Jakarta Sans, -apple-system, Roboto,
            Helvetica, sans-serif;
        }

        input,
        textarea {
          color: #000;
          letter-spacing: -0.48px;
          white-space: nowrap;
          align-items: start;
          border-radius: 20px;
          border: 1px solid #eaeaea;
          background-color: #fff;
          flex-grow: unset;
          justify-content: center;
          padding: 20px 20px 30px 20px;
          font: 400 16px/113.4% Plus Jakarta Sans, -apple-system, Roboto,
            Helvetica, sans-serif;
          margin-top: 18px;
          width: 100%;
        }

        .submit-btn {
          color: #fff;
          text-align: center;
          letter-spacing: -0.54px;
          white-space: nowrap;
          align-items: center;
          border-radius: 47px;
          background-color: #af1222;
          margin-top: 44px;
          margin-bottom: 18px;
          margin-left: 0px;
          padding: 3% 49%;
          font: 600 18px/113.4% Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          cursor: pointer;
        }

        @media (max-width: 968px){
          .submit-btn{
            margin-left: 2px;
            padding: 3% 46%;

          }
        }

      `}</style>
    </>
  );
}


export default Form;