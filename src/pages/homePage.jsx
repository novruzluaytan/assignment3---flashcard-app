import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
import '../assets/navbar.jsx';

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
            <navbar />
            <container>
                <h1>Your Name - Portfolio</h1>
                <p>Welcome to my portfolio showcasing my projects!</p>
                <h2>General Introduction</h2>
                <p>
                    Hello! I am passionate about technology and enjoy working on various projects. This portfolio
                    provides an overview of the projects I have undertaken.
                </p>

                <h2>Projects</h2>
                <ul>

                    <li>
                        <strong>Project Name 1</strong> - Brief description of the project.

                        <a href="https://github.com/your-username/project1">GitHub Repository</a>

                    </li>


                    <li>
                        <strong>Project Name 2</strong> - Brief description of the project.

                        <a href="https://github.io/your-username/project2">GitHub Pages</a>

                    </li>

                </ul>

            </container>
        </>
    );
};

export default HomePage;