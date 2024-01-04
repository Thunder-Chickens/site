import React from 'react';
import './Navbar.css'; 
import logo from '../Images/logo.png'; 
import contact from '../Images/contact.png'; 
import {Link} from 'react-scroll'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt = "logo" className='logo'></img>
            <div className="desktopMenu">
                {/*<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={1000} className="desktopMenuItem">Home</Link>*/}
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='people' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">People</Link>
                <Link activeClass='active' to='galleryComp' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Gallery</Link>
            </div>
            <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={1000}>
                <button className = "desktopMenuBtn">
                    <img src={contact} alt="contact" className="desktopMenuImg"/>Contact Us
                </button>
            </Link>
        </nav>
    )
}

export default Navbar