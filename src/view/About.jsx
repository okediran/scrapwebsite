import React from 'react';
import img1 from "../asses/image/10....jpg";
import profile from "../asses/image/3389.jpg";
import Card from "../component/card/Card";
import Banner from "../utilities/Banner/Banner";

function About() {
    return (
        <section id='About'>
            {/* banner */}
                <Banner page="About" route="About"/>
            <div className='padding'>
                {/* about details */}
                <div className='about-details'>
                    <div className='row'>
                        <div className='col-lg-6 col'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <div class="inner-content">
                                <div class="sec-title">
                                    <h3>About Us</h3>
                                    <h1>Mission and Story About<br /> Our SCRAP</h1>
                                </div>
                                <div class="about-text-holder">
                                    <p> was started in the year 1995 as a small private dental clinic in Binghamton, NY, USA. Looking for affordable dental care? .You can fund SCRAP by offsetting your organization or personal plastic footprint by purchasing a reclaim credit.</p>
                                    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, pain  resultant pleasure praising teachings of the great explorer...</p>
                                    <div class="author-box fix">
                                        <div class="img-box">
                                            <img src={profile} alt="Awesome Image" />
                                        </div>
                                        <div class="text-box">
                                            <h3>Dr. Jerome Sinclair</h3>
                                            <span>CEO &amp; Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card */}
                <div className='service'>
                    <div className='row'>
                        <div className='col-xl-11 col-xxl-11 mx-auto'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <Card span="01" number="01" h2="EDUCATION" cont="The primary purpose of SCRAP is to serve as a conduit through which quality education is delivered to foster grassroot development." />
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <Card span="02" number="02" h2="SOCIAL EDUCATION" cont="We are connecting all the dots necessary to ensure an improved better social environment by providing infrastructure and materials" />
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <Card span="03" number="03" h2="RECYCLING" cont="Through SCRAP we are developing new recycling culture among the younger generation and also exploring ways too recycle" />
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <Card span="04" number="04" h2="ART" cont="Creativity is boundless, SCRAP participants use Art as a medium of expression using readily available waste materials." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Goal */}
            <div className='goal'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div class="single-mission-vision-box text-center wow fadeInLeft animated">
                                    <h6>Our Mission</h6>
                                    <p>To provide outstanding dental care with a commitment of honesty, integrity &amp; quality...</p>
                                    <a class="btn-two" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div class="single-mission-vision-box text-center wow fadeInUp animated">
                                    <h6>Our Vision</h6>
                                    <p>To be widely recognized as one of  world’s leading &amp; most preferred dental care service...</p>
                                    <a class="btn-two" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div class="single-mission-vision-box text-center wow fadeInRight animated" >
                                    <h6>Philosophy</h6>
                                    <p>We play an active role in our community to make it abetter place to live and work...</p>
                                    <a class="btn-two" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Choose */}
            <div class="choose-area">
                    <div class="sec-title max-width text-center">
                        <h3>Why Choose Us</h3>
                        <h1>Advantages &amp; Technologies</h1>
                        <div className='col-xl-11 col-xxl-8 mx-auto'>
                            <p>Your teeth play an important part in your daily life. It not only helps you to chew and eat your food, but frames your face. Any missing tooth can have a major impact on your quality of life.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div class="single-choose-box text-center wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="300ms" >
                                <div class="count">
                                    <span>01</span>
                                </div>
                                <div class="icon-holder">
                                    <span class="icon-petri-dish"></span>
                                </div>
                                <h3>Advanced Cad Cam Laboratory</h3>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div class="single-choose-box text-center wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="600ms" >
                                <div class="count">
                                    <span>02</span>
                                </div>
                                <div class="icon-holder">
                                    <span class="icon-doctor"></span>
                                </div>
                                <h3>Caring &amp; Higly Qulified Doctors</h3>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div class="single-choose-box text-center wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="900ms" >
                                <div class="count">
                                    <span>03</span>
                                </div>
                                <div class="icon-holder">
                                    <span class="icon-dentist-2"></span>
                                </div>
                                <h3>Use Best Equipments in Our Clinic</h3>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div class="single-choose-box text-center wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1200ms" >
                                <div class="count">
                                    <span>04</span>
                                </div>
                                <div class="icon-holder">
                                    <span class="icon-ui"></span>
                                </div>
                                <h3>Online Appointment Facility</h3>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default About;