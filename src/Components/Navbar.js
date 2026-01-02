import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/logo.png';
import contact from '../Images/contact.png';
import eggImage from '../Images/egg.png';            // Regular falling egg
import hatchedImage from '../Images/chick.png';    // Chick breaking out (your "hatching" moment)
import { Link } from 'react-scroll';

const Navbar = () => {
    const [eggs, setEggs] = useState([]);

    const handleLogoClick = () => {
        const id = Date.now();
        setEggs(prev => [...prev, { id, isHatched: false }]);

        // Remove after 6 seconds
        setTimeout(() => {
            setEggs(prev => prev.filter(e => e.id !== id));
        }, 6000);
    };

    const handleEggClick = (id) => {
        setEggs(prev => prev.map(e =>
            e.id === id ? { ...e, isHatched: true } : e
        ));
    };

    return (
        <nav className="navbar">
            <div className="logo-wrapper">
                <img
                    src={logo}
                    alt="Thunder Chickens Logo"
                    className="logo"
                    onClick={handleLogoClick}
                    style={{ cursor: 'pointer' }}
                />

                <div className="egg-container">
                    {eggs.map(egg => (
                        <div
                            key={egg.id}
                            className="dropping-egg"
                            onClick={() => !egg.isHatched && handleEggClick(egg.id)}
                        >
                            <img
                                src={egg.isHatched ? hatchedImage : eggImage}
                                alt="Falling egg"
                                className="egg-image"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='people' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">People</Link>
                <Link activeClass='active' to='galleryComp' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Gallery</Link>
            </div>

            <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={1000}>
                <button className="desktopMenuBtn">
                    <img src={contact} alt="contact" className="desktopMenuImg" />Contact Us
                </button>
            </Link>
        </nav>
    );
}

export default Navbar;