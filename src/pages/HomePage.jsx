import React from 'react';
import Navbar from '../Components/common/Navbar';
import Footer from '../Components/common/Footer';
import LandingComponent from '../Components/home/Landing';
import TravelCard from '../Components/home/TravelCard';
import OurServices from '../Components/home/Hover';
import Why from '../Components/home/WhyLevanta';
import Form from '../Components/home/ContactForm';
import TravelComponent from '../Components/home/Note';


   function Homepage() {
     return (
       <>
       
          <Navbar />
          <LandingComponent/>
          <TravelCard/>
          <div id="services"> 
            <OurServices />
          </div>
          <TravelComponent/>
          <Why/>
          <div id="contact-section"> 
            <Form />
          </div>
          <Footer />
       </>
     );
   }

export default Homepage;