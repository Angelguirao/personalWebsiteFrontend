import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogPostDetails = () => {
  const { id } = useParams();  // Extract ID from URL parameters
  const [blogPost, setBlogPost] = useState(null);  // Initialize state for blogPost
  const navigate = useNavigate();  // Hook for programmatically navigating

  useEffect(() => {
    console.log("Blog Post ID:", id);  // Log blogPostId

    if (id) {  // Check if id exists
      axios.get(`http://localhost:5005/api/posts/${id}`)
      .then(response => {
        console.log("Response Data:", response.data);  // Log response data
        setBlogPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog post: ', error);
      });
    }
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5005/api/posts/${id}`)
      .then(() => {
        navigate('/blog');
      })
      .catch(err => {
        console.error('Error deleting blog post:', err);
      });
  };

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post-details">
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
      <p>Date Published: {new Date(blogPost.datePublished).toLocaleDateString()}</p>
      <p>Last Updated: {new Date(blogPost.lastUpdated).toLocaleDateString()}</p>
      <ul>
          {blogPost.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
      </ul>
      <Link to={`/blogPosts/update/${id}`}>Update</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogPostDetails;
