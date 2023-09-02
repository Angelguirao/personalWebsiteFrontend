import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologiesUsed: ''  // Add technologiesUsed here as a comma-separated string
    // Add more fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert technologiesUsed from a comma-separated string to an array of strings
    const finalData = {
        ...formData,
        technologiesUsed: formData.technologiesUsed.split(',').map(item => item.trim())
      };

    axios.post('http://localhost:5005/api/projects', finalData)
      .then(response => {
        console.log('Project created:', response.data);
    navigate(`/projects/${response.data._id}`);  // Navigate to ProjectDetails page for the new project
      })
      .catch(error => {
        console.error('Error creating project:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} placeholder="Title" />
      <input name="description" onChange={handleChange} placeholder="Description" />
      <input name="technologiesUsed" onChange={handleChange} placeholder="Technologies Used (comma separated)" />
      {/* Add more fields as necessary */}
      <button type="submit">Create</button>
    </form>
  );
};

export default NewProject;
