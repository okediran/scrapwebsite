import { motion } from "framer-motion";
import useDocumentTitle from "../utilities/useDocumentTitle";
import Banner from "../utilities/Banner/Banner";
import GalleryCard  from "../component/Gallery/Gallery";
import {useState} from "react";
import { Modal } from 'react-bootstrap';
function Gallery() {

  function Page(props) {
    const titlePrefix = 'Scrap'
    useDocumentTitle(`${props.title}${titlePrefix}`)
    return <h2>{props.content}</h2>
  };
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
  };
   // modal
   const [show, setShow] = useState(false);

  const [modal, setModal] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (img) => {
    setModal(img)
    setShow(true)
};

  return (
    <motion.div id="Gallery"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* title */}
      <div style={{ position: "absolute" }}>
        <Page title='Gellery - ' />
      </div>
      {/* banner */}
      <Banner page="Gallery" route="Gallery" />

      <Modal className="gallery-modal" size="lg" show={show} onHide={handleClose} centered>
          <p className="close-btn" style={{color:"white"}} onClick={handleClose}>X</p>
          <Modal.Body>
             {modal}
            </Modal.Body>
      </Modal>
      <div className="gallery-padding">
          <div className="row" style={{ flexWrap: "wrap" }}>
            <div className="col-lg-12">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_0940.JPG")} alt="img"/> )}   img={require("../asses/image/IMG_0940.JPG")}/>
            </div> 
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1107.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1107.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1114.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1114.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1115.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1115.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1117.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1117.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1118.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1118.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1772.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1772.JPG")}/>
            </div>
            <div className="col-lg-6">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1114.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1114.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1159.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1159.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1162.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1162.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1151.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1151.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1165.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1165.JPG")}/>
            </div>
            <div className="col-lg-5">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1169.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1169.JPG")}/>
            </div>
            <div className="col-lg-2">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1774.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1774.JPG")}/>
            </div>
            <div className="col-lg-5">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1775.JPG")} alt="img" />)}  img={require("../asses/image/IMG_1775.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_2065.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_2065.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_2064.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_2064.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/rochas 8.jpg")} alt="img"/> )}  img={require("../asses/image/rochas 8.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/rochas 4.jpg")} alt="img"/> )}  img={require("../asses/image/rochas 4.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/rochas5.jpg")} alt="img"/> )}  img={require("../asses/image/rochas5.jpg")}/>
            </div>
            <div className="col-lg-6">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/rochas.jpg")} alt="img" /> )}  img={require("../asses/image/rochas.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1386.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1386.JPG")}/>
            </div>
            <div className="col-lg-2">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/v2.jpg")} alt="img"/> )}  img={require("../asses/image/v2.jpg")}/>
            </div>
            <div className="col-lg-5">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1366.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1366.JPG")}/>
            </div>
            <div className="col-lg-5">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1191.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1191.JPG")}/>
            </div>
            <div className="col-lg-6">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1756.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1756.JPG")}/>
            </div>
            <div className="col-lg-6">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1284.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1284.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/v7.jpg")} alt="img"/> )}  img={require("../asses/image/v7.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/v6.jpg")} alt="img"/> )}  img={require("../asses/image/v6.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/v5.jpg")} alt="img"/> )}  img={require("../asses/image/v5.jpg")}/>
            </div><div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/v4.jpg")} alt="img"/> )}  img={require("../asses/image/v4.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/v3.jpg")} alt="img"/> )}  img={require("../asses/image/v3.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/v1.jpg")} alt="img"/> )}  img={require("../asses/image/v1.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_2081.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_2081.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_2068.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_2068.JPG")}/>
            </div>
            <div className="col-lg-6">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1778.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1778.JPG")}/>
            </div>
            <div className="col-lg-6">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1777.JPG")} alt="img" /> )}  img={require("../asses/image/IMG_1777.JPG")}/>
            </div>
            <div className="col-lg-12">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1308.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1308.JPG")}/>
            </div>
            <div className="col-lg-6">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1204.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1204.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1203.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1203.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/rochas2.jpg")} alt="img"/> )}  img={require("../asses/image/rochas2.jpg")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1756.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1756.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1761.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1761.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_2068.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_2068.JPG")}/>
            </div>
            <div className="col-lg-3">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1309.JPG")} alt="img"/> )}  img={require("../asses/image/IMG_1309.JPG")}/>
            </div>
            <div className="col-lg-12">
              <GalleryCard click={()=>handleShow( <img className="img-fluid" width="100%" src={require("../asses/image/IMG_1777.JPG")} alt="img" /> )}  img={require("../asses/image/IMG_1777.JPG")}/>
            </div>
        </div>
      </div>
      
    </motion.div>
  );
}

export default Gallery;