import React from 'react';
import Video from "../component/video/video";
function Home() {


    return (
        <section id='Home'>

            {/* banner */}
            <div className='row'>
                <div className='col-12'>
                    <div className='Banner'>
                        <h1>Learn With <br />  Scrap</h1>
                    </div>
                </div>
            </div>

            {/* service */}
            <div className='service'>
                <div className='row'>
                    <div className='col-lg-10 col-xl-11 col-xxl-11 mx-auto'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span>01</span>
                                        <div className='service-details'>
                                            <p className='number'>01</p>
                                            <h2>EDUCATION</h2>
                                            <p className='details'>The primary purpose of SCRAP is to serve as a conduit through which quality education is delivered to foster grassroot development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span>02</span>
                                        <div className='service-details'>
                                            <p className='number'>02</p>
                                            <h2>SOCIAL CHANGE</h2>
                                            <p className='details'>
                                                We are connecting all the dots necessary to ensure an improved better social environment by providing infrastructure and materials
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span> 03 </span>
                                        <div className='service-details'>
                                            <p className='number'>03</p>
                                            <h2>RECYCLING</h2>
                                            <p className='details'>
                                                Through SCRAP we are developing new recycling culture among the younger generation and also exploring ways too recycle
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span>04</span>
                                        <div className='service-details'>
                                            <p className='number'>04</p>
                                            <h2>ART</h2>
                                            <p className='details'>
                                                Creativity is boundless, SCRAP participants use Art as a medium of expression using readily available waste materials.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* video section */}
            <div className='Home-video'>
                <Video/>
            </div>

        </section>
    );
}

export default Home;