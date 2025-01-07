import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";

const Hero = ({ setLoading }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/explore-more');
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and, experiences needed to excel in the dynamic field of education.</p>
        <button className='btn' onClick={handleNavigation}>
          Explore more <img src={darkArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
