import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed z-50 bottom-24 md:bottom-8 right-8 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      {darkMode ? (
        <FiSun className="text-yellow-500\" size={20} />
      ) : (
        <FiMoon className="text-gray-700" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;