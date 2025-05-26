import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vanapalli Anusha</h3>
            <p className="text-gray-300 mb-4">
              A passionate Computer Science Engineer with skills in Java, Spring Boot, and web technologies, seeking opportunities to contribute and grow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/AnushaV589" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/anusha-vanapalli-046723306" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="mailto:anushavanapalli035@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
              <a 
                href="tel:+919133508724" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <FiPhone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer inline-block"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer inline-block"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer inline-block"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="text-primary-400 mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">anushavanapalli035@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-primary-400 mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">+91 9133508724</span>
              </li>
              <li className="flex items-start">
                <FiLinkedin className="text-primary-400 mt-1 mr-3 flex-shrink-0" size={18} />
                <a 
                  href="https://www.linkedin.com/in/anusha-vanapalli-046723306" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Vanapalli Anusha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Made with <FiHeart className="text-red-500 mx-1" size={14} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;