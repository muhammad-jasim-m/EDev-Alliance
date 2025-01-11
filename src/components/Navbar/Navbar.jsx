import React from 'react';
import "./Navbar.css";
import logo from '../../Asserts/img/Image.png'
import { Icon } from '@iconify/react'
import { useDarkMode } from '../../Context/Darkcontext';
import { Link } from 'react-scroll';

function Navbar() {
  const { darkMode, toggleDarkMode, toogle, setToogle } = useDarkMode();

  const performtoogle = () => {
    setToogle(true);
  }

  const handleLinkClick = () => {
    setToogle(false); // Set toggle to false when a link is clicked
  };

  return (
    <>

      <div className="maindivnav" style={{ background: darkMode ? "black" : "#fff" }}>
        <div className="logofirst">
          <img src={logo} alt="" />
          EDev Alliance
        </div>

        <div className={toogle ? "reside2" : "reside"} style={{ background: darkMode ? "black" : "white" }}>

          <div className="crossnavicon">
            <Icon onClick={handleLinkClick} icon="maki:cross" width="1.2em" height="1.2em" style={{ color: darkMode ? "#fff" : "#000" }} />
          </div>

          <div className="socialicons">
            <div><Icon icon="ic:outline-whatsapp" width="24" height="24" style={{ color: "#fff" }} /></div>
            <div><Icon icon="mdi:email" width="24" height="24" style={{ color: "#fff" }} /></div>
            <div><Icon icon="mingcute:linkedin-fill" width="24" height="24" style={{ color: "#fff" }} /></div>
          </div>

          <div className="logosecond" >
            <ul style={{ color: darkMode ? "white" : "" }}>
              <li><Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                Home
              </Link> </li>
              <li><Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                About Us
              </Link> </li>
              <li> <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                Services
              </Link></li>
              <li><Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                Projets
              </Link></li>
              <li><Link
                to="testimonial"
                smooth={true}
                duration={500}
                spy={true}
                onClick={handleLinkClick}
                activeClass="active-link"
              >
                Testimonals
              </Link></li>
            </ul>
          </div>

          <div className="logothird">
            <div className="toggledark" onClick={toggleDarkMode}>
              <Icon icon="line-md:moon-rising-filled-loop" width="36" height="36" style={{ color: "#ffac33" }} />
              <Icon icon="twemoji:sun" width="36" height="36" />
              <div
                className="t-button"
                style={darkMode ? { left: "2px" } : { right: "2px" }}
              ></div>
            </div>
            <div className='contactnav'> <Link to='Formsec' smooth={true}
              duration={500}
              spy={true}
              onClick={handleLinkClick} > Contact Us </Link></div>
          </div>

        </div>

        <div className="logoforth" onClick={performtoogle}>
          <Icon icon="mingcute:menu-fill" width="24" height="24" style={{ color: darkMode ? "#fff" : "#000" }} />
        </div>


      </div>



    </>
  )
}

export default Navbar;