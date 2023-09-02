import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBlogPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: ''  // Add tags here as a comma-separated string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert tags from a comma-separated string to an array of strings
    const finalData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim())
      };

    axios.post('http://localhost:5005/api/posts', finalData)
      .then(response => {
        console.log('Blog post created:', response.data);
        navigate(`/blogPosts/${response.data._id}`);
      })
      .catch(error => {
        console.error('Error creating blog post:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} placeholder="Title" />
      <textarea name="content" onChange={handleChange} placeholder="Content"></textarea>
      <input name="tags" onChange={handleChange} placeholder="Tags (comma separated)" />
      <button type="submit">Create</button>
    </form>
  );
};

export default NewBlogPost;
