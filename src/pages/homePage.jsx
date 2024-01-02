import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../assets/Navbar.jsx'
import '../styles/HomePage.css';

function HomePage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("http://localhost:3001/projects");
                setProjects(response.data);
            } catch (error) {
                console.error("Error: ", error);
            };
        };

        fetchProjects();
    }, []);


    return (
        <>
            <Navbar />
            <div className = "container">
                <header>
                <h1>Aytan Novruzlu - Portfolio</h1>
                <p>Welcome to my portfolio showcasing my projects!</p>
                </header>
                
                <section>
                <h2>General Introduction</h2>
                <p>
                    Hello! I am passionate about technology and enjoy working on various projects. This portfolio
                    provides an overview of the projects I have undertaken.
                </p>
                </section>

                <section>
                <h2>Projects</h2>
                <ol>

                    <li>
                        <strong>1. Personal Digital Card</strong> 
                        <div className="line">-</div>
                        <a href="https://github.com/novruzluaytan/web-and-mobile" className='linkGithub'> GitHub Repository</a>

                    </li>


                    <li>
                        <strong>2. Fetching data from an API </strong> 

                        <div className="line">-</div>

                        <a href="https://github.com/novruzluaytan/wm-assignment2" className='linkGithub'>  GitHub Repository</a>

                    </li>

                    <li>
                        <strong>3. Flashcard App </strong> 
                        <div className="line">-</div>
                        <a href="https://github.com/novruzluaytan/assignment3---flashcard-app" className='linkGithub'>  GitHub Repository</a>

                    </li>

                </ol>
                </section>

            </div>
        </>
    );
};

export default HomePage;