import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    console.log("Project ID:", id);  // Check projectId

    if (id) {  // make sure projectId exists
      axios.get(`http://localhost:5005/api/projects/${id}`)
      .then(response => {
        console.log("Response Data:", response.data);  // Check the response data
        setProject(response.data);
      })
      .catch(error => {
        console.error('Error fetching project: ', error);
      });
    }
  }, [id]);

  const navigate = useNavigate();

  const handleDelete = () => {
    // Delete the project using the API
    axios.delete(`http://localhost:5005/api/projects/${id}`)
      .then(() => {
        // Navigate to /projects after successful deletion
        navigate('/projects');
      })
      .catch(err => {
        console.error('Error deleting project:', err);
      });
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ul>
          {project.technologiesUsed.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
      </ul>
      <Link to={`/projects/update/${id}`}>Update</Link>
      <button onClick={handleDelete}>Delete</button>
        {/* Add more fields as necessary */}
    </div>
  );
};

export default ProjectDetails;