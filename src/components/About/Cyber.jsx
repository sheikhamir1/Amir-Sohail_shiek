import React from "react";

export function Cyber() {
  const skills = [
    "Penetration Testing",
    "Web Application Security",
    "Mobile Application Security",
    "Cloud Security",
    "Network Security",
  ];

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-neutral-800/80 dark:to-red-900/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-red-100/50 dark:border-red-800/30 hover:border-red-200 dark:hover:border-red-800/70">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center text-white shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h4 className="ml-4 text-xl font-semibold text-neutral-800 dark:text-white">
          Security
        </h4>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <div key={index} className="py-1">
            <span className="px-3 py-1.5 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full text-sm font-medium transition-all hover:bg-red-200 dark:hover:bg-red-800/60">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
