import React from "react";

export function SoilConnect() {
  return (
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
            <strong>Soil Connect</strong> is a digital platform that connects
            farmers, distributors, and agencies through a comprehensive soil
            database and expert insights. It helps optimize agriculture with
            tools for soil testing, distributor matching, and data-driven
            decision-making.
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
            <strong>Mission:</strong> Smarter farming through better soil data.
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
  );
}
