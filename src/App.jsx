import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Check for user's preferred color scheme
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
  }, []);

  // Update dark mode in localStorage and document class
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} />
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;