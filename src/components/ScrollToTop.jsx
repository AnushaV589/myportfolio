import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-50 bottom-8 right-8 p-3 rounded-full bg-primary-600 text-white shadow-lg transition-all duration-300 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'
      }`}
    >
      <FiArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;