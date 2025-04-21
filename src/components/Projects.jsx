// src/components/Projects.js
import React from "react";
import { SoilConnect } from "../Projects/SoilConnect";
import { FoodFusion } from "../Projects/FoodFusion";
import { ChatBuddy } from "../Projects/ChatBuddy";
import { BlogVerse } from "../Projects/BlogVerse";
import { TaskMaster } from "../Projects/TaskMaster";

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
            <SoilConnect />
            {/* <!-- Project Card 2 --> */}
            <FoodFusion />
            {/* <!-- Project Card 3 --> */}
            <ChatBuddy />
            {/* <!-- Project Card 4 --> */}
            <BlogVerse />
            {/* <!-- Project Card 5 --> */}
            <TaskMaster />
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
        </div>
      </section>
    </div>
  );
};

export default Projects;
