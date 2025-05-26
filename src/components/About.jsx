import React from 'react';
import { FiUser, FiMapPin, FiCalendar, FiGlobe, FiMusic, FiHeart } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Profile Image */}
          <div 
            className="flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white dark:border-gray-700 shadow-lg">
                <img 
                  src="profile.jpeg" 
                  alt="Anusha Vanapalli"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Background accent */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-primary-200 dark:bg-primary-900/40 rounded-full blur-md"></div>
            </div>
          </div>
          
          {/* About content */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Computer Science Engineer
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a Computer Science graduate from Rajiv Gandhi University of Knowledge Technologies with a strong foundation in programming and web technologies. I'm passionate about solving complex problems and creating efficient, user-friendly applications.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My objective is to secure a challenging role in a dynamic organization where I can leverage my technical skills in Java, Spring Boot, and web technologies to contribute meaningfully while continuing to learn and grow professionally.
            </p>
            
            {/* Personal details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FiUser className="text-primary-600 dark:text-primary-400 mr-3" size={20} />
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Name</span>
                  <p className="font-medium">Vanapalli Anusha</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiCalendar className="text-primary-600 dark:text-primary-400 mr-3" size={20} />
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</span>
                  <p className="font-medium">12-09-2002</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiMapPin className="text-primary-600 dark:text-primary-400 mr-3" size={20} />
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Location</span>
                  <p className="font-medium">Hyderabad, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiGlobe className="text-primary-600 dark:text-primary-400 mr-3" size={20} />
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Languages</span>
                  <p className="font-medium">English, Telugu</p>
                </div>
              </div>
            </div>
            
            {/* Hobbies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Hobbies</h4>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <FiHeart className="mr-2 text-primary-600 dark:text-primary-400" size={16} />
                  Meditation
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <FiHeart className="mr-2 text-primary-600 dark:text-primary-400" size={16} />
                  Drawing
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <FiHeart className="mr-2 text-primary-600 dark:text-primary-400" size={16} />
                  Typing
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <FiMusic className="mr-2 text-primary-600 dark:text-primary-400" size={16} />
                  Music
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;