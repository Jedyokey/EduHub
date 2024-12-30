import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Hero.css"
import darkArrow from "../../assets/dark-arrow.png"

const Hero = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.target) {
      const element = document.getElementById(location.state.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);
  
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and, experiences needed to excel in the dynamic field of education.</p>
            <button className='btn'>
                Explore more <img src={darkArrow} alt="" />
            </button>
        </div>
      
    </div>
  )
}

export default Hero
