import React from 'react';
import Banner from "../utilities/Banner/Banner";
import Googlemap from "../utilities/GoogleMap/Googlemap";
import useDocumentTitle from "../utilities/useDocumentTitle";
import { motion } from "framer-motion";

function Contact() {
    function Page(props) {
        const titlePrefix = 'Scrap'
        useDocumentTitle(`${props.title}${titlePrefix}`)
        return <h2>{props.content}</h2>
      };
      const containerVariant = {
        hidden:{
          opacity:0,
        },
        visible:{
          opacity:1,
          transition:{delay:.4,duration:1.5}
        },
        exit:{
          x:'-100vh',
          transition: {ease:'easeInOut'}
        }
    }
    return (
        <motion.section id="Contact"  variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit">
             {/* title */}
             <div style={{position:"absolute"}}>
                <Page title='Contact - ' />
            </div>
            {/* banner */}
            <Banner page="Contact Us" route="Contact Us" />

            {/* contact-detals */}
            <div className='contact-info-map-area'>
                <div class="sec-title max-width text-center">
                    <h1>We are Here to Help You, Don’t Hesitate.</h1>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div class="col-xl-4">
                                <div class="contact-info-left">
                                    <div class="contact-title">
                                        <h2>Send Your Message Us</h2>
                                        <p>Dont be shy, Send your message or through form, our expert will help you ASAP.</p>
                                    </div>
                                    <div class="state-select-box2">
                                        <div class="state-content">
                                            <div class="state" id="value1">
                                                <ul>
                                                    <li>
                                                        <div class="text">
                                                            <h5>Address</h5>
                                                            <p>Romanian  9520 Faires Farm Road,<br /> Carlsbad, NC 28213, California.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="text">
                                                            <h5>Phone</h5>
                                                            <p>Phone 1: +1 555-7890-123<br /> Phone 2: (+ 760) 987-65-43210.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="text">
                                                            <h5>Email</h5>
                                                            <p>supportyou@example.com</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-8'>
                                <Googlemap />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card' style={{marginTop:"5em"}}>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                <div class="contact-form">
                                    <div class="contact-title">
                                        <h2>Send Your Message Us</h2>
                                        <p>Dont be shy, Send your message or quiries through below form, our expert team will help you ASAP.</p>
                                    </div>
                                    <form id="contact-form" name="contact_form" class="default-form" action="http://st.ourhtmldemo.com/new/Dento/inc/sendmail.php" method="post" novalidate="novalidate">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-box">
                                                    <input type="text" name="form_name" value="" placeholder="Your Name*" required="" aria-required="true"/>
                                                </div>
                                                <div class="input-box">
                                                    <input type="email" name="form_email" value="" placeholder="Your Mail*" required="" aria-required="true"/>
                                                </div>
                                                <div class="input-box">
                                                    <input type="text" name="form_phone" value="" placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-box">
                                                    <textarea name="form_message" placeholder="Your Message.." required="" aria-required="true"></textarea>
                                                </div>
                                                <div class="button-box">
                                                    <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value=""/>
                                                        <button class="btn" type="submit" data-loading-text="Please wait...">Send Your Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </motion.section>
    );
}

export default Contact;