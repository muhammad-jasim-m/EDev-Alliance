import React from 'react';
import logo from '../../Asserts/img/Image.png';
import { Icon } from '@iconify/react';
import "./Footer.css";
import { useDarkMode } from '../../Context/Darkcontext';
import { Link } from 'react-scroll';


function Footer() {

  const {darkMode} = useDarkMode();

  return (
    <>
    <div className="footermaindiv" style={{ background: darkMode ? "black" : "#fff" }}>
        
         <div className="logofirst">
                  <img src={logo} alt="" />
                  EDev Alliance
                </div>

<div className="decfooter" style={{ color: darkMode ? "white" : "" }}>
At E-Dev Alliance, we specialize in crafting cutting-edge websites, eye-catching designs, and professional video and photo editing services to elevate your brand's online presence
</div>

<div className="socialiconsfooter">
            <div> <a href="https://wa.me/92310971335" target='_blank'> <Icon icon="ic:outline-whatsapp" width="24" height="24" style={{ color: "#fff" }} /> </a>  </div>
            <div><a href="mailto:jasimdiv200@gmail.com" target='_blank'>
              <Icon icon="mdi:email" width="24" height="24" style={{ color: "#fff" }} /> </a></div>
            <div><a href="https://www.linkedin.com/in/mjasimm" target='_blank'>
              <Icon icon="mingcute:linkedin-fill" width="24" height="24" style={{ color: "#fff" }} />
              </a></div>
          </div>


<div className="logosecond" id='footerlinks'>
            <ul style={{ color: darkMode ? "white" : "" }}>
              <li><Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                // onClick={handleLinkClick}
                activeClass="active-link"
              >
                Home
              </Link> </li>
              <li><Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                // onClick={handleLinkClick}
                activeClass="active-link"
              >
                About Us
              </Link> </li>
              <li> <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                // onClick={handleLinkClick}
                activeClass="active-link"
              >
                Services
              </Link></li>
              <li><Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                // onClick={handleLinkClick}
                activeClass="active-link"
              >
                Projets
              </Link></li>
              <li><Link
                to="testimonial"
                smooth={true}
                duration={500}
                spy={true}
                // onClick={handleLinkClick}
                activeClass="active-link"
              >
                Testimonals
              </Link></li>
            </ul>
          </div>

    </div>
    
    </>
  )
}

export default Footer;