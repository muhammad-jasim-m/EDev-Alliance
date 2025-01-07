import React from 'react';
import "./Section2.css";
import section2 from "../../Asserts/img/section2.png";
import { useDarkMode } from '../../Context/Darkcontext';

function Section2() {
  const {darkMode} = useDarkMode();
  return (
    <>
    <div className='twomain' id='about' style={{background :darkMode ?"black":""}}>

<div className="secondleft">
<img src={section2} alt="" />

</div>

<div className="secondright">
  <div>About Us</div>
  <div>E-Dev Alliance is recognized for delivering comprehensive web and digital solutions tailored to meet your business needs</div>
  <div style={{color :darkMode ?"white":""}}>Welcome to e-Dev Alliance, your trusted partner in digital transformation. We are a dynamic team of tech enthusiasts, designers, and creators passionate about turning your vision into reality. With expertise in web development, designing, and video and picture editing, we aim to deliver solutions that resonate with your brand's unique identit</div>
  <div style={{color :darkMode ?"white":""}}>Get a Free Quote</div>
</div>

    </div>
    </>
  )
}

export default Section2;