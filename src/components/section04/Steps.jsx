import React from 'react';
import './steps.css';
import { useDarkMode } from '../../Context/Darkcontext';

function Steps() {
  const {darkMode} = useDarkMode();

  return (
    <>
    <div className="stepsmaindiv" style={{background :darkMode ?"black":""}}>

<div className="stepheading">
Steps Of Product Desigining
</div>

<div className="stepsdecraption" style={{color :darkMode ?"white":""}}>
We will move you through these steps to make your ideas in to digital solution.
</div>

<div className="stepsdivmain">

<div className="carddivmain">
    <div className="topmain">
      <div>Initial Consultation</div>
      <div>01</div>
    </div>

<div className="decraptionstcad" style={{color :darkMode ?"white":""}}>
We start by discussing your project requirements and goals to understand how we can best assist you.
</div>
</div>

<div className="carddivmain">
    <div className="topmain">
      <div>Design and Development</div>
      <div>02</div>
    </div>

<div className="decraptionstcad" style={{color :darkMode ?"white":""}}>
Our team will create a customized design and develop your website using the latest technologies like React and WordPress CSS.
</div>
</div>


<div className="carddivmain">
    <div className="topmain">
      <div>Testing and Feedback</div>
      <div>03</div>
    </div>

<div className="decraptionstcad" style={{color :darkMode ?"white":""}}>
We conduct thorough testing to ensure your website functions flawlessly. You can provide feedback for any necessary revisions.
</div>
</div>


<div className="carddivmain">
    <div className="topmain">
      <div>Launch and Support</div>
      <div>04</div>
    </div>

<div className="decraptionstcad" style={{color :darkMode ?"white":""}}>
Once everything is approved, we launch your website. We also provide ongoing support to ensure your website continues to perform optimally.
</div>
</div>


</div>

    </div>
    
    </>
  )
}

export default Steps;