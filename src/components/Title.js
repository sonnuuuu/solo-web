import React from 'react';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Title = () => {
  return (
    <div className="bg-[#0B0B0B] p-8 text-white">
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <div className="text-[#ffffff] font-bold text-xl mb-2 sm:mb-0">★ ★ ★ ★ ★</div>
        <span className="ml-0 sm:ml-2 text-white text-sm">trusted by 10,000+ creators</span>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1">
          <h1 className="text-[#A5FF00] font-bold leading-tight text-center sm:text-left gilroy-font">
            <span className="block text-4xl sm:text-6xl mb-2">where creators</span>
            <span className="block text-4xl sm:text-6xl mb-2">earn on their</span>
            <span className="block text-4xl sm:text-6xl mb-2">own terms</span>
          </h1>
          <p className="mt-4 text-lg text-center sm:text-left">by collaborating with the world's best brands</p>
          <a href="https://wldd.in/download" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              sx={{
                color: '#A5FF00',
                borderColor: '#A5FF00',
                '&:hover': {
                  borderColor: '#8FD700',
                  backgroundColor: '#8FD700',
                  color: '#000000',
                },
                textTransform: 'none',
                mt: ['10px', '20px'], // Responsive margin top
              }}
              className="mt-4 sm:mt-6" // Additional margin for larger screens
            >
              <span className="mr-2">start earning now</span>
              <div className="flex items-center space-x-1">
                <AppleIcon />
                <PlayArrowIcon />
              </div>
            </Button>
          </a>
        </div>
        <div className="flex-1 mt-4 sm:mt-0 sm:ml-8">
          <img src="./assets/SS.jpg" alt="A descriptive text for the image" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      <div className="flex justify-center sm:justify-start mt-4"> {/* Center for small screens, left-align for larger */}
        <a href="/assets/contact-us.pdf" target="_blank" rel="noopener noreferrer" className="text-white text-lg self-center underline hover:text-gray-300">Contact Us</a>
      </div>
      <div className="text-sm text-center sm:text-left mt-2">
        <a href="/assets/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mr-4">Privacy Policy</a>
        <a href="/assets/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
      </div>
    </div>
  );
};

export default Title;
