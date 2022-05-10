import Banner from "../utilities/Banner/Banner";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper";
import Gallerycard from "../component/card/gallerycard";
import img1 from "../asses/image/6247164753bc3002352344.png";
import img3 from "../asses/image/jeet-dhanoa-tGHkC5ntUGc-unsplash-removebg-preview.png";
import img7 from "../asses/image/bannercase005.png";
import galleryimg1 from "../asses/image/6244092595b1b782741705.jpg";
import galleryimg2 from "../asses/image/6256b6742f37c883037307.jpg";
import galleryimg3 from "../asses/image/625591587ec4d297919716.jpg";
import galleryimg4 from "../asses/image/624c64d1e57c4825543639.jpg";
import galleryimg5 from "../asses/image/6247164753bc3002352344.png";
import galleryimg6 from "../asses/image/625466e710b1c547250885.jpg";
import galleryimg7 from "../asses/image/6243305f5e4f4588898306.png";
import galleryimg8 from "../asses/image/623ae5dca2210628419203.jpg";
import galleryimg9 from "../asses/image/6243305f5e4f4588898306.png";
import galleryimg10 from "../asses/image/624b76812746c235952958.png";
import useDocumentTitle from "../utilities/useDocumentTitle";
import { motion } from "framer-motion";
import { Modal, Button } from 'react-bootstrap';

function Art() {
    // modal
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const handleClose = () => setShow(false);

    const handleShow = (title) => {
        setModalTitle(title)
        setShow(true)
    };

    // title
    function Page(props) {
        const titlePrefix = 'Scrap'
        useDocumentTitle(`${props.title}${titlePrefix}`)
        return <h2>{props.content}</h2>
    };

    // animation
    const containerVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: .4, duration: 1.5 }
        },
        exit: {
            x: '-100vh',
            transition: { ease: 'easeInOut' }
        }
    }

    return (
        <motion.section id="Art" variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit">
            {/* title */}
            <div style={{ position: "absolute" }}>
                <Page title='Art - ' />
            </div>
            {/* banner */}
            {/* model */}
            <Button variant="primary" onClick={() => handleShow("Somebory")}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>{modalTitle}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <Banner page="Art Collection" route="Art Collection" />

            {/* container */}
            <div className="container">
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                        <Swiper
                            navigation={true}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            loop="true"
                            modules={[Pagination,Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className='single-team-member row'>
                                    <div class="product-details col-xl-6">
                                            ./g,n.rt,j;h','rtj
                                            rthm;lrtmh;l
                                            ;h;lrtj;ryt'
                                            flfkghprskmth
                                            rhl,rth;''hjrs
                                            tth;'rtj';r
                                    </div>
                                    <div className="img-body col-xl-6">
                                        <img src={img1} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='single-team-member row'>
                                    <div class="product-details col-xl-6"></div>
                                    <div className="img-body col-xl-6">
                                     <img src={img7} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='single-team-member row'>
                                    <div class="product-details col-xl-6"></div>
                                    <div className="img-body col-xl-6">
                                        <img src={img3} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className="card-deck">
                <div className="cont">
                    <div className="row">
                        <Gallerycard img={galleryimg1} />
                        <Gallerycard img={galleryimg2} />
                        <Gallerycard img={galleryimg3} />
                        <Gallerycard img={galleryimg4} />
                        <Gallerycard img={galleryimg5} />
                        <Gallerycard img={galleryimg6} />
                        <Gallerycard img={galleryimg7} />
                        <Gallerycard img={galleryimg8} />
                        <Gallerycard img={galleryimg9} />
                        <Gallerycard img={galleryimg10} />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Art;