import React from 'react';
import "./Section1.css";
import section1 from "../../Asserts/img/section1.png"
import { useDarkMode } from '../../Context/Darkcontext';
import { Link } from 'react-scroll';

function Section1() {

  const {darkMode} = useDarkMode();

  return (
    <>
      <div className='onemain' id='home' style={{background :darkMode ?"black":""}}>
        <div className="oneleft">
          <div className='onehearding'>Transforming Ideas Into Digital Excellence</div>
          <div className='oneparagraph' style={{color :darkMode ?"white":""}}>At E-Dev Alliance, we specialize in crafting cutting-edge websites, eye-catching designs, and professional video and photo editing services to elevate your brand's online presence</div>
          <div style={{color :darkMode ?"white":""}}>
            <div><Link
                          to="services"
                          smooth={true}
                          duration={500}
                          spy={true}
                         
                        >Explore Our Services </Link></div>
            <div><Link to='Formsec' smooth={true}
                          duration={500}
                          spy={true}
               > Get a Free Quote </Link></div></div>
        </div>
        <div className="oneright">
<img src={section1} alt="" />
        </div>
      </div>
    </>
  )
}

export default Section1;