import React from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const ProjectCard = ({ title, description, technologies, githubLink, image, delay }) => (
  <div 
    className="card h-full flex flex-col"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-auto">
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
        >
          <FiGithub size={18} className="mr-1" />
          View Code
        </a>
        <span className="flex items-center text-gray-500 dark:text-gray-400">
          <FiCode size={18} className="mr-1" />
          Project
        </span>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Multiple Digits Recognition",
      description: "A Python-based application that helps detect and recognize multiple digits in a given input image using neural networks and computer vision techniques.",
      technologies: ["Neural Network", "CNN", "TensorFlow", "Keras", "Numpy", "Matplotlib", "OpenCV"],
      githubLink: "https://github.com/anushavanapalli/multiple-digits-recognition",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Digitalizing The Map",
      description: "A project aimed at accurately measuring distances between multiple points in a map image, designed to overcome the limitations of manual distance measurement methods.",
      technologies: ["Python", "Numpy", "Matplotlib", "OpenCV", "Math"],
      githubLink: "https://github.com/anushavanapalli/digital-map-analyzer",
      image: "https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Static Quiz Website",
      description: "A static quiz website related to CSE subjects, allowing students to take tests without requiring login or sign-in. Developed during an internship project.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubLink: "https://github.com/anushavanapalli/static-quiz-website",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Management System",
      description: "A task management application with features for creating, assigning, and tracking tasks. Implements Spring Security for authentication.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
      githubLink: "#",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A major personal project that showcases skills, projects, and achievements using a modern responsive portfolio design.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      githubLink: "#",
      image: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg"
    }
  ];

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Projects;
