import React from "react";

export function ProfessionalSkills() {
  const skills = [
    "Problem Solving",
    "Leadership",
    "Time Management",
    "Agile Methods",
    "Communication",
  ];

  return (
    <div className="mt-8">
      <h4 className="text-xl font-semibold mb-5 text-neutral-700 dark:text-neutral-200">
        Professional Skills
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-neutral-100 dark:bg-neutral-700/70 px-4 py-3 rounded-lg text-center transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800/70 transform hover:-translate-y-0.5"
          >
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
