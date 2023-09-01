import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

const Home = () => <div>Home Page</div>;
const Bio = () => <div>Bio Page</div>;
const SoftwareProjects = () => <div>Software Projects Page</div>;
const BlogPosts = () => <div>Blog Posts Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/software-projects" element={<SoftwareProjects />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;

