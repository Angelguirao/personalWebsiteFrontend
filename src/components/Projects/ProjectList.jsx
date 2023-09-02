import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Make an API call to fetch projects
    axios.get('http://localhost:5005/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching projects:', error);
      });
  }, []);

  return (
    <div className="project-list">
      <h1>Software Projects</h1>
      {projects.map(project => (
        <div key={project.id} className="project-card">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* Button to navigate to ProjectDetails */}
        <Link to={`/projects/${project._id}`}>
              <button>View Details</button>
            </Link>
        {/* Add more fields as necessary */}
      </div>
      ))}
    </div>
  );
};

export default ProjectList;
