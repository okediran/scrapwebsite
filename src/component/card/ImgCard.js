import React from 'react';

function ImgCard(props) {
    return (
        <div className="card"  style={{border:"none"}} >
            <div className="card-body" style={{padding:"0px"}}>
                <div className="img-div">
                    <img className="img-fluid" src={props.img} alt="img" style={{ height: "auto",objectFit:"fill"}} />
                </div>
            </div>
        </div>
    );
}

export default ImgCard;