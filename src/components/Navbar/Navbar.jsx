import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../../Asserts/img/Image.png'
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Icon } from '@iconify/react'
import { useDarkMode } from '../../Context/Darkcontext';
import { Link } from 'react-scroll';

function Navbar() {
  const { darkMode, toggleDarkMode,toogle,setToogle } = useDarkMode();

  const performtoogle = ()=>{
    setToogle(true);
  }

  const handleLinkClick = () => {
    setToogle(false); // Set toggle to false when a link is clicked
  };

  return (
    <>

      <div className="maindivnav" style={{ background: darkMode ? "black" : "" }}>
        <div className="logofirst">
          <img src={logo} alt="" />
          EDev Alliance
        </div>

<div className={toogle ? "reside2" : "reside"} style={{ background: darkMode ? "black" : "white" }}>

<div className="crossnavicon">
<Icon onClick={handleLinkClick} icon="maki:cross" width="1.2em" height="1.2em" style={{color: darkMode ? "#fff" : "#000"}}/>
</div>

<div className="socialicons">
  <div>sf</div>
  <div></div>
  <div></div>
</div>

        <div className="logosecond" >
          <ul style={{ color: darkMode ? "white" : "" }}>
            <li><Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              // onClick={handleLinkClick}
            >
              Home
            </Link> </li>
            <li><Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              // onClick={handleLinkClick}
            >
              About Us
            </Link> </li>
            <li> <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              // onClick={handleLinkClick}
            >
              Services
            </Link></li>
            <li><Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              // onClick={handleLinkClick}
            >
              Projets
            </Link></li>
            <li><Link
              to="testimonals"
              smooth={true}
              duration={500}
              spy={true}
              // onClick={handleLinkClick}
            >
              Testimonals
            </Link></li>
          </ul>
          {/* <ul>
            <li><Link to='home'>home</Link> </li>
            <li>about</li>
            <li>contace</li>
            <li>services</li>
            <li>why us</li>
          </ul> */}
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
          <div className='contactnav'>Contact Us</div>
        </div>

        </div>

<div className="logoforth" onClick={performtoogle}>
<Icon icon="mingcute:menu-fill" width="24" height="24"  style={{color: darkMode ? "#fff" : "#000"}} />
</div>


      </div>



    </>
  )
}

export default Navbar;