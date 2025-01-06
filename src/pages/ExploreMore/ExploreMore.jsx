import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import './ExploreMore.css';
import { coursesData } from '../../data';
import Testimonials from '../../components/Testimonials/Testimonials';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import Card2 from "../../components/Card/Card2"
import { cardData } from "../../data";
import campus_6 from "../../assets/campus-6.jpeg";
import white_arrow from "../../assets/white-arrow.png";


const ExploreMore = () => {
  const navigate = useNavigate();
  const [countersVisible, setCountersVisible] = useState(false);

  const { ref: counterRef, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
    triggerOnce: true, // Only trigger once
  });

  if (inView && !countersVisible) {
    setCountersVisible(true);
  }

  return (
    <div className="explore-more">
      {/* Explore More Hero Section */}
      <section className="hero-explore-more">
        <div className="hero-content">
          <h1>Discover the Future of Education</h1>
          <p>Join us on a journey of learning, growth, and success.</p>
          <button onClick={() => navigate('/apply-now')} className="btn primary-btn">
            Apply Now
          </button>
        </div>
      </section>

      {/* About the School */}
      <section className="about-school">
        <div className="about-school-left">
          <h2>Provide Best Education Services For You</h2>
          <p>
            At Edusity, our mission is to empower students with the knowledge, skills, and experiences they need to excel in a dynamic and evolving world.
          </p>
          <p>
            Established in 1990, our institution has been at the forefront of academic excellence, fostering a culture of innovation and inclusion.
          </p>
          <button className="btn dark-nav">Learn Now</button>
        </div>
        {/* Placeholder for image */}
        <div className="image-placeholder">
          <img src={campus_6} alt="" />
        </div>
      </section>

      {/* Counter Section */}
      <section ref={counterRef} className="counter">
        <div className="figures">
          <div>
            <span>
              {countersVisible && <CountUp start={0} end={50} duration={4} suffix="+" />}
            </span>
            <span>Teachers</span>
          </div>
          <div>
            <span>
              {countersVisible && <CountUp start={150} end={500} duration={4} suffix="+" />}
            </span>
            <span>Students</span>
          </div>
          <div>
            <span>
              {countersVisible && <CountUp start={0} end={50} duration={4} suffix="+" />}
            </span>
            <span>Courses</span>
          </div>
          <div>
            <span>
              {countersVisible && <CountUp start={20} end={100} duration={4} suffix="+" />}
            </span>
            <span>Countries</span>
          </div>
        </div>
      </section>

        {/* Card Section (Courses) */}
        <section className="courses-section">
            <h2>Explore Our Courses</h2>
            <p>There are many variations of passages of Lorem Ipsum</p>
            <div className="courses-grid">
                {coursesData.map((course) => (
                    <Card
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        image={course.image}
                        professor={course.professor}
                        rating={course.rating}
                        likes={course.likes}
                        students={course.students}
                    />
                ))}
            </div>

            <button onClick={() => navigate('/courses')} className="btn dark-nav">
                <span>View All Courses</span><img src={white_arrow} alt="" />
            </button>
        </section>

        {/* Testimonials Section */}
        <section className='testimonial-container student-testimonials'>
            <div className="testimonial-title">
                <Title title="Student Testimonials" />
            </div>
            <Testimonials />
        </section>

        {/* Latest News Cards Section */}
        <section className="news-cards-section">
            <h2>Latest News</h2>
            <p>There are many variations of passages of Lorem Ipsum</p>
            <div className="news-cards-container">
                {cardData.map((card, index) => (
                    <Card2
                    key={index}
                    image={card.image}
                    title={card.title}
                    date={card.date}
                    views={card.views}
                    likes={card.likes}
                    description={card.description}
                    />
                ))}
            </div>
        </section>


        {/* Call to Action */}
        <section className="call-to-action">
            <h2>Ready to Join Us?</h2>
            <p>Take the first step toward an exciting future at Edusity.</p>
            <button 
                onClick={() => navigate('/apply-now')} className="btn primary-btn">
                    Apply Now
            </button>
       </section>

    </div>
  );
};

export default ExploreMore;




//       {/* Programs and Courses */}
//       <section className="programs">
//             <h2>Programs We Offer</h2>
//             <ul>
//                 <li>Undergraduate Programs</li>
//                 <li>Graduate Programs</li>
//                 <li>Professional Certifications</li>
//                 <li>Workshops and Seminars</li>
//             </ul>
//             {/* Placeholder for video */}
//             <div className="video-placeholder">
//                 {/* [Add a video introduction to your programs here] */}
//                 <video src={welcome_video}></video>
//             </div>
//       </section>

//       {/* Student Life */}
//       <section className="student-life">
//             <h2>Life at Our Campus</h2>
//             <p>
//                 Our vibrant campus life offers endless opportunities for students to engage, grow, and thrive.
//             </p>
//             <ul>
//                 <li>Join over 50 clubs and organizations</li>
//                 <li>Participate in annual cultural and sports events</li>
//                 <li>Enjoy state-of-the-art recreational facilities</li>
//             </ul>
//             {/* Placeholder for image gallery */}
//             <div className="image-gallery-placeholder">
//                 {/* [Add a gallery of student life images here] */}
//                 <img src={student_life_1} alt="" />
//                 <img src={student_life_2} alt="" />
//                 <img src={student_life_3} alt="" />
//                 <img src={student_life_4} alt="" /> 
//             </div>
//       </section>

//       {/* Facilities */}
//       <section className="facilities">
//             <h2>Our Facilities</h2>
//             <p>
//                 From modern laboratories to spacious libraries, our facilities are designed to support your academic and personal growth.
//             </p>
//             <ul>
//                 <li>Advanced Science and Computer Labs</li>
//                 <li>Well-stocked Library with Digital Access</li>
//                 <li>Sports Complex and Fitness Center</li>
//                 <li>Comfortable Student Housing</li>
//             </ul>
//             {/* Placeholder for facility images */}
//             <div className="facility-images-placeholder">
//                 {/* [Add images of facilities here] */}
//                 <img src={facility_1} alt="" />
//                 <img src={facility_2} alt="" />
//                 <img src={facility_3} alt="" />
//                 <img src={facility_4} alt="" />
//             </div>
//       </section>

//       {/* Call-to-Action */}
//       <section className="call-to-action">
//         <h2>Ready to Join Us?</h2>
//         <p>Take the first step toward an exciting future at [School Name].</p>
//         <button onClick={() => navigate('/apply-now')} className="btn primary-btn">Apply Now</button>
//       </section>
//     </div>
//   );
// };

// export default ExploreMore;
