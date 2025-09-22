'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "BahirMart",
      description: "A fully responsive website and mobile app marketplace with auction platform built with Next.js, MongoDB, and Tailwind CSS. Features include product filtering, location based filtering, delivery tracking for merchants, auction management,stock management, AI fraud detection, cart functionality, and secure checkout process.",
      image: "/images/image.png",
      technologies: ["Next.js", "ShadCN", "Tailwind CSS", "Chapa API", "Firebase","MongoDB", "SocketIO","RESTful API", "Flutter", "Node js", "Google Maps API"],
      codeUrlweb:"https://github.com/danyaabdella/marketplace-with-auction-system" ,
      codeUrlAdmin: "https://github.com/danyaabdella/admin-Gebeyet",
     
    },
    {
      id: 2,
      title: "e-Learning Platform",
      description: "A collaborative electronical learning management system with real-time updates, course management, exam reviews, and certification for completed course. With chapa payment system for getting the enrollment for a course.",
      image: "/images/E-learning.png",
      technologies: ["Nextjs","MongoDB", "Cloudinary", "TailwindCSS", "RESTful API","Chapa API"],
      
      codeUrlweb: "https://github.com/ElayeDegu/e-Learning#"
    },
    {
      id: 3,
      title: "Socket Server",
      description: "A socket server for real time updates in auction system to notify a new bid, bid increment and end of bid using scheduler",
      image: "/images/socket.png",
      technologies: ["JavaScript", "SocketIO", "Agenda Schedular", "Node js", "Postman"],
      codeUrl: "https://github.com/danyaabdella/socket-server"
    },
    {
      id: 4,
      title: "Telegram Bot",
      description: "A Telegram bot to share powerpoints and files ",
      image: "/images/tg-bot.png",
      technologies: ["Python"],
      liveUrl: "#",
      codeUrl: "https://github.com/danyaabdella/telegram_ppt_bot"
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance projects every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextProject();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="section-heading">My Projects</h2>
        <div className="relative max-w-5xl mx-auto">
          {/* Previous Button */}
          <button 
            onClick={prevProject}
            className="nav-btn left-0 -ml-6"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Project Card */}
          <div className="project-card overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full relative">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {currentProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {currentProject.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  {/* <a 
                    href={currentProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a> */}
                  {currentProject.codeUrlweb && (
                    <a 
                      href={currentProject.codeUrlweb} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Web Code
                    </a>
                  )}
                  {currentProject.codeUrlAdmin && (
                    <a 
                      href={currentProject.codeUrlAdmin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                    Admin Code
                    </a>
                  )}
                  
                  
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextProject}
            className="nav-btn right-0 -mr-6"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProjectIndex 
                    ? 'bg-blue-600 dark:bg-blue-400' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}