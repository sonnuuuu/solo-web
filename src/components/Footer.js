import React, { useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const Footer = () => {

  useEffect(() => {
    const links = document.querySelectorAll('footer a');

    const handleTouchStart = (event) => {
      event.target.classList.add('hover');
    };

    const handleTouchEnd = (event) => {
      event.target.classList.remove('hover');
    };

    links.forEach(link => {
      link.addEventListener('touchstart', handleTouchStart);
      link.addEventListener('touchend', handleTouchEnd);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('touchstart', handleTouchStart);
        link.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, []);

  return (
    <footer className="bg-#C3FF35 text-gray-300 py-8 text-center relative bottom-0 left-0 right-0">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
        <div className="text-base mb-4 md:mb-0 col-span-4 mx-5">
          &copy; Memedd App Private Limited 
          <a href="mailto:hello@wldd.in" className="manrope-uniquifier text-base hover:text-lime-400 mx-5 block md:inline">
          E-Mail ID: memedd@wldd.in
          </a>
          <Link to="/terms-of-use" className="manrope-uniquifier text-base hover:text-lime-400 mx-5 block md:inline">
            TERMS OF USE
          </Link> 
          <Link to="/privacy-policy" className="manrope-uniquifier text-base hover:text-lime-400 mx-5 block md:inline">
            PRIVACY POLICY
          </Link> 
          <Link to="/contact-us" className="manrope-uniquifier text-base hover:text-lime-400 mx-5 block md:inline">
            CONTACT US
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
