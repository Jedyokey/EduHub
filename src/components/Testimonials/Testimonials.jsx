import React, { useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import user_5 from '../../assets/user-5.jpg';
import user_6 from '../../assets/user-6.png';

const testimonialsData = [
  {
    id: 1,
    name: 'Emily Williams',
    location: "Edusity, Côte d'Ivoire",
    image: user_1,
    feedback:
      "My journey at Edusity has been transformative. The culturally diverse environment and supportive faculty have broadened my perspectives and equipped me with skills essential for my career.",
  },
  {
    id: 2,
    name: 'William Jackson',
    location: 'Edusity, USA',
    image: user_2,
    feedback:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    id: 3,
    name: 'Sarah Joseph',
    location: 'Edusity, Nigeria',
    image: user_3,
    feedback:
      "Participating in undergraduate research at Edusity was a highlight of my academic experience. The state-of-the-art facilities and guidance from experienced faculty ignited my passion for innovation and discovery.",
  },
  {
    id: 4,
    name: 'Michelle James',
    location: "Edusity, Côte d'Ivoire",
    image: user_4,
    feedback:
      "Studying at Edusity has been an incredible experience. The faculty's dedication to student success and the collaborative atmosphere empowered me to excel academically and personally.",
  },
  {
    id: 5,
    name: 'Samuel Jackson',
    location: 'Edusity, South Africa',
    image: user_5,
    feedback:
      "Studying at Edusity has been an incredible experience. The faculty's dedication to student success and the collaborative atmosphere empowered me to excel academically and personally.",
  },
  {
    id: 6,
    name: 'Steven Michaels',
    location: 'Edusity, USA',
    image: user_6,
    feedback:
      "The comprehensive curriculum and hands-on learning opportunities at Edusity prepared me for the challenges of the professional world. The mentorship from professors  were instrumental in securing my position at Edusity.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonialsData.length ? 0 : prevIndex + 2
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 2 : prevIndex - 2
    );
  };

    // const visibleSlides = 2;
    // const slideWidth = 100 / visibleSlides;
    // style={{
    //     transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
    //   }}

  return (
    <div className="testimonials">
      <button onClick={handleBack} className="back-btn">
        <img src={back_icon} alt="Back" />
      </button>
      <div className="slider">
            <div
                className="slides" 
                style={{
                    transform: `translateX(-${currentIndex * 50}%)`,
                }}
            >
                {testimonialsData.map(({ id, name, location, image, feedback }) => (
                    <div className="slide" key={id}>
                        <div className="user-info">
                            <img src={image} alt={name} />
                            <div>
                                <h3>{name}</h3>
                                <span>{location}</span>
                            </div>
                            {/* <p>{feedback}</p> */}
                        </div>
                        <p>{feedback}</p>
                    </div>
                ))}
            </div>
      </div>
      <button onClick={handleNext} className="next-btn">
        <img src={next_icon} alt="Next" />
      </button>
    </div>
  );
};

export default Testimonials;
