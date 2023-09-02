import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlogPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [] // Initialize to empty array
  });

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch existing blog post details and populate form
  useEffect(() => {
    axios.get(`http://localhost:5005/api/posts/${id}`)
      .then(response => {
        const blogPost = response.data;
        setFormData({
          title: blogPost.title,
          content: blogPost.content,
          tags: blogPost.tags
        });
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
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
    axios.put(`http://localhost:5005/api/posts/${id}`, formData)
      .then(() => {
        navigate('/blogPosts'); // Navigate to blog posts list
      })
      .catch(error => {
        console.error('Error updating blog post:', error);
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
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <input
        name="tags"
        value={formData.tags.join(', ')} // Convert array to string for the input
        onChange={e => handleChange({ target: { name: 'tags', value: e.target.value.split(', ') } })} // Convert string back to array
        placeholder="Tags (comma separated)"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateBlogPost;
