import React from 'react'
import './styles.css';
import SearchIcon from '@mui/icons-material/Search';

function Search({search, onSearchChange}) {
  return (
    <div className='search-flex'>
        <SearchIcon />
        <input 
         placeholder='Search'
         type='text' 
         value={search}
         onChange={(e) => {
           console.log("Input changed:", e.target.value);
           onSearchChange(e.target.value);
         }}
         />
    </div>
  )
}

export default Search;
