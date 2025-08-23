import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import './People.css';
import people from '../Images/people.png'; 

const People = () => {
    return (
        <section id="people">

            <div className='peopleBody'>
                <h2 className="peopleTitle">Our Club</h2>
                <span className="peopleDesc">We currently consist of three members and four alumni, one of which continues to debate at his college.
                </span>
                <div className='peopleLists'>
                    <div className='list'>
                        <div className="listHead">People</div>
                        <ul>
                            <ul className='bullet'>
                            <b>Member: </b>
                                <a href="https://www.instagram.com/gwang.2007/" target='_blank' rel='noreferrer' className='link'>
                                    Grace Wang
                                </a> 
                            </ul>
                            <ul className='bullet'>
                                <b>Member: </b>
                                <a href="https://www.instagram.com/_noah_wooo/" target='_blank' rel='noreferrer' className='link'>
                                    Noah Woo
                                </a>
                            </ul>
                            <ul className='bullet'>
                                <b>Alumnus: </b>
                                <a href="https://www.linkedin.com/in/usc-peter-wang/" target='_blank' rel='noreferrer' className='link'>
                                    Peter Wang
                                </a>  
                            </ul>
                        </ul>
                    </div>
                    <div className='list'>
                        <ul>
                            <div className="listHead">Awards</div>
                            <ul className='bullet'>
                                <b>Apologetics: </b>
                                11th/54 at Soli Deo Gloria (2023); 
                                27th/75 at Act of Valor (2023)
                            </ul>
                            <ul className='bullet'>
                                <b>Original Oratory: </b>
                                22nd/59 at Soli Deo Gloria (2023)
                            </ul>
                            <ul className='bullet'>
                                <b>Extemp: </b>
                                6th/37 at Act of Valor (2023)
                            </ul>
                            <ul className='bullet'>
                                <b>Impromptu: </b>
                                13th/68 at Clash PLUS (2023)
                                5th/49 at Blossom Festival (2024)


                            </ul>
                        </ul>
                    </div>
                </div>
            </div>

            <img src={people} alt="members" className='peopleImg'></img>
        </section>
    ); 
}

export default People;