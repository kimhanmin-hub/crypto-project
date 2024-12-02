import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css';

export default function TogglePriceType({priceType, handlePriceTypeChange}) {
   

    return (
        <div className='toggle-prices'>
        <ToggleButtonGroup
            value={priceType}
            exclusive
            onChange={handlePriceTypeChange}
            sx={{
              "& .MuiToggleButton-root": {
                  color: "var(--blue)",
                  borderColor: "var(--blue)",
                  "&.Mui-selected": {
                      backgroundColor: "var(--blue)",
                      color: "var(--white)",
                  },
              },
          }}
      >
        
  
          
            <ToggleButton value="prices"  className='toggle-btn' >
            가격
            </ToggleButton>
            <ToggleButton value="market_caps" className='toggle-btn'  >
            시가총액
            </ToggleButton>
            <ToggleButton value="total_volumes" className='toggle-btn'  >
            총 거래량   
            </ToggleButton>
        </ToggleButtonGroup>
        </div>
    );
}
