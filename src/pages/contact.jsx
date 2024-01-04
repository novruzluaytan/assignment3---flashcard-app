import React, { useState } from 'react';
import ContactStyle from '../styles/contact.css';
import Navbar from '../assets/Navbar.jsx';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        content: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Message sent successfully!');
                // Reset form data to empty values
                setFormData({
                    subject: '',
                    email: '',
                    content: '',
                });
            } else {
                console.error('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <>
            <div className='main'>
                <h1>Contact Me</h1>
                <p>
                    Feel free to reach out through the contact me page for any inquiries, collaborations, or just to say hello!
                </p>

                <form onSubmit={handleSubmit} className='form-contact'>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        className='form-input'
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        className='form-input'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="content">Message:</label>
                    <textarea
                        className='form-input textarea'
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default ContactPage;
