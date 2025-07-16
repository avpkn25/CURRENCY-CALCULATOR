import { useState } from "react";
import { DollarSign, Moon, Sun, Menu, User, Mail } from "lucide-react";

const Navbar = ({ isDarkMode, toggleDarkMode, themeClasses }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`${themeClasses.navBg} border-b shadow-sm transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-blue-600 p-2 rounded-lg shadow-md">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <a href="/" className="">
              <span className={`ml-3 text-xl font-bold ${themeClasses.text}`}>
                CurrencyCalc
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://praveenamirisetty.me/"
              target="_blank"
              className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors duration-200 flex items-center`}
            >
              <User className="w-4 h-4 mr-2" />
              About Me
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=praveenamirisetty25@gmail.com&tf=cm"
              target="_blank"
              className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors duration-200 flex items-center`}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${themeClasses.input} transition-all duration-200 hover:scale-105`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${themeClasses.input} transition-all duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg ${themeClasses.input} transition-all duration-200`}
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="space-y-3">
              <a
                href="#about"
                className={`block ${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors duration-200 flex items-center`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-4 h-4 mr-2" />
                About Me
              </a>
              <a
                href="#contact"
                className={`block ${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors duration-200 flex items-center`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
