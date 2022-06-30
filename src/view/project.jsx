import React from 'react';
import img1 from "../asses/image/rochas 2.jpg";
import Banner from "../utilities/Banner/Banner";
import useDocumentTitle from "../utilities/useDocumentTitle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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
        style={{overflow:"hidden"}}
        >
             {/* title */}
             <div style={{position:"absolute"}}>
                <Page title='Project - ' />
            </div>
            {/* banner */}
                <Banner page="Our Project" route="Our Project"/>
            <div className='Vision container'>
                <div>
                     <h2>The SCRAP Vision</h2>
                     <p style={{lineHeight:"1.5"}}>
                        SCRAP is an initiative of Waste Reclaim committed to fostering grassroot quality education through recycling. 
                        SCRAP is designed as a conduit that engages participants on all levels and address common barriers to progress while also transitioning them into opportunities.
                         It's an social system that delivers better outcomes for people and the environment.
                    </p>
                </div>
                <div style={{marginTop:"40px"}}>
                    <h2>THE SCRAP <br /> PROJECT 2022</h2>
                    <p style={{lineHeight:"1.5"}}>
                        SCRAP intends to award 100 lap-tops to students participating in the SCRAP challenge, with a priority for girls, 
                        in this unique SCRAP challenge dedicated to and inspired by the African female child. 70 girls and 30 boys from ten different schools will participate for a
                        laptop and a two-month ICT bootcamp. The group will be trained in digital skills such as coding, NFTs, gaming, and other technological abilities. <br/>
                        This first project is dedicated to Nusaiba, the inspiration for SCRAP.
                         We intend to find additional girls like Nusaiba from predominantly government schools in Kano, instil in them the belief that their dreams are worthwhile, 
                         and equip them with the tools needed to compete worldwide, as well as the same possibilities as their peers in private schools.
                        <br/>
                        To learn more about our plan download our pitch deck here.
                    </p>
                </div>
                <Link to="" className="btn">Download Pitch Deck </Link>
                    <div className='img-div'>
                         <img src={img1} alt="" />
                    </div>
            </div>
        </motion.section>
    );
}

export default Project;