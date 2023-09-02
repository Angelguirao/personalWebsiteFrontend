import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologiesUsed: [] // Initialize to empty array
    // Add more fields as necessary
  });

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch existing project details and populate form
  useEffect(() => {
    axios.get(`http://localhost:5005/api/projects/${id}`)
      .then(response => {
        const project = response.data;
        setFormData({
          title: project.title,
          description: project.description,
          technologiesUsed: project.technologiesUsed
        });
      })
      .catch(error => {
        console.error('Error fetching project:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5005/api/projects/${id}`, formData)
      .then(() => {
        navigate('/projects'); // Navigate to projects list
      })
      .catch(error => {
        console.error('Error updating project:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="technologiesUsed"
        value={formData.technologiesUsed.join(', ')} // Convert array to string for the input
        onChange={e => handleChange({ target: { name: 'technologiesUsed', value: e.target.value.split(', ') } })} // Convert string back to array
        placeholder="Technologies Used (comma separated)"
      />
      {/* Add more fields as necessary */}
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProject;
