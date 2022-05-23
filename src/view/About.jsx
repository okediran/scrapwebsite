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
                                    <p> was started in the year 1995 as a small private dental clinic in Binghamton, NY, USA. Looking for affordable dental care? .You can fund SCRAP by offsetting your organization or personal plastic footprint by purchasing a reclaim credit.</p>
                                    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, pain  resultant pleasure praising teachings of the great explorer...</p>
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
                                    <p>To provide outstanding dental care with a commitment of honesty, integrity &amp; quality...</p>
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