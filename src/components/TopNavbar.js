import React from 'react';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './styles.css';

const TopNavbar = () => {
  return (
    <nav className="bg-[#0B0B0B] p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="fontFamily: 'Gilroy', h-10 w-10 ml-0 md:ml-8 mb-3 md:mb-0 bg-[#A5FF00] rounded flex items-center justify-center text-black text-4xl font-bold">
          S
        </div>
        <div className="flex flex-col items-center ml-0 md:ml-2">
          <img src="/assets/logo.png" alt="Solo Logo" className="h-9" />
          <div className="text-white text-sm">by WLDD</div>
        </div>
      </div>
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
          }}
        >
          <span className="mr-2">start earning now</span>
          <div className="flex items-center space-x-1">
            <AppleIcon />
            <PlayArrowIcon />
          </div>
        </Button>
      </a>
    </nav>
  );
}

export default TopNavbar;
