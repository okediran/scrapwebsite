import Banner from "../utilities/Banner/Banner";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import img1 from "../asses/image/004.jpg";
import img3 from "../asses/image/3389.jpg";
import img4 from "../asses/image/df.jpg";
import img6 from "../asses/image/sssmin.jpg";
import img7 from "../asses/image/2.jpg";
import img8 from "../asses/image/3.jpg";
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
                                <h4 style={{ color: "purple",fontWeight:"700" }}>Professional Dentists</h4>
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
                                    <div className='single-team-member' style={{ overFlow: "hidden", height: "23em" }}>
                                        <img style={{ width: "22em" }} src={img1} alt="" />
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Dr. Eugene Renolds</h3>
                                            <span>Periodontists</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member'>
                                        <img src={img7} alt="" />
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Dr. Eugene Renolds</h3>
                                            <span>Periodontists</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member'>
                                        <img style={{ width: "22em" }} src={img3} alt="" />
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Dr. Eugene Renolds</h3>
                                            <span>Periodontists</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member'>
                                        <img style={{ width: "23.5em" }} src={img4} alt="" />
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Dr. Eugene Renolds</h3>
                                            <span>Periodontists</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member' style={{ overflow: "hidden", width: "20em", textAlign: "center" }}>
                                        <img style={{ width: "27em" }} src={img6} alt="" />
                                        <div class="overlay-style-one"></div>
                                        <div class="text-holder text-center">
                                            <h3>Dr. Eugene Renolds</h3>
                                            <span>Periodontists</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='single-team-member'>
                                        <img src={img8} alt="" />
                                        <div class="text-holder text-center">
                                            <h3>Dr. Eugene Renolds</h3>
                                            <span>Periodontists</span>
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