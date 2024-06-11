import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About';
import BlogPost from './components/BlogPost';
import BlogList from './components/BlogList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postId" element={<BlogPost />} />
        <Route path="/ferMatha" element={<Navigate to="/" />} /> {/* Redirect /ferMatha to / */}
      </Routes>
    </Router>
  );
};

export default App;
