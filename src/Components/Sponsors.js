import React, {useRef} from 'react';
import './Sponsors.css'; 
import ztl from "../Images/ZTL.png"; 

const Sponsors = () => {
    return (
        <section id="sponsors">
            <div className='sponsorsTitle'>Our Sponsors</div>
            <div className="sponsorList">
                <a href="https://www.ztltech.com" target='_blank' rel='noreferrer'>
                    <img src={ztl} alt="ZTL Tech" className="sponsorImg">
                    </img>
                </a>
            </div>
        </section>
    ); 
}

export default Sponsors; 

