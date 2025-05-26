import React from 'react';
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiCpu } from 'react-icons/fi';

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <div className="card p-6" data-aos="fade-up">
    <div className="flex items-center mb-4">
      <Icon size={24} className="text-primary-600 dark:text-primary-400 mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ 
                '--progress-width': `${skill.level}%`,
                '--progress-color': skill.color || '#2563eb'
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const programmingSkills = [
    { name: 'Core Java', level: 95 },
    { name: 'Python', level: 90 },
  ];

  const webSkills = [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'ReactJs', level: 95 },
  ];

  const frameworkSkills = [
    { name: 'Spring Boot', level: 89 },
    { name: 'Hibernate', level: 85 },
    { name: 'Maven', level: 90 },
  ];

  const databaseSkills = [
    { name: 'MySQL', level: 96 },
    { name: 'Oracle', level: 95 },
    { name: 'SQL', level: 96 },
  ];

  const toolSkills = [
    { name: 'Git', level: 880 },
    { name: 'Eclipse', level: 90 },
    { name: 'IntelliJ IDEA', level: 90 },
    { name: 'Postman', level: 75 },
    { name: 'Visual Studio Code', level: 90 },
  ];

  const csConcepts = [
    { name: 'OOPS', level: 90 },
    { name: 'DBMS', level: 90 },
    { name: 'Data Structures', level: 85 },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <SkillCategory icon={FiCode} title="Programming Languages" skills={programmingSkills} />
          <SkillCategory icon={FiLayout} title="Web Technologies" skills={webSkills} />
          <SkillCategory icon={FiServer} title="Frameworks" skills={frameworkSkills} />
          <SkillCategory icon={FiDatabase} title="Databases" skills={databaseSkills} />
          <SkillCategory icon={FiTool} title="Tools & Technologies" skills={toolSkills} />
          <SkillCategory icon={FiCpu} title="CS Concepts" skills={csConcepts} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
