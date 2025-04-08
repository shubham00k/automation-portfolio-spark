
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-devops-blue-dark py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/37275159-3899-439c-8730-db82940c83b7.png" 
              alt="DevOpsPro Logo" 
              className="h-8 w-8" 
            />
            <p className="text-gray-600 dark:text-devops-gray-light">
              © {currentYear} DevOpsPro. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-devops-gray-light hover:text-blue-600 dark:hover:text-devops-teal transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-devops-gray-light hover:text-blue-600 dark:hover:text-devops-teal transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-devops-gray-light hover:text-blue-600 dark:hover:text-devops-teal transition-colors"
              aria-label="Twitter profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
