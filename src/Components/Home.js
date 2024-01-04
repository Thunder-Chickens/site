import React from 'react';
import './Home.css';
import Group from '../Images/groupPhoto.jpg';
import {Link} from 'react-scroll'; 

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Welcome to</span>
                <span className="introText">
                    <span className="introName">Thunderchickens Speech Club <br/></span>
                    "where fun <i>doesn't</i> go to die"
                </span>
                <p className="introPara"><br/>It's more fun here than Legacy</p>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={1000}>
                    <button className="btn">
                        About Us
                    </button>
                </Link>
            </div>
            <img src={Group} alt="CAD" className="bg"/>
        </section>
    )
}

export default intro