import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:category" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;