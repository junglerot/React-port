import React, { useState, useEffect } from 'react';
import '../Gallery.scss';
import Healthcare from '../images/Portfolio/App_ui.png'


function Gallery() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [hover, setHover] = useState(false);
    const tags = ['all', 'Javascript', "ReactJS", "UI/UX", "Java", "NodeJS", "Firebase", "MongoDB", "Spring boot"];
    const portfolio = [
        {
            title: "MIOLA PFE",
            stack: "Full Stack Spring/ReactJS",
            image: Healthcare,
            category: ['all', 'Java EE', 'Spring boot', 'Spring Security', 'ReactJS', 'PostgreSQL', 'Git'],
            description: "Une plateforme de faire le suivi, l'accompagnement et l'encadrement des etudiants pendant leurs stages de PFE.",
            link: 'https://miolapfe.herokuapp.com ',
        },
        {
            title: "React Portfolio",
            stack: "ReactJS",
            image: Healthcare,
            category: ['all', 'ReactJS'],
            description: "Une plateforme de faire le suivi, l'accompagnement et l'encadrement des etudiants pendant leurs stages de PFE.",
            link: 'https://github.com/ilyasstrh/React_Portfolio',
        },
        {
            title: 'Food delivery system',
            stack: "JAVA Desktop",
            image: Healthcare,
            category: ['all', 'Java', 'JavaFX', 'Maven', 'Git'],
            description: "The main purpose of our application is to allow users to minimize travel time to restaurants and enjoy their home food in a short time by viewing the progress of their order, thus facilitating the task of order management for restaurants, thus offering an optimal path for deliveries, with several IoT-based functionalities.",
            link: 'https://github.com/ilyasstrh/FOOD_SYSTEM',
        },
        {
            title: 'Healthcare Mobile App',
            stack: "Android",
            image: Healthcare,
            category: ['all', 'Android', 'Gradle', 'Firebase', 'Firestore', 'Git', 'UI/UX'],
            description: "A mobile application that facilitates making appointments and monitoring patients",
            link: 'https://github.com/ilyasstrh/Health_Care_App',
        },
        {
            title: 'Online Store',
            stack: "MongoDB/Express/ReactJS/NodeJS",
            image: Healthcare,
            category: ['all', 'ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Mongoose', 'UI/UX'],
            description: "An online car rental and management platform",
            link: 'https://github.com/ilyasstrh/OnlineStore',
        },
        {
            title: 'Car rental management',
            stack: "PHP/MySQL",
            image: Healthcare,
            category: ['all', 'PHP', 'Javascript', 'HTML', 'CSS', 'MySQL'],
            description: "An online car rental and management platform",
        },
    ];

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div>
            <div id="filter">
                <button className="btn btn-project">
                    <a active={filter === 'all'} onClick={() => setFilter('all')}>All</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'Javascript'} onClick={() => setFilter('Javascript')}>Javascript</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'ReactJS'} onClick={() => setFilter('ReactJS')}>ReactJS</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'UI/UX'} onClick={() => setFilter('UI/UX')}>UI/UX</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'Java'} onClick={() => setFilter('Java')}>Java</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'NodeJS'} onClick={() => setFilter('NodeJS')}>NodeJS</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'Firebase'} onClick={() => setFilter('Firebase')}>Firebase</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'MongoDB'} onClick={() => setFilter('MongoDB')}>MongoDB</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'Spring boot'} onClick={() => setFilter('Spring boot')}>Spring boot</a>
                </button>
            </div>
            <div class="image-grid">
                {projects.map(item => item.filtered === true ? (
                    <div className="box" key={item.title} >
                        <div className="grid-image">
                            <img src={item.image} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
                        </div>
                        <div className={hover ? 'hidden' : 'display-content'}>
                            <h2>{item.title}</h2>
                            <p>{item.stack}</p>
                            <button className="btn hero-btn">
                                <a href={item.link} target="_blank">Learn more</a>
                            </button>
                        </div>
                    </div>
                ) : '')}
            </div>
        </div>
    );
}

export default Gallery;