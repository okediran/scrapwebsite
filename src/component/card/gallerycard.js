import React from 'react';
import logo from "../../asses/image/scrap-logo@3x-1580x2048.png";

function Gallerycard(props) {
    return (
        <div className='col-md-3' style={{marginTop:"5em"}}>
            <div className='card'>
                <div className='card-body'>
                    <div class="box-photo">
                        <img src={props.img} alt="Jacques Marie Mage" width="417" height="298" class="lazy lazy-loaded" />
                    </div>
                    <div class="content">
                        <div className='product-name'>
                            <a href="/sites/jacques-marie-mage">Jacques Marie Mage</a>
                        </div>
                        <div class="row content-child">
                            <div class="box-left col-xl-7">From United States</div>
                            <div class="box-right col-xl-5 text-end">
                                April 30, 2022
                            </div>
                        </div>
                    </div>
                    <div class="footer d-flex style2">
                        <div class="box-left">
                            <div class="box-byuser js-tooltip-user row">
                                <div className='col-xl-9'>
                                    <img src={logo} alt="Aristide Benoist" class="lazy lazy-loaded" />
                                    by <strong><a href="/aristidebenoist/" class="text-black">waste recycling</a></strong>
                                </div>
                                <div className='price col-xl-3'>
                                    40$
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallerycard;