import React from 'react';
import './About.css'; 
import debate from '../Images/podium.png';
import gears from '../Images/gears.png'; 
import group from '../Images/group.png'; 

const About = () => {
    return (
        <section id='about'>
            <span className='title'>
                About Thunderchickens
            </span>
            <span className='description'> 
                We are a group of anarchists rebelling against the societal construct of the speech club. 
                We thrive in chaos and bask in destruction. Our sole goal is to disrupt, to debunk, and to dismantle.
            </span>
            <div className="bars">

                <div className="bar">
                    <img src={debate} alt="trojan" className="barImage"></img>
                    <div className="barText">
                        <h2>Who we are</h2>
                        <p>We are speech and debate competitors from the Bay Area in California that compete in the STOA league. </p>
                    </div>
                </div>
                <div className="bar">
                    <img src={gears} alt="gears" className="barImage"></img>
                    <div className="barText">
                        <h2>What we do</h2>
                        <p> Our members events from every speech category. 
                            Many of our members are also part of Clash debate club doing Team Policy and Parliamentary debate. 
                        </p>
                    </div>
                </div>
                <div className="bar">
                    <img src={group} alt="group" className="barImage"></img>
                    <div className="barText">
                        <h2>Join us</h2>
                        <p>Anyone is welcome to become a Thunderchicken! Just shoot us an email at the address located at the bottom of the page.  
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default About; 