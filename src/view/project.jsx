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
                    <div className='col-lg-6 col-md-6 col d-flex' style={{ justifyContent:"center",alignItems:"center" }}>
                        <div style={{ paddingLeft: "20px" }}>
                            <h2>THE SCRAP <br /> PROJECT</h2>
                            <p style={{lineHeight:"1.5"}}>
                                In this unique SCRAP girls challenge dedicated to and inspired
                                by the African female child, SCRAP intends to award ten lap-
                                tops to ten girls competing in teams of five against six teams
                                from other schools. The winning group will get training in digi-
                                tal skills such as coding, fashion illustration, graphics, and edit-
                                ing. <br/>
                                This debut project is dedicated to Nusaiba, who was the
                                inspiration behind SCRAP. We plan to locate more girls
                                like Nusaiba from mostly government schools in the
                                state of Kano, inspire in them the conviction that their
                                ambitions are worthwhile, and provide them with the
                                resources necessary to compete internationally.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6' style={{zIndex:"1"}}>
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