import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage1 from './pages/ServicePage1';
import ServicePage2 from './pages/ServicePage2';
import ServicePage3 from './pages/ServicePage3';
import ServicePage4 from './pages/ServicePage4';
import NotFound from './Components/NotFound';
// import Footer from './Components/common/Footer';
import Form from './Components/home/ContactForm';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/page1" element={<ServicePage1 />} />
        <Route path="/services/page2" element={<ServicePage2 />} />
        <Route path="/services/page3" element={<ServicePage3 />} />
        <Route path="/services/page4" element={<ServicePage4 />} />
        <Route path="/contact" element={<Form/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;