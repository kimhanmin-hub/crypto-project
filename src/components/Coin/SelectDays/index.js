import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './styles.css';


export default function SelectDays({days, handleDaysChange, noPTag}) {
 

  return (
    <div className='select-days'>
        {/* 컴포넌트 재사용성 높이기 */}
          {!noPTag && <p>주기 선택</p>}
            <Select         
                sx={{
                    height: '2.5rem',
                    color: 'var(--white)',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--white)',
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'var(--white)',
                    },
                    '&:hover': {
                        '&& fieldset': {
                            borderColor: '#3a80e9',
                        },
                    },
                }}
          labelId="demo-simple-select-days-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7일</MenuItem>
          <MenuItem value={30}>1개월</MenuItem>
          <MenuItem value={60}>2개월</MenuItem>
          <MenuItem value={90}>3개월</MenuItem>
          <MenuItem value={180}>6개월</MenuItem>
          <MenuItem value={365}>1년</MenuItem>
        </Select>
    </div>
  );
}
