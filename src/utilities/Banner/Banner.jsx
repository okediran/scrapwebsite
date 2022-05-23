import React from 'react';
import { Link } from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';
function Banner(props) {

    return (
        <div className='Banner'>
            <div className='inner-banner'>
            </div>
            <h1>{props.page}</h1>
            <div className='inner-banner1'>
            </div>
            <h4>
               <Link to="/" style={{color:"white"}}>Home</Link>  <RightOutlined /> <p>{props.route}</p>
            </h4>
        </div>
    );
}

export default Banner;