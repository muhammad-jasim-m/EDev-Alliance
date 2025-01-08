import React from 'react';
import "./Section3.css";
import { Icon } from '@iconify/react';
import { useDarkMode } from '../../Context/Darkcontext';

function Section3() {

  const {darkMode} = useDarkMode();

  return (
<>
<div className='threemain' id='services' style={{background :darkMode ?"black":""}}>
  <div className="threeheading">
    Our Services
  </div>

<div className="servicescard">

<div className="servicecardmain">
   {/* Frontend Development */}
   <div className="forjustifycenter">
   <div><Icon
        // onClick={handleLinkClick}
        icon="mdi:react"
        width="2em"
        height="2em"
        style={{ color: darkMode ? "#fff" : "#fff" }}
      /></div>
   <div>Frontend Development</div>
   <div style={{color :darkMode ?"white":""}}>Bring your ideas to life with stunning and responsive user interfaces. Our frontend development expertise ensures your website delivers a seamless user experience across all devices, focusing on speed, accessibility, and aesthetics.</div>
   </div>
      
</div>


<div className="servicecardmain">
   {/* Frontend Development */}
   <div className="forjustifycenter">

   <div> <Icon
        // onClick={handleLinkClick}
        icon="simple-icons:mongodb"
        width="2em"
        height="2em"
        style={{ color: darkMode ? "#fff" : "#fff" }}
      /></div>
   <div>MERN Stack Development</div>
   <div style={{color :darkMode ?"white":""}}>End-to-end web solutions with the power of the MERN stack. From MongoDB to Express.js, React, and Node.js, we create dynamic, scalable, and high-performance web applications tailored to your needs.</div>
      </div>
</div>


<div className="servicecardmain">
   {/* Frontend Development */}
   <div className="forjustifycenter">

   <div>  <Icon icon="hugeicons:computer-video" width="24" height="24" style={{ color: darkMode ? "#fff" : "#fff" }}
 /></div>
   <div>Video Editing</div>
   <div style={{color :darkMode ?"white":""}}>Craft compelling stories with professional video editing services. Whether for marketing, tutorials, or entertainment, our editors bring your vision to life with precision and creativity.</div>
      </div>
</div>

      
<div className="servicecardmain">
   {/* Frontend Development */}
   <div className="forjustifycenter">

   <div>   <Icon icon="fluent:video-people-32-filled" width="32" height="32"          style={{ color: darkMode ? "#fff" : "#fff" }}
 /></div>
   <div>Picture Editing</div>
   <div style={{color :darkMode ?"white":""}}>Transform your images into masterpieces with our picture editing services. From color correction to retouching, we enhance every detail to make your visuals truly stand out.</div>
      </div>
</div>
     
      
<div className="servicecardmain">
<div className="forjustifycenter">

  <div>
<Icon
  icon="mdi:palette-outline"
  width="2em"
  height="2em"
  style={{ color: darkMode ? "#fff" : "#fff" }}
/></div>
   <div>UI/UX Design</div>
   <div style={{color :darkMode ?"white":""}}>Create user-centric designs that are visually appealing and functional. Our UI/UX design services focus on intuitive navigation, aesthetics, and a user-friendly experience that keeps visitors engaged.</div>
      </div>
</div>
      

<div className="servicecardmain">
<div className="forjustifycenter">

  <div className='icondivtheree'>
  <Icon
        // onClick={handleLinkClick}
        icon="simple-icons:wordpress"
        width="2em"
        height="2em"
        style={{ color: darkMode ? "#fff" : "#FFF" }}
      />
      </div>
   <div>WordPress Development</div>
   <div style={{color :darkMode ?"white":""}}>Build a powerful online presence with custom WordPress development. From themes to plugins, we create tailored solutions that make your website dynamic, secure, and easy to manage.</div>
      </div>
</div>  

</div>

</div>

</> 
 )
}

export default Section3;