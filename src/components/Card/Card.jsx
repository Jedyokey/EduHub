import React from "react";
import "./Card.css";
import { FaStar, FaStarHalfAlt, FaRegStar, FaUserAlt, FaHeart } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

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
              <div className="professor-image-container">
                <img src={professor.image} alt={professor.name} className="professor-image" />
              </div>
              <div className="professor-details">
                <span className="professor-name">{professor.name}</span>
                <span className="professor-title"> / {professor.title}</span>
              </div>
            </div>
            <div className="card-stats">
                <div className="stat">
                <MdPeople /> <span>{students}</span>
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
