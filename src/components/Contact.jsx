import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend } from 'react-icons/fi';

const ContactInfo = ({ icon: Icon, title, value, link, isEmail }) => (
  <div className="flex items-start mb-6" data-aos="fade-up">
    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
      <Icon size={20} className="text-primary-600 dark:text-primary-400" />
    </div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      {link ? (
        <a 
          href={link} 
          target={!isEmail ? "_blank" : undefined}
          rel={!isEmail ? "noopener noreferrer" : undefined}
          className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Your message has been sent. Thank you!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitResult({ success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Let's Get In Touch
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any opportunities, questions, or just to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div>
              <ContactInfo 
                icon={FiMail} 
                title="Email" 
                value="anushavanapalli035@gmail.com" 
                link="mailto:anushavanapalli035@gmail.com"
                isEmail={true}
              />
              
              <ContactInfo 
                icon={FiPhone} 
                title="Phone" 
                value="+91 9133508724" 
                link="tel:+919133508724"
              />
              
              <ContactInfo 
                icon={FiMapPin} 
                title="Location" 
                value="Hyderabad, Telangana, India" 
              />
              
              <ContactInfo 
                icon={FiLinkedin} 
                title="LinkedIn" 
                value="anusha-vanapalli-046723306" 
                link="https://www.linkedin.com/in/anusha-vanapalli-046723306"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none"
                  ></textarea>
                </div>
                
                {submitResult.message && (
                  <div className={`mb-4 p-3 rounded-md ${submitResult.success ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
                    {submitResult.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <FiSend className="mr-2" size={18} />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;