import React, { useState } from "react";
import "./Footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaCommentDots } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import logo from "../../assets/logo.png";

const Footer = () => {
    const [email, setEmail] = useState(""); // State for email input

    const validateEmail = (email) => {
        // Regex for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        // Validate email before proceeding
        if (!validateEmail(email)) {
            toast.error("Invalid email address. Please enter a valid email.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        const formData = new FormData();
        formData.append("email", email);
        formData.append("access_key", "93ab0d11-396b-4fa6-a947-676d7cb60096");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for subscribing!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setEmail(""); // Reset email field
            } else {
                toast.error(`Error: ${data.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit email. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <footer className="footer">
            <ToastContainer /> {/* Add ToastContainer here */}
            {/* Top Section */}
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li>About Edusity</li>
                        <li>Admissions</li>
                        <li>Community</li>
                        <li>Campus Life</li>
                    </ul>
                    <ul>
                        <li>The President</li>
                        <li>Campus Map</li>
                        <li>Library</li>
                        <li>Careers</li>
                    </ul>
                    <ul>
                        <li>Accessibility</li>
                        <li>Ethical Concerns</li>
                        <li>Non-Discrimination</li>
                        <li>Privacy Statement</li>
                    </ul>
                </div>

                <div className="footer-contact">
                    {/* Subscribe to our Newsletter */}
                    <div className="newsletter">
                        <h4>Subscribe to Our Newsletter</h4>
                        <form onSubmit={onSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="footer-icons">
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaInstagram />
                        <FaYoutube />
                        <FaCommentDots />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>Developed by Jedy++</p>
                <p>
                    © 2024 Edusity University. All rights reserved. <br />
                    Rue des Jardins, Cocody, Abidjan, 01 BP 1234, Côte d'Ivoire.  
                    <MdCall className="call-icon" /> +225 07 65 123 456 
                </p>
            </div>
        </footer>
    );
};

export default Footer;
