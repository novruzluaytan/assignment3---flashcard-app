import React from 'react';
import Navbar from '../assets/Navbar.jsx'
import '../styles/contact.css'

function Contact () {
    return (
        <>
            <Navbar />
            <div className="contactMe">
                <h1>Contact Me</h1>
                <p>
                    Feel free to reach out through the contact me page for any inquiries, collaborations, or just to say hello!
                </p>
            </div>
        </>
    );
};

export default Contact;
