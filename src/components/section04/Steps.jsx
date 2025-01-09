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
    
</div>

</div>

    </div>
    
    </>
  )
}

export default Steps;