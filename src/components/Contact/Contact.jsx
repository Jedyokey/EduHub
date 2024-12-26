import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png" 
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "93ab0d11-396b-4fa6-a947-676d7cb60096");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach us through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Admin@Edusity.dev</li>
                <li><img src={phone_icon} alt="" />+225 07 65 123 456</li>
                <li>
                    <img src={location_icon} alt="" />
                    Rue des Jardins, Cocody, Abidjan, 01 BP 1234, Côte d'Ivoire.
                </li>
            </ul>
        </div>

        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" id="" cols="30" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>
                    Submit now <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span> 
        </div>
      
    </div>
  )
}

export default Contact
