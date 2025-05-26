import React from 'react';
import { FiCalendar, FiAward, FiBook, FiCheckCircle } from 'react-icons/fi';

const EducationItem = ({ degree, institution, location, period, grade, description, delay }) => (
  <div 
    className="card mb-6 relative"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    {/* Timeline dot */}
    <div className="absolute top-6 -left-3 md:-left-4 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-gray-800 z-10"></div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{degree}</h3>
      <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-300 mb-3">
        <span className="inline-flex items-center mr-4">
          <FiBook className="mr-1 text-primary-600 dark:text-primary-400" size={16} />
          {institution}
        </span>
        <span className="inline-flex items-center">
          <FiCalendar className="mr-1 text-primary-600 dark:text-primary-400" size={16} />
          {period}
        </span>
      </div>
      
      <div className="flex items-center mb-3">
        <FiAward className="mr-2 text-primary-600 dark:text-primary-400" size={16} />
        <span className="text-gray-700 dark:text-gray-300">
          <span className="font-medium">Grade:</span> {grade}
        </span>
      </div>
      
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      )}
    </div>
  </div>
);

const CertificationItem = ({ title, issuer, date, delay }) => (
  <div 
    className="flex items-start mb-4"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <FiCheckCircle className="text-primary-600 dark:text-primary-400 mt-1 mr-3 flex-shrink-0" size={20} />
    <div>
      <h4 className="font-medium">{title}</h4>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {issuer} • {date}
      </div>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Rajiv Gandhi University of Knowledge Technologies, AP IIIT Nuzvid",
      location: "Nuzvid, AP, 521202",
      period: "2020 - 2024",
      grade: "CGPA: 8.45 | Distinction",
      delay: 0
    },
    {
      degree: "PUC (Pre-University Course)",
      institution: "Rajiv Gandhi University of Knowledge Technologies, AP IIIT Nuzvid",
      location: "Nuzvid, AP, 521202",
      period: "2018 - 2020",
      grade: "CGPA: 8.9 | Distinction",
      delay: 100
    },
    {
      degree: "SSC",
      institution: "SKPGN High School",
      location: "Ramachandrapuram, 533255",
      period: "2017 - 2018",
      grade: "CGPA: 10 | Distinction",
      delay: 200
    }
  ];

  const certifications = [
    {
      title: "Participation Certificate in Techzite 2k20, 2K22",
      issuer: "RGUKT IIIT-NUZVID",
      date: "2020, 2022"
    },
    {
      title: "Certificate of Participation for Python and Introduction to Machine Learning Workshop",
      issuer: "StudyComrade",
      date: "June 19-20, 2022"
    },
    {
      title: "Introduction to Java",
      issuer: "Sololearn",
      date: "June 2, 2023"
    },
    {
      title: "Machine Learning with Python",
      issuer: "Coursera",
      date: "April 12, 2023"
    }
  ];

  const activities = [
    "Won prize in Mandal level essay writing competition about Pushkaralu and participated at the district level (2015)",
    "Volunteer in Swachh Bharat National Level Event conducted by the Government of India (2015)",
    "Participated in District Level Kala Utsav Competition in Art from Dance (2017)",
    "Volunteered for MeeBuddy organization (1 year) for designing",
    "Worked as a volunteer in All India Inter University Yoga Championship at RGUKT, Nuzvid"
  ];

  return (
    <section id="education" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">Education & Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100" data-aos="fade-up">
              Education
            </h3>
            
            <div className="relative pl-4 md:pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              {educationData.map((item, index) => (
                <EducationItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          {/* Certifications & Activities */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100" data-aos="fade-up">
                Certifications
              </h3>
              
              <div className="card p-6">
                {certifications.map((cert, index) => (
                  <CertificationItem 
                    key={index} 
                    {...cert} 
                    delay={index * 50}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100" data-aos="fade-up">
                Extracurricular Activities
              </h3>
              
              <div className="card p-6">
                <ul className="space-y-4">
                  {activities.map((activity, index) => (
                    <li 
                      key={index} 
                      className="flex items-start"
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                    >
                      <FiCheckCircle className="text-primary-600 dark:text-primary-400 mt-1 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;