import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import levantaLogo from "../../images/logo-red2.png";

// Logo Component
function Logo() {
  return (
    <div className="nav-logo-container">
      <Link to="/">
        <img loading="lazy" src={levantaLogo} className="logo" alt="Logo" />
      </Link>
    </div>
  );
}

// HamburgerMenu Component
function HamburgerMenu({ toggleNav, showNav }) {
  return (
    <a
      href="#"
      id="menu-icon"
      className={showNav ? 'close' : ''}
      onClick={toggleNav}
      style={{
        display: 'none',
        cursor: 'pointer',
        position: 'fixed',
        top: '30px',
        right: '60px',
        padding: '3px',
        border: '2px solid rgba(38, 38, 38, 0.03)',
        ...(showNav && {
          display: 'block',
          cursor: 'pointer',
        }),
      }}
    >
      <div className="bar" style={{
        margin: '3px',
        borderRadius: '1.5px',
        transition: 'margin 0.2s, transform 0.2s',
        ...(showNav && {
          transform: 'translateY(6px) rotate(45deg)',
        }),
      }}></div>
      <div className="bar" style={{
        margin: '3px',
        height: '3px',
        background: '#000',
        borderRadius: '1.5px',
        transition: 'margin 0.2s, transform 0.2s',
        opacity: showNav ? 0 : 1,
      }}></div>
      <div className="bar" style={{
        margin: '3px',
        width: '25px',
        height: '3px',
        background: '#000',
        borderRadius: '1.5px',
        transition: 'margin 0.2s, transform 0.2s',
        ...(showNav && {
          transform: 'translateY(-6px) rotate(-45deg)',
        }),
      }}></div>
    </a>
  );
}


// Navigation Component
function Navigation({ toggleNav, showNav }) {

  const scrollToContactSection = () => {
    console.log("scroll service section")

    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOurServicesSection = () => {
  window.location.href = "/";
  const contactSection1 = document.getElementById("services");
  setTimeout(() => {
    if (contactSection1) {
      contactSection1.scrollIntoView({ behavior: "smooth" });
    }

  }, 200);
    
};

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Our Services", onClick: scrollToOurServicesSection },
    { label: "Contact", onClick: scrollToContactSection },
    { label: "B2B Login", to: "/b2b", isB2B: true },
  ];

  const location = useLocation();

  return (
    <div className="nav-menu-container">
      <HamburgerMenu toggleNav={toggleNav} showNav={showNav} />
      <nav className={`nav-links ${showNav ? "show" : ""}`}>
        {navLinks.map((link, index) => (
          <React.Fragment key={index}>
            {link.onClick ? (
              <a
                className={`nav-link ${link.isB2B ? "b2b-link" : ""} ${
                  location.pathname === link.to ? "selected" : ""
                }`}
                onClick={() => {
                  link.onClick();
                  toggleNav();
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                to={link.to}
                className={`nav-link ${link.isB2B ? "b2b-link" : ""} ${
                  location.pathname === link.to ? "selected" : ""
                }`}
                onClick={toggleNav}
              >
                {link.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}

// Navigation Bar Component
function NavigationBar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="nav-main-wrapper">
      <div className="nav-content">
        <Logo />
        <Navigation toggleNav={toggleNav} showNav={showNav} />
      </div>

      <style jsx>{`
        body {
          margin: 0; 
        }

        .nav-main-wrapper { 
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 0 10px ; 
          position: relative;
          position: fixed;
          width: 100%;
          z-index: 1000; 
        }

        .nav-content { 
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding:16px 90px;
          width: 100%; 
        }

        @media (max-width: 991px){
          .nav-content { 
            padding: 25px 42px 15px;
            height: 22px;

        }
        }

        {/* .nav-menu-container{
          aspect-ratio: 1.47;
          object-fit: flex;
          object-position: flex;
          width: 150px;
          max-width: 100%;
        }
         */}
        
        @media (max-width: 991px) {
          .nav-main-wrapper {
            flex-wrap: wrap;
            padding: 0 15px; 
          }

          .nav-logo-container {
            order: 0;
            position: relative;
          }

          .nav-links.show {
            transform: translateY(0);
          }

          .nav-link {
            padding: 10px 0;
          }

          #menu-icon {
            display: block;
          }

          .nav-toggle {
            display: block;
            cursor: pointer;
            position: fixed;
            top: 30px;
            right: 60px;
            padding: 3px;
            border:2px solid rgba(38,38,38,0.03);

          }
        }

        .logo {
          aspect-ratio: 1.47;
          object-fit: flex;
          object-position: flex;
          width: 190px;
          max-width: 100%;
          max-height: 36px;
           margin-left: -23px;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          align-items: center; 
          justify-content: space-between;
        }

        .nav-link {
          color: #777777;
          letter-spacing: -0.42px;
          text-transform: uppercase;
          white-space: nowrap;
          justify-content: center;
          align-self: center;
          padding: 10px 0;
          font: 600 14px/107% Manrope, -apple-system, Roboto, Helvetica, sans-serif;
          text-decoration: none;
        }


        .nav-link:hover {
          border-bottom: 2px solid #af1222;
        }
        
        .nav-link:active,
        .nav-link.selected {
          color: #000; // Color when selected
          border-bottom: 2px solid #af1222;
        }


        .b2b-link {
          color: #fff;
          letter-spacing: -0.12px;
          text-transform: uppercase;
          justify-content: center;
          white-space: nowrap;
          background-color: #af1222;
          border-radius: 36px;
          align-self: center;
          flex-grow: 9;
          margin: auto 0;
          padding: 8px 24px;
          font: 600 14px/147% Manrope, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .nav-toggle {
          display: none;
        }

        .nav-toggle.close {
          display: none;
        }

        @media (max-width: 991px) {
          .nav-toggle {
            display: block;
            cursor: pointer;
          }

          .nav-toggle.close {
            display: block;
            cursor: pointer;
          }

          .nav-links {
            display: none;
            width: 100%;
            flex-direction: column;
            position: absolute;
            top: 52%; 
            right: 1px;
            background-color: #fcfcfc;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            transition: transform 0.3s ease-in-out;
            transform: translateY(0);
          }

          .nav-links.show {
            display: flex;
            transform: translateY(10%);
          }
        }
      `}</style>
    </div>
  );
}

export default NavigationBar;