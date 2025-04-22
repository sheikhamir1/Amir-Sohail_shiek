import React from "react";

export function BlogVerse() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
        {/* <!-- Placeholder with gradient --> */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-yellow-500 flex items-center justify-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJUlEQVR4nO3Zv48MYRzH8Tm5nF9HImg44UIitKfQC53wF0hEoUFUxNFpTkeFTsLRiEpU1/pR+BXkIjRETiQajuZi5SXPZU42a8/s7DO7M2He3T6Zeb6f9z7Ps/nObJLU1NTUVBZswVV8QEP/aKQ1r4QM3Ybfh1nlM4u9ecOPViT8Al+xOY9A2DZV43IegbD/mjmDlRjPGFsYH8q15C2E+9vM+z7plDYHdjgdX5Ux9ns8Fn/O28hzcyvh2xjG2YyxwCkMRoYfxOnWEDEClSCpBUom+W9XICkJtUD5K9DoKkeFBLbjBn5WUgDLcRIP04YtNJBPcR7bmq7bjZeVEsBOvLU4Yftcx0h6/VBlBLARH3VGWJWjeQv0WuCW/NwMDV7pAlgf8Xj6GlvLFjgojk8YK1PgiHg+Y6AsgQMFCFzLKtJLgbX4ERH+EpaUJpDOP9nl3t/faYFeC2zATI7wt7EuT4GeCqQ1duBNRvDQYuzpZvKeC6R1luEE7uMLvuMFLob+J2bivgj0jH9B4FuLw0gBb9ou5GjgFiMc/InMzhSPWm68h00RAqFokUxkFTxeUKH57jHnT2YnzGQJLMUz8cwvNeYUy1ynDx2xEqPpXNOK5VWew3cMD9oc7E44nM7T+gI4lvGkn2AFnhQU/nF4GdBXgVRiNe5Ehr+LNX0P3yQxEDpKPM8ZfBqHMtvofhGCYBfOYQrvmv5UnE0/T6VnZ+yvT181Sbn8AkAkCHm3cJZkAAAAAElFTkSuQmCC"
            alt="women-s-portal"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <a
              href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/BlogVerse.md"
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
              href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/BlogVerse.md"
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
          BlogVerse
        </h3>
        <div className="text-gray-600 dark:text-gray-300 mb-4">
          <p>
            <strong>BlogVerse</strong> is a user-friendly blogging platform
            designed for both readers and writers. It enables users to publish
            rich-text blogs, explore trending topics, and interact through
            comments—all in a clean, responsive UI.
          </p>

          <ul>
            <li>
              📝 Create & manage blogs with images, tags, SEO & scheduling
            </li>
            <li>👥 Auth system with reader/writer roles & social login</li>
            <li>🔍 Advanced search, filters, featured & trending sections</li>
            <li>💬 Comment system with threaded replies</li>
            <li>📱 Fully responsive and mobile-friendly design</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 py-1 px-2 rounded-md">
            HTML
          </span>
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
            Css
          </span>
          <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 py-1 px-2 rounded-md">
            JavaScript
          </span>
          <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 py-1 px-2 rounded-md">
            Font Awesome
          </span>
          <span className="text-xs bg-amber-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 py-1 px-2 rounded-md">
            Google Font
          </span>
          <span className="text-xs bg-amber-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 py-1 px-2 rounded-md">
            Typography
          </span>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="https://github.com/sheikhamir1/Demo-Projects-Details/blob/main/AllProjectsDetail/BlogVerse.md"
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
