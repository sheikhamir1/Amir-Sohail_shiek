// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <div id="root">
      <section
        id="projects"
        className="py-16 md:py-24 bg-white dark:bg-neutral-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-3">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills and expertise
              in web development.
            </p>
          </div>

          {/* <!-- Projects Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* <!-- Project Card 1 --> */}
            <div className="bg-gray-50 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
                {/* <!-- Placeholder with gradient --> */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                {/* <img src="/pic1.jpg" alt="" /> */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/SoilConnect.md"
                      className="bg-secondary text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/SoilConnect.md"
                      className="bg-primary text-white p-2 rounded-full hover:bg-blue-900 transition-colors duration-300"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 dark:bg-neutral-800">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Soil Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <p>
                    <strong>Soil Connect</strong> is a digital platform that
                    connects farmers, distributors, and agencies through a
                    comprehensive soil database and expert insights. It helps
                    optimize agriculture with tools for soil testing,
                    distributor matching, and data-driven decision-making.
                  </p>

                  <h2>Highlights:</h2>
                  <ul>
                    <li>Interactive soil database</li>
                    <li>Crop-specific recommendations</li>
                    <li>Distributor search & map</li>
                    <li>Downloadable reports & analytics</li>
                  </ul>

                  <h2>Impact:</h2>
                  <ul>
                    <li>500+ soil samples</li>
                    <li>100+ distributors</li>
                    <li>Active in 32 states</li>
                    <li>98% user satisfaction</li>
                  </ul>

                  <p>
                    <strong>Mission:</strong> Smarter farming through better
                    soil data.
                  </p>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
                    HTML5
                  </span>
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 py-1 px-2 rounded-md">
                    Css3
                  </span>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 py-1 px-2 rounded-md">
                    JavaScript
                  </span>
                  <span className="text-xs bg-purple-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 py-1 px-2 rounded-md">
                    Tailwind
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/SoilConnect.md"
                    className="text-secondary text-white hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                    target="_blank"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project Card 2 --> */}
            <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
                {/* <!-- Placeholder with gradient --> */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/sheikhamir1/CyberHunter_frontEnd/tree/master"
                      className="bg-secondary text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/sheikhamir1/CyberHunter_frontEnd/tree/master"
                      className="bg-primary text-white p-2 rounded-full hover:bg-blue-900 transition-colors duration-300"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Cyber Hunter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Cyber Hunter is a cutting-edge blog that explores the latest
                  trends in cybersecurity, digital privacy, and online safety.
                  We provide expert insights, tips, and strategies to help
                  individuals and businesses stay protected in an increasingly
                  digital world. Whether you're a tech enthusiast or just
                  looking to secure your online presence, Cyber Hunter is your
                  go-to resource for all things cybersecurity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
                    React JS
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
                    Css3
                  </span>
                  <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 py-1 px-2 rounded-md">
                    Node js
                  </span>
                  <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-1 px-2 rounded-md">
                    Mongodb/mongoose
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/sheikhamir1/CyberHunter_frontEnd/tree/master"
                    className="text-secondary text-white hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                    target="_blank"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project Card 3 --> */}
            <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
                {/* <!-- Placeholder with gradient --> */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-secondary text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-primary text-white p-2 rounded-full hover:bg-blue-900 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  AI Content Generator
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Web application that leverages AI to generate creative content
                  for marketing, social media, and blogging with customizable
                  outputs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 py-1 px-2 rounded-md">
                    Python
                  </span>
                  <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 py-1 px-2 rounded-md">
                    TensorFlow
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
                    Vue.js
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Completed: March 2023
                  </span>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project Card 4 --> */}
            <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
                {/* <!-- Placeholder with gradient --> */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-yellow-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-secondary text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-primary text-white p-2 rounded-full hover:bg-blue-900 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Payment Gateway Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Secure payment processing system with multi-provider support,
                  subscription management, and detailed financial reporting.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 py-1 px-2 rounded-md">
                    Node.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
                    Express
                  </span>
                  <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 py-1 px-2 rounded-md">
                    Stripe API
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Completed: August 2022
                  </span>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project Card 5 --> */}
            <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
                {/* <!-- Placeholder with gradient --> */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-secondary text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-primary text-white p-2 rounded-full hover:bg-blue-900 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Task Management Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Collaborative project management tool with task tracking, team
                  communication, and deadline management features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
                    React
                  </span>
                  <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-1 px-2 rounded-md">
                    Redux
                  </span>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 py-1 px-2 rounded-md">
                    Socket.io
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Completed: November 2022
                  </span>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project Card 6 --> */}
            <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
                {/* <!-- Placeholder with gradient --> */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-secondary text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-primary text-white p-2 rounded-full hover:bg-blue-900 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Educational Content Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interactive learning platform with course management, progress
                  tracking, and assessment tools for educators and students.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 py-1 px-2 rounded-md">
                    Django
                  </span>
                  <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 py-1 px-2 rounded-md">
                    PostgreSQL
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
                    AWS
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Completed: February 2023
                  </span>
                  <a
                    href="#"
                    className="text-secondary hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- View More Button --> */}
          {/* <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block bg-white dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-700 text-primary dark:text-white font-medium py-3 px-8 rounded-lg border border-gray-300 dark:border-neutral-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
