import React from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const validatePhoneNumber = (phone) => {
    // Adjust for your phone format
    const phoneRegex = /^(?:\+?[1-9]\d{1,14}|\d{7,15})$/; 
    return phoneRegex.test(phone);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Validate input fields
    if (!name.trim()) {
      toast.error("Name is required!");
      return;
    }
    if (!validatePhoneNumber(phone)) {
      toast.error("Please enter a valid phone number!");
      return;
    }
    if (!message.trim()) {
      toast.error("Message is required!");
      return;
    }

    formData.append("access_key", "93ab0d11-396b-4fa6-a947-676d7cb60096");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <div className="contact">
      {/* Toast Container */}
      <ToastContainer />

      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach us through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Admin@Edusity.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +225 07 65 123 456
          </li>
          <li>
            <img src={location_icon} alt="" />
            Rue des Jardins, Cocody, Abidjan, 01 BP 1234, Côte d'Ivoire.
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
