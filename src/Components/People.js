import React from 'react';
import './People.css';
import tim_scarlett from '../Images/tim_scarlett.jpeg';

const People = () => {
  return (
    <section id="people">
      {/* LEFT SIDE: TEXT */}
      <div className="peopleLeft">
        <div className="peopleBody">
          <h2 className="peopleTitle">Our Club</h2>

          <span className="peopleDesc">
            We currently consist of 6 members and 3 alumni, one of which
            continues to debate at his college.
          </span>

          <div className="peopleLists">
            <div className="list">
              <div className="listHead">People</div>
              <ul>
                <li className="bullet">
                  <b>Club President: </b>
                    Scarlett Teran
                </li>
                <li className="bullet">
                  <b>Member: </b>
                    Timothy Loh
                </li>
                <li className="bullet">
                  <b>Member: </b>
                  <a
                    href="https://www.instagram.com/hanana_woo/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Hannah Woo
                  </a>
                </li>
                <li className="bullet">
                  <b>Member: </b>
                  <a
                    href="https://www.instagram.com/pranaydk17/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Pranay Krishnamurthy
                  </a>
                </li>
                <li className="bullet">
                  <b>Member: </b>
                    Abigail Dunn
                </li>
                <li className="bullet">
                  <b>Member: </b>
                    Rebekkah Chow
                </li>

                <li className="bullet">
                  <b>Alumnus: </b>
                  <a
                    href="https://www.instagram.com/gwang.2007/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Grace Wang
                  </a>
                </li>
                <li className="bullet">
                  <b>Alumnus: </b>
                  <a
                    href="https://www.instagram.com/_noah_wooo/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Noah Woo
                  </a>
                </li>
                <li className="bullet">
                  <b>Alumnus: </b>
                  <a
                    href="https://www.linkedin.com/in/usc-peter-wang/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Peter Wang
                  </a>
                </li>
              </ul>
            </div>

            <div className="list">
              <div className="listHead">Awards</div>
              <ul>
                <li className="bullet">
                  <b>Apologetics: </b>
                  11th/54 at Soli Deo Gloria (2023); 27th/75 at Act of Valor (2023)
                </li>
                <li className="bullet">
                  <b>Original Oratory: </b>
                  22nd/59 at Soli Deo Gloria (2023)
                </li>
                <li className="bullet">
                  <b>Extemp: </b>
                  6th/37 at Act of Valor (2023)
                </li>
                <li className="bullet">
                  <b>Impromptu: </b>
                  13th/68 at Clash PLUS (2023); 5th/49 at Blossom Festival (2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: IMAGE */}
      <div className="peopleRight">
        <img src={tim_scarlett} alt="members" className="peopleImg" />
      </div>
    </section>
  );
};

export default People;
