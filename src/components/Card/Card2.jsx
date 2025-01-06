import React from 'react';
import { FaCalendarAlt, FaEye, FaCommentDots } from 'react-icons/fa';
import './Card2.css'; 

const Card = ({ image, title, date, views, likes, description }) => {
  return (
    <div className="news-card">
        <div className="news-card-image">
            <img src={image} alt={title} />
        </div>

      <div className="card-content">
            <h3>{title}</h3>
            <div className="card-meta">
                <span><FaCalendarAlt /> {date}</span>
                <span><FaEye /> {views}</span>
                <span><FaCommentDots /> {likes}</span>
            </div>
            <p>{description}</p>
            <button className="btn read-more">Read More</button>
      </div>
    </div>
  );
};

export default Card;
