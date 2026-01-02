import React, { useState } from 'react';
import './Navbar.css'; 
import logo from '../Images/logo.png'; 
import contact from '../Images/contact.png'; 
import eggImage from '../Images/egg.png';  // Your transparent egg
import { Link } from 'react-scroll'; 

const Navbar = () => {
    const [eggs, setEggs] = useState([]);

    const handleLogoClick = () => {
        const id = Date.now(); 
        setEggs(prev => [...prev, { id }]);

        setTimeout(() => {
            setEggs(prev => prev.filter(e => e.id !== id));
        }, 4000);
    };

    return (
        <nav className="navbar">
            {/* Wrapper to position eggs relative to the logo */}
            <div className="logo-wrapper">
                <img 
                    src={logo} 
                    alt="Thunder Chickens Logo" 
                    className='logo' 
                    onClick={handleLogoClick}
                    style={{ cursor: 'pointer' }}
                />

                {/* Eggs drop from inside this wrapper */}
                <div className="egg-container">
                    {eggs.map(egg => (
                        <img 
                            key={egg.id}
                            src={eggImage}
                            alt="Falling egg"
                            className="dropping-egg"
                        />
                    ))}
                </div>
            </div>

            {/* Rest of your menu stays the same */}
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='people' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">People</Link>
                <Link activeClass='active' to='galleryComp' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Gallery</Link>
            </div>

            <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={1000}>
                <button className="desktopMenuBtn">
                    <img src={contact} alt="contact" className="desktopMenuImg"/>Contact Us
                </button>
            </Link>
        </nav>
    )
}

export default Navbar