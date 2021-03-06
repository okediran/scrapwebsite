import Video from "../component/video/video";
import img1 from "../asses/image/photo1648231775.jpeg";
import img3 from "../asses/image/photo1648231302.jpeg";
import img4 from "../asses/image/IMG_1203.JPG";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";
import Card from "../component/card/Card";
import useDocumentTitle from "../utilities/useDocumentTitle";


function Home() {
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
        <motion.section id='Home'
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{marginBottom:"10rem"}}
            >
            {/* title */}
            <div style={{position:"absolute"}}>
                <Page title='Home - ' />
            </div>
            {/* banner */}
            <div className='row'>
                <div className='col-12'>
                    <div className='banner'> 
                    
                        <motion.h1 initial={{opacity:0,x: "-170px" }} animate={{opacity:1,x: "0px",transition:{delay:1.5,duration: 1}}}>Learn With <br />  SCRAP</motion.h1>
                    </div>
                </div>
            </div>

            {/* card */}
                <div className='row' style={{marginTop:"5em"}}>
                    <div className='col-xl-11 col-xxl-11 mx-auto'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <Card number="01" span="01" h2="EDUCATION" cont="The primary purpose of SCRAP is to serve as a conduit through which quality education is delivered to foster grassroot development."/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <Card number="02" span="02" h2="SOCIAL CHANGE" cont="We are connecting all the dots necessary to ensure an improved better social environment by providing infrastructure and materials"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <Card number="03" span="03" h2="RECYCLING" cont="Through SCRAP we are developing new recycling culture among the younger generation and also exploring ways too recycle"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <Card number="04" h2="ART" span="04" cont="Creativity is boundless, SCRAP participants use Art as a medium of expression using readily available waste materials."/>

                            </div>
                        </div>
                    </div>
                </div>
            {/* video section */}
            <div className='Home-video'>
                <Video />
            </div>

            {/* vision */}
            <div className='Vision'>
                <div className='row'>
                    <span style={{ fontSize: "250px", fontWeight: "700", opacity: ".1", position: "absolute", letterSpacing: "20px" }}>
                        VISION
                    </span>
                    <div className='col-lg-6 col-md-6' style={{ marginTop: "6rem" }}>
                        <div className="d-flex" style={{justifyContent: "center", alignItems: "center"}}>
                            <div style={{width:"600px"}}>
                                <h2>THE SCRAP <br /> VISION</h2>
                                <p>
                                    SCRAP is an initiative of Waste Reclaim committed to fostering grassroot quality education through recycling , SCRAP is designed as a conduit that engages participants on all levels and address common barriers to progress while also transitioning them into opportunities . It???s an social system that delivers better outcomes for people, and the environment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6' style={{overFlow:"hidden"}}>
                            <img src={img1}  alt="" />
                    </div>
                </div>
            </div>

            {/* about */}
            <div className='about' style={{ margin: "5rem 0" }}>
                <div className='row'>
                    <div>
                        <svg class="qodef-e-quote-icon" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 188 123" space="preserve">
                            <g>
                                <path stroke-miterlimit="10" d="M43.2,121.9c-6,0-11.4-1-16.4-2.9c-5-1.9-9.3-4.7-12.9-8.3c-3.6-3.6-6.4-8.1-8.4-13.2c-2-5.2-3-11-3-17.5 c0-14.7,5-28.8,15.1-42.2C27.5,24.3,42.2,12.4,61.4,2l18.5,26.4c-5.1,2.7-9.5,5.3-13.4,7.9c-3.9,2.6-7.2,5.2-10.1,7.9 c-2.9,2.7-5.3,5.5-7.4,8.3c-2.1,2.9-4,5.9-5.6,9.2c5.5,0,10.5,0.8,14.9,2.4c4.4,1.6,8.3,3.7,11.5,6.5c3.2,2.8,5.7,6,7.4,9.6 c1.7,3.7,2.6,7.6,2.6,11.7c0,4.2-0.9,8.1-2.6,11.7c-1.7,3.7-4.2,6.8-7.4,9.5s-7,4.8-11.5,6.4C53.7,121.1,48.7,121.9,43.2,121.9z M148,121.9c-6,0-11.4-1-16.4-2.9c-5-1.9-9.3-4.7-12.9-8.3c-3.6-3.6-6.4-8.1-8.4-13.2c-2-5.2-3-11-3-17.5c0-14.7,5-28.8,15.1-42.2 c10-13.4,24.7-25.4,43.9-35.8l18.5,26.4c-5.1,2.7-9.5,5.3-13.4,7.9c-3.9,2.6-7.2,5.2-10.1,7.9c-2.9,2.7-5.3,5.5-7.4,8.3 c-2.1,2.9-4,5.9-5.6,9.2c5.5,0,10.5,0.8,14.9,2.4c4.4,1.6,8.3,3.7,11.5,6.5c3.2,2.8,5.7,6,7.4,9.6c1.7,3.7,2.6,7.6,2.6,11.7 c0,4.2-0.9,8.1-2.6,11.7c-1.7,3.7-4.2,6.8-7.4,9.5c-3.2,2.7-7,4.8-11.5,6.4C158.5,121.1,153.5,121.9,148,121.9z">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div className='col-lg-10 col-xl-11 col-xxl-6 mx-auto'>
                        <Swiper className="mySwiper" pagination={{ clickable: true }} modules={[Pagination]}>
                            <SwiperSlide>
                                <div>
                                    <h4>Ever since i heard about recycling i have been curious about it . People said money can be made out of old/used papers i was surprised because how can a disposed paper earn you money until SCRAP came along and taught us how to make recycled art.</h4>
                                    <span>Nura /Team Red</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <h4 itemprop="description" class="qodef-e-text">Initially  I had no idea about craft  so when the program  started I was informed by mallam umar at first I was discouraged but when I joined the program I saw how things were going and I found it fun to learn how to work as a team. I realise that with recycling we get to reduce the environmental  pollution here in Nigeria because that is one major problem.</h4>
                                    <span>Amina /Team Red</span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* pipeline */}
            <div className='Pipeline'>
                <div className='row'>
                    <span>
                        PIPELINE
                    </span>
                    <div className='col-lg-6 div-image' style={{ zIndex: "1",overflow:"hidden" }}>
                        <motion.img src={img3} className="active-img pipline-img" alt="" />
                    </div>
                    <div className='col-lg-6 d-flex col' style={{ justifyContent: "center", alignItems: "center" }}>
                        <div className='pipeline-content' style={{ padding: "0 7rem 0 4rem" }}>
                            <h2>THE SCRAP <br /> PIPELINE</h2>
                            <p>
                                What happens at the end of SCRAP ? We are building Pipeline that seamlessly transition participants into building the next generation of industrial revolution.
                            </p>
                            <button className='btn'>REQUEST PIPELINE</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* support */}
            <div className='Vision support' style={{ marginTop: "15rem" }}>
                <div className='row'>
                    <span style={{ fontSize: "200px", fontWeight: "700", opacity: ".1", position: "absolute", letterSpacing: "20px" }}>
                        FRAME
                    </span>
                    <div className='col-lg-6' style={{ marginTop: "6rem" }}>
                        <div style={{ paddingLeft: "80px" }}>
                            <h2 style={{ letterSpacing: "0",fontSize:"40px" }}>Support SCRAP <br /> Through <br />Green  Factory Magazine</h2>
                            <p style={{ padding: "0 150px 0 0", fontSize: "20px", marginTop: "30px" }}>
                                You can can support scrap by purchasing a copy of Green Factory Magazine. 100% of Green Factory's profit goes into various SCRAP project.
                            </p>
                            <button className='btn'>Buy Magazine</button>
                        </div>
                    </div>
                    <div className="project img">
                        <img src={img4} className="active-img" alt="" />
                    </div>
                </div>
            </div>

        </motion.section>
    );
}

export default Home;