import React, { useState, useEffect } from 'react';
import "./BackToTop.css";
import { FaArrowCircleUp } from 'react-icons/fa'; 

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 300px or more
  const checkScrollPosition = () => {
    if (window.scrollY > 550) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <div className="back-to-top" onClick={scrollToTop}>
        <FaArrowCircleUp size={40} color="#fff" />
      </div>
    )
  );
};

export default BackToTop;
