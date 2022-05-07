import React from 'react';

function Card(props) {
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <span>{props.span}</span>
                    <div className='service-details'>
                        <p className='number'>{props.number}</p>
                        <h2>{props.h2}</h2>
                        <p className='details'>{props.cont}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;