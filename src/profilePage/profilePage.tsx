import React from 'react';
import ProfileBanner from './ProfileBanner';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const skills = [
    "Power BI",
    "HTML",
    "CSS",
    "Tableau",
    "SQL",
    "AWS",
    "Leadership",
    "Confidence",
    "Communication Skills",
  ];

  const projects = [
    {
      title: "React Weather App",
      description: "A simple React app that shows the weather for any city using OpenWeatherMap API.",
      link: "https://github.com/vanshika-kaushik/react-weather-app",
      thumbnail: "https://via.placeholder.com/200x150?text=Weather+App",
    },
    {
      title: "ToDo List App",
      description: "A basic Todo List application built with React and local storage.",
      link: "https://github.com/vanshika-kaushik/todo-list-app",
      thumbnail: "https://via.placeholder.com/200x150?text=Todo+App",
    },
    {
      title: "Movie Search App",
      description: "Search movies using the TMDB API and display results with React components.",
      link: "https://github.com/vanshika-kaushik/movie-search-app",
      thumbnail: "https://via.placeholder.com/200x150?text=Movie+App",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with HTML, CSS, and JavaScript.",
      link: "https://github.com/vanshika-kaushik/demo-portfolio",
      thumbnail: "https://via.placeholder.com/200x150?text=Portfolio",
    },
    {
      title: "Expense Tracker",
      description: "Track your daily expenses with this simple React-based expense tracker.",
      link: "https://github.com/vanshika-kaushik/expense-tracker",
      thumbnail: "https://via.placeholder.com/200x150?text=Expense+Tracker",
    },
  ];

  return (
    <div className="profile-page">
      <ProfileBanner />

      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.title} className="project-card">
              <img src={proj.thumbnail} alt={proj.title} />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
