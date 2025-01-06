import React from 'react';
import "./Section1.css";
import section1 from "../../Asserts/img/section1.png"
import { useDarkMode } from '../../Context/Darkcontext';

function Section1() {

  const {darkMode} = useDarkMode();

  return (
    <>
      <div className='onemain' id='home' style={{background :darkMode ?"black":""}}>
        <div className="oneleft">
          <div className='onehearding'>Transforming Ideas Into Digital Excellence</div>
          <div className='oneparagraph' style={{color :darkMode ?"white":""}}>At E-Dev Alliance, we specialize in crafting cutting-edge websites, eye-catching designs, and professional video and photo editing services to elevate your brand's online presence</div>
          <div style={{color :darkMode ?"white":""}}>
            <div>Explore Our Services</div>
            <div>Get a Free Quote</div></div>
        </div>
        <div className="oneright">
<img src={section1} alt="" />
        </div>
      </div>
    </>
  )
}

export default Section1;