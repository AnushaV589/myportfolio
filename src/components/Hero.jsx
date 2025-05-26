import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent-200/30 dark:bg-accent-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in"
            data-aos="fade-up"
          >
            Hello, I'm <span className="text-primary-600 dark:text-primary-400">Vanapalli Anusha</span>
          </h1>
          
          <h2 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Computer Science Engineer
          </h2>
          
          <p 
            className="text-lg max-w-3xl mb-10 text-gray-700 dark:text-gray-300"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Seeking a challenging role in a dynamic and innovative organization where I can 
            apply my engineering and programming skills to contribute to organizational growth 
            while enhancing my knowledge by exploring new technologies.
          </p>
          
          <div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
            >
              Contact Me
            </Link>
            
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-outline"
            >
              View Projects
            </Link>
          </div>
          
          <div 
            className="flex space-x-6 text-gray-600 dark:text-gray-300"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            <a 
              href="https://github.com/anushavanapalli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/anusha-vanapalli-046723306" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            
            <a 
              href="mailto:anushavanapalli035@gmail.com" 
              className="transform transition-transform hover:scale-110 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;