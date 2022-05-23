import React from 'react';

function GalleryCard(props) {
    return (
        <div className="col rounded" onClick={props.click} style={{ height: "300px" }}>
            <img className="img-fluid" src={props.img} alt="img" style={{ objectFit: "fill" }} />
        </div>
    );
}

export default GalleryCard;