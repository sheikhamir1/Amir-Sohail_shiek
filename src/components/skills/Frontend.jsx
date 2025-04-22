import React from "react";

export function Frontend() {
  const skills = [
    "HTML5/CSS3",
    "JavaScript",
    "Bootstrap",
    "Tailwind",
    "Daisy UI",
    "Flowbite",
    "TypeScript",
    "React",
    "Zustand",
    "Lucide React",
    "Framer Motion",
    "Recharts",
    "Tanstack",
    "Socket.io",
    "React Spinner",
    "React OAuth",
    "dotenv",
    "React Hook Form",
    "Font Awesome",
    "React Toastify",
    "Firebase",
    "AppWrite",
    "HTML2pdf.js",
    "React Icons",
  ];

  return (
    <div
      className="bg-white dark:bg-neutral-700 rounded-xl shadow-md p-6"
      id="el-dxka3ddy"
    >
      <h4
        className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white flex items-center"
        id="el-13nvj10j"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          id="el-f9xxh168"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            id="el-8vqi175i"
          ></path>
        </svg>
        Frontend Development
      </h4>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-neutral-100 dark:bg-neutral-600 px-4 py-2 rounded-lg"
            id="el-10nat4y2"
          >
            <div
              className="w-2 h-2 bg-blue-500 rounded-full mr-2"
              id="el-npqpf4t2"
            ></div>
            <span
              className="text-neutral-700 dark:text-neutral-200"
              id="el-auu8h8kk"
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
