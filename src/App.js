import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import MySkillsPage from './components/MySkills/Skills';
import ProjectsPage from './components/Projects/Projects';
import ContactPage from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <NavigationBar/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/myskills" element={<MySkillsPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default App;
