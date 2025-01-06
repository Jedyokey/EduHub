import React from "react";
import "./Card.css";
import { FaStar, FaStarHalfAlt, FaRegStar, FaUserAlt, FaHeart } from "react-icons/fa";

const Card = ({ 
    title, description, image, professor, rating, likes, students 
    }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-contents"> 
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="card-footer">
            <div className="professor-info">
                <FaUserAlt className="professor-icon" />
                <span>{professor.name}</span> 
                <span className="professor-title">/ {professor.title}</span>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <FaUserAlt /> <span>{students}</span>
                </div>
                <div className="stat">
                    <FaHeart /> <span>{likes}</span>
                </div>
                <div className="rating">
                    {Array.from({ length: 5 }).map((_, index) => {
                        if (rating > index + 0.5) return <FaStar key={index} />;
                        else if (rating > index) return <FaStarHalfAlt key={index} />;
                        return <FaRegStar key={index} />;
                    })}
                </div>
            </div>
      </div>
    </div>
  );
};

export default Card;
