import Banner from "../utilities/Banner/Banner";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import img1 from "../asses/image/finn-min.jpg";
import img2 from "../asses/image/IMG_0676f1-min.jpg";
import img3 from "../asses/image/IMG_3127-min.JPG";
import img4 from "../asses/image/jossy-min.jpg";
import img5 from "../asses/image/jumia3-min.jpg";
import useDocumentTitle from "../utilities/useDocumentTitle";
import { motion } from "framer-motion";
import { useReducer} from "react";

const initialState = 3

const reducer = (state,action)=>{
    if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
        return state = 2;
    }
    else if(window.innerWidth <= 768) {
       return state = 1;
    }
    else {
       return initialState
    }
}

function Team() {
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
    const[number,dispatch]=useReducer(reducer,initialState);

    
        window.addEventListener('resize', dispatch);
    

    return (
        <motion.section id='Team'  variants={containerVariant}
        style={{marginBottom:"10rem"}}
        initial="hidden"
        animate="visible"
        exit="exit">
             {/* title */}
             <div style={{position:"absolute"}}>
                <Page title='Team - ' />
            </div>
            {/* banner */}
            <Banner page="Our Team" route="Our Team" />
            <div className='team-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-11 col-xxl-11 mx-auto'>
                            <div class="sec-title text-center">
                                <h1>Highly Qualified Team</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <Swiper
                                slidesPerView={number}
                                pagination={{
                                    dynamicBullets: true,
                                    clickable: true
                                }}
                                loop="true"
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='single-team-member'>
                                        <div className="img-rack"><img src={img2} alt="" /></div>
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Oyinebifinide</h3>
                                            <span>CEO The Waste Reclaim Company/SCRAP</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member' style={{ overFlow: "hidden", height: "23em" }}>
                                        <div className="img-rack"><img src={img1} alt="" /></div>
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Hannatu</h3>
                                            <span>Scrap Team Lead</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member'>
                                        <div className="img-rack"><img src={img3} alt="" /></div>
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Jennifer</h3>
                                            <span>Instructor</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member'>
                                        <div className="img-rack"><img src={img4} alt="" /></div>
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Joseph George</h3>
                                            <span>Head, Scrap Media</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member' style={{ overflow: "hidden", width: "20em", textAlign: "center" }}>
                                        <div className="img-rack"><img src={img5} alt="" /></div>
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Jummai Samaila</h3>
                                            <span>Instructor</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Team;