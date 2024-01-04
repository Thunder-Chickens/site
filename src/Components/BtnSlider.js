import React from 'react';

import left from '../Images/left.png';
import right from '../Images/right.png';
import './Gallery.css'; 

export default function BtnSlider({direction, moveSlide}) {
    return (
        <button onClick={moveSlide} className={direction === "next"? 'btn-slide next'
            : "btn-slide prev"}>
            <img src={direction ==="next" ? right : left}></img>
        </button>
    );
}