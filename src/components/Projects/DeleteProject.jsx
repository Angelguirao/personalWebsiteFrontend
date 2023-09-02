import React from 'react';
import axios from 'axios';

const DeleteProject = ({ projectId }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5005/api/projects/${projectId}`)
      .then(response => {
        console.log('Project deleted:', response.data);
      })
      .catch(error => {
        console.error('Error deleting project:', error);
      });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteProject;