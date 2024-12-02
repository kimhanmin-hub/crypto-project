import React, { useState } from 'react';
import TemporaryDrawer from './drawer';
import './style.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';


//색상 반전 
const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'var(--blue)',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'var(--white)',
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: 'var(--grey)',
    borderRadius: 20 / 2,
  },
}));

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.style.filter = "invert(100%) hue-rotate(180deg)";
      document.documentElement.style.webkitFilter = "invert(100%) hue-rotate(180deg)";
    } else {
      document.documentElement.style.filter = "none";
      document.documentElement.style.webkitFilter = "none";
    }
  };

  return (
    <div className='navbar'>
      <h1 className='logo'>
        CryptoTracker<span style={{color: 'var(--blue)'}}>.</span>
      </h1>
      <div className='links'>
        <Link to="/">
          <p className='link'>메인 홈</p>
        </Link>
        <Link to="/compare">
          <p className='link'>코인 비교하기</p>
        </Link>
        <Link to="/watchlist">
          <p className='link'>즐겨찾기</p>
        </Link>
        <Link to="/dashboard">
          <Button 
            text={"Dashboard"} 
            onClick={()=>console.log("btn clicked")} 
          />
        </Link>
        <ThemeSwitch checked={isDarkMode} onChange={toggleTheme} />
      </div>
      <div className='mobile-drawer'>
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;