import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="" className='about-img' />
          <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />
        </div> 

        <div className="about-right">
            <h3>ABOUT UNIVERSIY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>At Edusity, we are dedicated to empowering learners of all ages by providing accessible, high-quality educational resources. Our mission is to foster a love for learning, encourage curiosity, and support personal and professional growth. </p>
            <p>Our team comprises passionate educators, industry professionals, and technology enthusiasts who collaborate to create engaging and informative content. We believe that education is a lifelong journey, and our goal is to make this journey as enriching and enjoyable as possible.</p>
            <p>We understand the challenges that learners face in today's fast-paced world. Therefore, we are committed to continuously updating and expanding our offerings to ensure they remain relevant and impactful. </p>
        </div>
      
    </div>
  )
}

export default About
