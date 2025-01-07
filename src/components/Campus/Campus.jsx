import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = ({ setLoading }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/campus-gallery');
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <div className='campus' id='campus-gallery'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn' onClick={handleNavigation}>
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
