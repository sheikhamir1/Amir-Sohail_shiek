import React from "react";

export function Backend() {
  const skills = [
    "Laravel",
    "Node.js",
    "Express",
    "Restfull Api",
    "Graphql Api",
    "API Design",
    "Authentication",
    "Authorization",
    " bcryptjs",
    " Web sockets",
    "Cors",
    " Jwt",
    " multer",
    "Python",
  ];

  return (
    <div
      className="bg-white dark:bg-neutral-700 rounded-xl shadow-md p-6"
      id="el-emnfy91i"
    >
      <h4
        className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white flex items-center"
        id="el-fnilund3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          id="el-ygi1ny4b"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            id="el-1esqysjv"
          ></path>
        </svg>
        Backend Development
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3" id="el-j8ba9n3v">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-neutral-100 dark:bg-neutral-600 px-4 py-2 rounded-lg"
            id="el-ixnzw7gd"
          >
            <div
              className="w-2 h-2 bg-green-500 rounded-full mr-2"
              id="el-t78z8bvg"
            ></div>
            <span
              className="text-neutral-700 dark:text-neutral-200"
              id="el-sv9dmbfz"
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
