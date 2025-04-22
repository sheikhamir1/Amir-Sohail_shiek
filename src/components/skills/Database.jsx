import React from "react";

export function Database() {
  const skills = [
    "MongoDB",
    "Mongoose",
    "Postgresql",
    "Sequelize",
    "Redis",
    "MySQL",
  ];

  return (
    <div
      className="bg-white dark:bg-neutral-700 rounded-xl shadow-md p-6"
      id="el-h9qz74gb"
    >
      <h4
        className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white flex items-center"
        id="el-pawzcvym"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          id="el-5yjpsdbv"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            id="el-ty6buzi7"
          ></path>
        </svg>
        Database &amp; Storage
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3" id="el-j2fggudk">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-neutral-100 dark:bg-neutral-600 px-4 py-2 rounded-lg"
            id="el-1dp94m5v"
          >
            <div
              className="w-2 h-2 bg-yellow-500 rounded-full mr-2"
              id="el-57tvf5j0"
            ></div>
            <span
              className="text-neutral-700 dark:text-neutral-200"
              id="el-3fg537il"
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
