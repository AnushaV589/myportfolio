import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const NavLink = ({ to, title, mobile, closeMobileMenu }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={`${
      mobile 
        ? 'block w-full py-3 text-center text-lg' 
        : 'px-4 py-2 hover:text-primary-600 dark:hover:text-primary-400'
    } cursor-pointer font-medium transition-colors duration-300`}
    activeClass={`${mobile ? 'bg-primary-100 dark:bg-gray-700' : 'text-primary-600 dark:text-primary-400'}`}
    onClick={mobile ? closeMobileMenu : undefined}
  >
    {title}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-xl font-bold cursor-pointer"
          >
            <span className="text-primary-600 dark:text-primary-400">Anusha Vanapalli</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="home" title="Home" />
            <NavLink to="about" title="About" />
            <NavLink to="skills" title="Skills" />
            <NavLink to="projects" title="Projects" />
            <NavLink to="education" title="Education" />
            <NavLink to="contact" title="Contact" />
          </div>

          {/* Resume Download Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="/resume.pdf" 
              download="Anusha_Vanapalli_Resume.pdf"
              className="btn btn-primary text-sm"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-gray-800 dark:text-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-16 left-0 w-full h-screen bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center py-8 space-y-2">
          <NavLink to="home" title="Home" mobile={true} closeMobileMenu={closeMenu} />
          <NavLink to="about" title="About" mobile={true} closeMobileMenu={closeMenu} />
          <NavLink to="skills" title="Skills" mobile={true} closeMobileMenu={closeMenu} />
          <NavLink to="projects" title="Projects" mobile={true} closeMobileMenu={closeMenu} />
          <NavLink to="education" title="Education" mobile={true} closeMobileMenu={closeMenu} />
          <NavLink to="contact" title="Contact" mobile={true} closeMobileMenu={closeMenu} />

          {/* Resume Download Button - Mobile */}
          <a 
            href="/resume.pdf" 
            download="resume.pdf"
            className="btn btn-primary mt-6"
            onClick={closeMenu}
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
