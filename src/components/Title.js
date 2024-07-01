import React, { useState } from 'react';
import './styles.css';
import { useLocation } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const Title = () => {
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

  if (location.pathname === '/contact-us' || location.pathname === '/terms-of-use' || location.pathname === '/privacy-policy') {
    return null;
  }

  return (
    <div className="bg-[#081303] p-8 text-white min-h-screen questrial-regular">
      <div className="flex flex-col sm:flex-row items-center mb-4 mt-4 sm:mt-8">
        <div className="flex items-center mb-4 sm:mb-0">
          <LazyLoad height={200} offset={100}>
            <img src="./assets/star.png" alt="Star ratings" className="h-4 mb-2 sm:mb-0" />
          </LazyLoad>
          <span className="flex-row ml-2 text-white text-lg mr-4">trusted by 10,000+ creators</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1">
          <h1 className="text-[#C3FF35] font-bold leading-tight text-center sm:text-left mb-4">
            <span className="block text-4xl sm:text-6xl mb-1">where creators</span>
            <span className="block text-4xl sm:text-6xl mb-1">earn on their</span>
            <span className="block text-4xl sm:text-6xl mb-4">own terms</span>
          </h1>
          <p className="mt-4 text-lg text-center sm:text-left mb-4">by collaborating with the world's best brands</p>
          <div className="flex justify-center sm:justify-start mt-4 sm:mt-6">
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
              <LazyLoad height={50} offset={100}>
                <img
                  src="./assets/earning.png"
                  alt="Start earning now"
                  className="h-12"
                />
              </LazyLoad>
            </a>
          </div>
        </div>
        <div className="flex-1 mb-8 sm:mb-0">
          <LazyLoad height={200} offset={100}>
            <img
              srcset="./assets/SS.png 480w, ./assets/SS.png 800w"
              sizes="(max-width: 543px) 480px, 800px"
              src="./assets/SS.png"
              alt="A descriptive image"
              class="mt-10 sm:mt-0 mr-10 max-ww-full h-auto"
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default Title;
