import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Bio from './components/Bio/Bio';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

import NewProject from './components/Projects/NewProject';
import ProjectList from './components/Projects/ProjectList';
import ProjectDetails from './components/Projects/ProjectDetails';
import UpdateProject from './components/Projects/UpdateProject';

import NewBlogPost from './components/Blog/NewBlogPost';
import BlogPostsList from './components/Blog/BlogPostsList';
import BlogPostDetails from './components/Blog/BlogPostDetails';
import UpdateBlogPost from './components/Blog/UpdateBlogPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/projects/list" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects/update/:id" element={<UpdateProject />} />
        <Route path="/blogPosts/new" element={<NewBlogPost />} />
        <Route path="/blogPosts/list" element={<BlogPostsList />} />
        <Route path="/blogPosts/:id" element={<BlogPostDetails />} />
        <Route path="/blogPosts/update/:id" element={<UpdateBlogPost />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;

