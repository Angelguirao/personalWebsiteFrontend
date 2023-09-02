import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPostsList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Make an API call to fetch blog posts
    axios.get('http://localhost:5005/api/posts')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching blog posts:', error);
      });
  }, []);

  return (
    <div className="blog-posts-list">
      <h1>Blog Posts</h1>
      {blogPosts.map(blogPost => (
        <div key={blogPost._id} className="blog-post-card">
          <h2>{blogPost.title}</h2>
          <p>{blogPost.content.substring(0, 100)}...</p> {/* Short preview of the content */}
          <p>Date Published: {new Date(blogPost.datePublished).toLocaleDateString()}</p>
          {/* Button to navigate to BlogPostDetails */}
          <Link to={`/blogPosts/${blogPost._id}`}>
            <button>View Details</button>
          </Link>
          {/* Add more fields as necessary */}
        </div>
      ))}
    </div>
  );
};

export default BlogPostsList;
