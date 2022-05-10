import React from 'react';
import { useState } from "react";
import {UpOutlined} from '@ant-design/icons';

function ScrollTop() {
    
  const [scroll,setscroll] = useState(true);

  const handleNav = () => {
    if (window.scrollY >= 150) {
        setscroll(false);
    } else {
        setscroll(true)
    }
};
const Click = ()=>{
    window.scrollTo(0, 0);
}


window.addEventListener('scroll', handleNav);
    return (
        <div id={scroll ? 'active-ScrollTop' : 'ScrollTop'} onClick={Click}>
            <span class="qodef-m-centred-icon qodef-icon-arrow-up">
                <UpOutlined />
            </span>
        </div>
    );
}

export default ScrollTop;