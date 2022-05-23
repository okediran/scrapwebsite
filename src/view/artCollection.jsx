import Banner from "../utilities/Banner/Banner";
import {  useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper";
import Gallerycard from "../component/card/gallerycard";
import useDocumentTitle from "../utilities/useDocumentTitle";
import { motion } from "framer-motion";
import { Modal } from 'react-bootstrap';
import artarray from "../utilities/json/art";

function Art() {

    // modal
    const [show, setShow] = useState(false);
    

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

    function ProductArray(product) {
       return(
        <Gallerycard img={product.image} 
        key={product.id} 
        name={product.product_name}
        Date={product.created_date}
        click={()=>handleShow(product)}
        /> 
       ); 
    };

    // modal

    const [modal, setModal] = useState("");

    const handleClose = () => setShow(false);

    const handleShow = (product) => {
        setModal(product)
        setShow(true)
    };

    console.log(modal)
    return (

        <motion.section id="Art" variants={containerVariant}
        style={{marginBottom:"10rem"}}
            initial="hidden"
            animate="visible"
            exit="exit">
            {/* title */}
            <div style={{ position: "absolute" }}>
                <Page title='Art - ' />
            </div>

            {/* model */}
            <Modal size="lg" show={show} onHide={handleClose} centered>
                <p className="close-btn" onClick={handleClose}>X</p>
                <Modal.Body>
                    <div className="row">
                        <div className="col-xl-6" style={{overflow:"hidden"}}>
                            <img src={modal.image} style={{width:"350px"}} alt="" />
                        </div>
                        <div className="col-xl-6" style={{overflow:"hidden"}}>
                             <p>Name: {modal.product_name}</p>
                             <p>Type: {modal.slug}</p>
                             <p>Date:{modal.created_date}</p>
                             <p style={{marginLeft:"70px"}}><img src={modal.image} alt="" style={{width:"190px"}}/></p>
                        </div>
                    </div>
                 </Modal.Body>
            </Modal>

            {/* banner */}
            <Banner page="Art Collection" route="Art Collection" />

            {/* container */}
            <div className="container">
                <div className="row text-center" style={{marginBottom:"30px"}}>
                    <div className="col-lg-10 col-xl-11 mx-auto">
                        <h4>LATEST PRODUCTS</h4>
                    </div>
                </div> 
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
                               <div className="slide-price" >
                                <p>Name:{artarray[5].product_name}</p>
                                <p>Type:{artarray[5].slug}</p>
                                <p>Date:{artarray[5].created_date}</p>
                               </div>
                                <div className="img-body">
                                    <img src={artarray[5].image} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="slide-price" >
                                <p>Name:{artarray[6].product_name}</p>
                                <p>Type:{artarray[6].slug}</p>
                                <p>Date:{artarray[6].created_date}</p>
                            </div>
                            <div className="img-body">
                                <img src={artarray[6].image} alt="" />
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="slide-price" >
                                <p>Name:{artarray[7].product_name}</p>
                                <p>Type:{artarray[7].slug}</p>
                                <p>Date:{artarray[7].created_date}</p>
                               </div>
                                <div className="img-body">
                                    <img src={artarray[7].image} alt="" />
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
                        {artarray.map(ProductArray)}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Art;