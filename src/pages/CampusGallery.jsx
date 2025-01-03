import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CampusGallery.css'; 
import gallery_1 from "../assets/gallery-1.png"
import gallery_2 from "../assets/gallery-2.png"
import gallery_3 from "../assets/gallery-3.png"
import gallery_4 from "../assets/gallery-4.png"
import gallery_5 from "../assets/gallery-5.jpeg" 
import gallery_6 from "../assets/gallery-6.webp" 
import gallery_7 from "../assets/gallery-7.jpeg" 
import gallery_8 from "../assets/gallery-8.jpeg" 
import gallery_9 from "../assets/gallery-9.jpeg" 
import gallery_10 from "../assets/gallery-10.jpeg" 
import campus_1 from "../assets/campus-1.jpeg" 
import campus_2 from "../assets/campus-2.jpeg" 

const CampusGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="campus-gallery" id='campus-gallery'>
      <h2>Campus Gallery</h2>
      <p>Here are more photos from our campus:</p>
      
      {/* Add gallery images here */}
      <div className="gallery-images">
            <img src={gallery_1} alt="Campus 1" />
            <img src={gallery_2} alt="Campus 2" />
            <img src={gallery_3} alt="Campus 3" />
            <img src={gallery_4} alt="Campus 3" />
            <img src={gallery_5} alt="" />
            <img src={gallery_6} alt="" />
            <img src={gallery_7} alt="" />
            <img src={gallery_8} alt="" />
            <img src={gallery_9} alt="" />
            <img src={gallery_10} alt="" />
            <img src={campus_1} alt="" />
            <img src={campus_2} alt="" />
      </div>
      <button onClick={() => navigate(-1)} className="back-button">
        Go Back
      </button>
    </div>
  );
};

export default CampusGallery;
