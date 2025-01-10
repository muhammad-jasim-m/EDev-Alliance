import React, { useEffect, useRef, useState } from "react";
import "./Section4.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import mazen from '../../Asserts/img/mazen.png';
import goldenddream from "../../Asserts/img/goldendream.png";
import Colloways from "../../Asserts/img/p7.png";
import Shurah from "../../Asserts/img/p1.png";
import Projex from "../../Asserts/img/Sign-Up.png";
import Moosas from "../../Asserts/img/moosa.png";
import Leuito from "../../Asserts/img/leuito.png";
import { useDarkMode } from "../../Context/Darkcontext";
import { motion } from "framer-motion"; // Import Framer Motion

const Section4 = () => {

  const { darkMode } = useDarkMode();
  const portfolioRef = useRef(null);

  const transition = {
    duration: 0.8,
    type: "spring",
  };

  return (
    <div className="portfolio" id="projects" ref={portfolioRef} style={{ background: darkMode ? "black" : "" }}>
      {/* heading */}
      <div className="recentprojects" style={{ color: darkMode ? "#636ae8" : "#636ae8" }}>Recent Projects</div>

      {/* slider */}
      <Swiper
        grabCursor={true}
        loop={true}
        className="portfolio-slider"
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1, // Show 1 slide on small screens
          },
          768: {
            slidesPerView: 2, // Show 2 slides on medium screens
          },
          1024: {
            slidesPerView: 3, // Show 3 slides on large screens
          },
        }}
      >

        <SwiperSlide>
          <a href="https://mazen.tv/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={mazen}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />

            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://goldendreamtravel.ae/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={goldenddream}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />

            </div>
          </a>
        </SwiperSlide>


        <SwiperSlide>
          <a href="https://collabways.com/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={Colloways}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />

            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://kashanafzl.github.io/Shruh/User-Management.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="slide-content">
              <motion.img
                src={Shurah}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />

            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={Projex}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />

            </div>
          </a>

        </SwiperSlide>







        <SwiperSlide>
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={Leuito}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />

            </div>
          </a>
        </SwiperSlide>









        <SwiperSlide>
          <div className="slide-content">
            <motion.img
              src={Moosas}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={transition}
            />

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Section4;
