import React from 'react';
import { useState } from "react";

function ScrollTop() {
    
  const [scroll,setscroll] = useState(true);

  const handleNav = () => {
    if (window.scrollY >= 150) {
        setscroll(false);
    } else {
        setscroll(true)
    }
};

window.addEventListener('scroll', handleNav);
    return (
        <div id={scroll ? 'active-ScrollTop' : 'ScrollTop'}>
            <span class="qodef-m-centred-icon qodef-icon-arrow-up">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28" height="18" viewBox="0 0 28 18" space="preserve">
                    <path d="M27.6,8.5c-5.5,0-9.5-8.1-9.5-8.2C17.9,0,17.7,0,17.5,0.1c-0.2,0.1-0.3,0.4-0.1,0.7c0.1,0.3,2.7,5.5,6.7,7.7H0.4C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.4,0.5h23.7c-4,2.2-6.6,7.4-6.7,7.7c-0.1,0.2,0,0.5,0.1,0.7c0.2,0.1,0.4,0.1,0.6-0.2c0-0.1,4.1-8.2,9.5-8.2C27.8,9.5,28,9.3,28,9C28,8.7,27.8,8.5,27.6,8.5z"></path>
                    <path d="M27.6,8.5c-5.5,0-9.5-8.1-9.5-8.2C17.9,0,17.7,0,17.5,0.1c-0.2,0.1-0.3,0.4-0.1,0.7c0.1,0.3,2.7,5.5,6.7,7.7H0.4C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.4,0.5h23.7c-4,2.2-6.6,7.4-6.7,7.7c-0.1,0.2,0,0.5,0.1,0.7c0.2,0.1,0.4,0.1,0.6-0.2c0-0.1,4.1-8.2,9.5-8.2C27.8,9.5,28,9.3,28,9C28,8.7,27.8,8.5,27.6,8.5z"></path>
                </svg>
            </span>
        </div>
    );
}

export default ScrollTop;