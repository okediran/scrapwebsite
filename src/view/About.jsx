import profile from "../asses/image/IMG_0676f1-min.jpg";
import Banner from "../utilities/Banner/Banner";
import useDocumentTitle from "../utilities/useDocumentTitle";
import { motion } from "framer-motion";

function About() {
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
        <motion.section id='About'
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{marginBottom:"3rem"}}
        >
               {/* title */}
               <div style={{position:"absolute"}}>
                <Page title='About - ' />
            </div>
            {/* banner */}
                <Banner page="About Us" route="About Us"/>
            <div className='padding'>
                {/* about details */}
                <div className='about-details'>
                    <div className='row'>
                        <div className='col-lg-6 col'>
                            <img src={require("../asses/image/10....jpg")} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <div class="inner-content">
                                <div class="sec-title">
                                    <h3>Our Story</h3>
                                </div>
                                <div class="about-text-holder">
                                    <p> When a young girl in Kano State spoke about how she wanted to purchase a laptop for school but couldn't afford the whole collection, that was when SCRAP was born.
                                         As soon as we helped with the remaining cost, we started to wonder how many other youngsters were eager to study outside of the school curriculum but lacked the resources.. </p>
                                    <p>We made a conscious decision to provide rural students with the resources they need to experiment with new ideas outside of the classroom, such as how new technologies are reshaping the global landscape. 
                                        As an initiative of The Waste Reclaim Company, SCRAP aims to accomplish two things. To begin with, our Social Creative Recycle Art Programs aims to raise a new of environmentally concious children though art and to aid in the spread of modern technology and
                                        excellent educational systems to rural children in our annual exhibition, we'll showcase the progress the kids have made and the potential they have when provided wit the proper resources.
                                    </p>
                                    <div class="author-box fix">
                                        <div class="img-box">
                                            <img src={profile} alt="founder"/>
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
            </div>
            {/* Goal */}
            <div className='goal'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div class="single-mission-vision-box text-center wow fadeInLeft animated">
                                    <h6>Our Mission</h6>
                                    <p>To to raise a new generation of environmentally conscious children and to aid in the spread of modern technology and excellent educational systems to rural children. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div class="single-mission-vision-box text-center wow fadeInUp animated">
                                    <h6>Our Goal</h6>
                                    <p>By 2025, we want to have 5,000 environmentally aware, technologically savvy, and well-educated youngsters from rural regions. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div class="single-mission-vision-box text-center wow fadeInRight animated" >
                                    <h6>Our Philosophy</h6>
                                    <p>The potential for rural children to dream beyond their environment is made possible by technology and education; a shot at achieving their dream is made possible by us. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </motion.section>
    );
}

export default About;