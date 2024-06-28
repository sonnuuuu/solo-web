import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const TopNavbar = () => {
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const handleMouseEnter = () => {
    setHoverEffect(true);
  };

  const handleMouseLeave = () => {
    setHoverEffect(false);
  };

  return (
    <nav className="bg-[#081303] p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/" className="flex flex-col items-center">
          <img src="/assets/logo.png" alt="Solo Logo" className="h-10 ml-2 mt-4" />
          <div className="text-white mt-1 text-sm questrial-regular">by WLDD</div>
        </Link>
      </div>
      <a
        href="https://wldd.in/download"
        target="_blank"
        rel="noopener noreferrer"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`button-wrapper ${isClicked ? 'clicked' : ''} ${hoverEffect ? 'hovered' : ''}`}
      >
        <img
          src="./assets/earning.png"
          alt="Start earning now"
          className="h-10"
        />
      </a>
    </nav>
  );
};

export default TopNavbar;
