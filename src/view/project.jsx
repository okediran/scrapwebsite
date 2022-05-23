import React from 'react';
import img1 from "../asses/image/rochas (1).jpg";
import Banner from "../utilities/Banner/Banner";
import useDocumentTitle from "../utilities/useDocumentTitle";
import { motion } from "framer-motion";

function Project() {
   
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
        <motion.section id='Project'
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{overflow:"hidden",marginBottom:"10rem"}}
        >
             {/* title */}
             <div style={{position:"absolute"}}>
                <Page title='Project - ' />
            </div>
            {/* banner */}
                <Banner page="Our Project" route="Our Project"/>
            <div className='Vision'>
                <div className='row'>
                    <span style={{ fontSize: "150px", fontWeight: "500", opacity: ".1", position: "absolute", letterSpacing: "20px" }}>
                        PROJECT
                    </span>
                    <div className='col-lg-6 col-md-6 col' style={{ marginTop: "6rem" }}>
                        <div className='padding-vision' style={{ paddingLeft: "80px" }}>
                            <h2>THE SCRAP <br /> PROJECT</h2>
                            <p>
                                SCRAP is an initiative of Waste Reclaim committed to fostering grassroot quality education through recycling , SCRAP is designed as a conduit that engages participants on all levels and address common barriers to progress while also transitioning them into opportunities . It’s an social system that delivers better outcomes for people, and the environment.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <div className='img-div'>
                            <img initial={{ x: '300px' }} animate={{ x: "0px" }} transition={{ delay: 1, duration: 1 }} src={img1} className="active-img" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Project;