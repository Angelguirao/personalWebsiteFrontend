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

import ProjectList from './components/Projects/ProjectList';
import ProjectDetails from './components/Projects/ProjectDetails';
import NewProject from './components/Projects/NewProject';
import UpdateProject from './components/Projects/UpdateProject';
import DeleteProject from './components/Projects/DeleteProject';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/list" element={<ProjectList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/projects/update/:id" element={<UpdateProject />} />
        <Route path="/projects/delete/:id" element={<DeleteProject />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;

