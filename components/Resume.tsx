'use client';

import { useState } from 'react';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('experience');

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "BahirDar University",
      period: "2022 - 2025",
      description: "Graduated with honors. Specialized in Web Development and Software Engineering."
    },
    // {
    //   degree: "High School Diploma",
    //   institution: "High School Name",
    //   period: "2015 - 2019",
    //   description: "Focused on mathematics and computer science. Participated in coding competitions and won regional programming contest."
    // }
  ];

  const experience = [
    {
      position: " Backend Developer",
      company: "Fayida Academy",
      period: "Dec 2025 - Present",
      description: " Engaged in development and maintaing the backend architecture and schema design"
    },
    {
      position: "Junior Software Developer",
      company: "eTech",
      period: "Aug 2025 - Dec 2025",
      description: "Engage in developing and enhancing software products for eHealth system"
    },
    {
      position: "Intern",
      company: "Ibex Technologies and Promotion",
      period: "Jul 2024 - Oct 2024",
      description: "Developing responsive web applications using Next.js and RESTful API. Collaborating with UX designers to implement pixel-perfect interfaces. Optimizing application performance and accessibility."
    },
    
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Dart", "Flutter", "SQL", "Java", "C++"],
    frameworks: ["React", "Next.js", "Angular", "Node.js", "Nest.js", "Express", "Tailwind CSS"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Swagger"],
    other: ["Responsive Design", "RESTful APIs", "UI/UX Principles", "Agile Methodology", "Database"]
  };

  const handleDownloadCV = () => {
    // This will trigger the download of your resume
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'your-name-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-heading">My Resume</h2>
        
        {/* Download CV Button */}
        <div className="flex justify-center mb-12">
          <button 
            onClick={handleDownloadCV}
            className="download-cv-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download CV
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white dark:bg-gray-900 p-1 rounded-lg shadow-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'skills'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Skills
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {job.position}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                    {job.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
