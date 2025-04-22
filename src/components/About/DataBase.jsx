import React from "react";

export function DataBase() {
  const skills = [
    "MongoDB",
    "Mongoose",
    "Postgresql",
    "Sequelize",
    "Redis",
    "MySQL",
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-neutral-800/80 dark:to-purple-900/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-purple-100/50 dark:border-purple-800/30 hover:border-purple-200 dark:hover:border-purple-800/70">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
          </svg>
        </div>
        <h4 className="ml-4 text-xl font-semibold text-neutral-800 dark:text-white">
          Database
        </h4>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <div key={index} className="py-1">
            <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium transition-all hover:bg-purple-200 dark:hover:bg-purple-800/60">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
