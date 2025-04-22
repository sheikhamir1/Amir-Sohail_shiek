import React from "react";

export function FrontEnd() {
  const skills = [
    "HTML5",
    "Css3",
    "JavaScript",
    "Bootstrap",
    "Tailwind",
    "React",
    "Typescript",
    "Zustand",
    "FireBase",
    "AppWrite",
    " Socket.io",
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-neutral-800/80 dark:to-blue-900/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-blue-100/50 dark:border-blue-800/30 hover:border-blue-200 dark:hover:border-blue-800/70">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h4 className="ml-4 text-xl font-semibold text-neutral-800 dark:text-white">
          Front-End Development
        </h4>
      </div>

      {/* all skills */}
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="py-1">
              <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
