import React from "react";

export function TaskMaster() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
        {/* <!-- Placeholder with gradient --> */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABn0lEQVR4nO2ZP0oDQRSHpzCCGg8gisEjWHgFLbUX+4g5gH+6mDuo59DWwkIj/ikVU1iIN0iaIImfDL7AMmycnXV2neB8TeDx8ub37UxCNqtUJBIpFWAWOAZegQ95beq6mpDwbdJpAzO+F1wBzoB3YEB+dmTeoaVvX/q2Zc1TnSFv+A2ghx+WZeazpe9J+mqJWhdYz3PlfYXXVGRu39LXl76KUdcSNRcBfWySHABzxhFIq6WSmMsvek9cBPT5S1KV+rylVqTAm4uA+YHVV7kKHFlqRQoMXAS84kmAKDCxO6A84SKgiQIjlCfIgPqhP/dCUUCIO5CVeITGEI9QAEdoaNmFYegCHYtAJ3SBhkWgEbrAlL7vHRP+ZXTrGayAzN4aI7DpLUeRAjL/0ljiymuOEgRWE99In8DaRAnIGi3566blPUcZAoXmIAr4gf+8A13jvYuFJk0BWDIydFVWgFvjzedlSvAd/sLIcOMyYI/wqLsITAOPhMOd+Tspi8QC8PDXyYF7ncUpfEJCP2jYBa49P/Cw0ZM1685XPhKJRFSZfAG7YSMjg19qzAAAAABJRU5ErkJggg=="
            alt="create"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <a
              href="https://github.com/sheikhamir1/Task-master"
              target="_blank"
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
              href="https://github.com/sheikhamir1/Task-master"
              target="_blank"
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
          Task Master
        </h3>
        <div className="text-gray-600 dark:text-gray-300 mb-4">
          <p>
            <strong>Task Master</strong> is a modern task management web app
            built with <strong>React</strong>,{" "}
            <strong>Firebase Firestore</strong>, and{" "}
            <strong>Context API</strong>. It enables real-time task creation,
            deletion, completion, and restoration, with a smooth UI and Dark
            Mode support.
          </p>

          <h2>🔧 Key Features:</h2>
          <ul>
            <li>✅ Add, Complete, Delete, Restore tasks</li>
            <li>🌑 Dark/Light mode toggle</li>
            <li>🔄 Real-time sync with Firebase</li>
            <li>♻️ Soft delete with Trash & Restore</li>
            <li>🌀 Animated loading spinners (react-spinners)</li>
          </ul>

          <p>
            <strong>Tech Stack:</strong> React, Firebase Firestore, Context API,
            Tailwind CSS
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
            React
          </span>
          <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-1 px-2 rounded-md">
            FireBase
          </span>
          <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 py-1 px-2 rounded-md">
            Framer Motion
          </span>
          <span className="text-xs bg-purple-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 py-1 px-2 rounded-md">
            Lucide react
          </span>
          <span className="text-xs bg-purple-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 py-1 px-2 rounded-md">
            React Spinners
          </span>
          <span className="text-xs bg-purple-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 py-1 px-2 rounded-md">
            Authentication
          </span>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="https://github.com/sheikhamir1/Task-master"
            target="_blank"
            className="text-secondary text-white hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
          >
            View Details →
          </a>
        </div>
      </div>
    </div>
  );
}
