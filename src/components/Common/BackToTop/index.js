import React from 'react'
import "./style.css"
import VerticalAlignTopRoundedIcon from '@mui/icons-material/VerticalAlignTopRounded';


function BackToTop() {
    // Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className='back-to-top-btn' id='myBtn' onClick={() =>topFunction()}>
          <VerticalAlignTopRoundedIcon style={{color:'var(--blue)'}}/>
        </div>
    )
}

export default BackToTop;
