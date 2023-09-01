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
      </Routes>
      <Footer />
      </div>
  );
}

export default App;

