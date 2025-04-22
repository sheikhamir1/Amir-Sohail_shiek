import React from "react";

export function BlueSky() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
        {/* <!-- Placeholder with gradient --> */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-500 flex items-center justify-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR4nO2ZS2wNYRTHv5JWRVEkorVg4/2IoCEeC48KdvWIiKXnQkQiLLU2FqiSKBJWNGJja+cRTbCQeKRoUjSRSDQioR6lafuT455hOubeedy5tzMx/+W93zlz/vOd8z/f+caYFClSFAXAXKABuA+8A3qBLuAhcByYbeIMYCpwHRggN+T/G0CViRuANcBHDfQr0AysBaqBUmASsBpoAj7rOlm/3MSMRK8G5/mmgXFAi67/BiwpXrS508naiVNASQDbo2r3FhhvhhJkasLaiZIQ9lfU/kxhIvSvTgNaE6EKV9PsE/ADmGCGAmQkVtCcp59Gyw9wEWgDuvUFtQPXgG1AWXTRDw7ggQZQm6efVfjDa2BzdAz+BiDNTlCdp59RQD/wAjgCLAAq9fdZwH7gsY2QiMrwKIlYklsaga/aXGIBDAN2AT0WmXweNh84CzzX/LVQGdpp8BhW2MhsCmo8QotQtt8NRT1qALv1ua98C4CSuGvrwpKfNZq/I4GNQEXBo/83zZ5oTFuNH+hOCN4AM01MABzQuFr81kS/7kRsSAhkFFAi7cYLWtj5KUTGz06XumrI0+do9dPtZ7Gok2BxHg9cZFOZSEiEISLHBMIWs5xogc6oSYRJrS9hiaiy3HSQqA/qJxuAg+rzapDUqvFcnP1AGelO2F7SU9/yKzOCLm70XDzYboOjeUZGQgDsUb8dvhoiME8D+u735sMxMRaCxEqbeNQFMTyvRp1eZIBy4BHZIUPYIQ9ZvuB2eCSTTnttJE4GfQNyRLmjxrIzp+WywE0AgMs5SPwEdnjI8iASQAUwR7u4VRO/SYQ6xisZmd76XAJszWJTZ1sj6rfOQ5b/kBCfuKMjUDp5zOhNOopa0nzPZd1Y29DVZW+oWWTZuRMWEXnGS7062hLF3BMIjoPmdA9ZviTkTNwALFWlewZMdpkC+5JAokyb6G1gjOO/KcCH2JMQAMf0oq7cBJNl9KQ99MSAGcAJt2A8ZFl6y2ETBwAlfm/VgWW244v0lu0maSBTQ202aV1vkgigXkm8BxaaJIJMDfVob5lmkggy3bxVlWuiSSqAfcAtZ29JFIAq4FzBPgkUCyLLYb5kpUiRIsX/g1+Rj46zTPXeJwAAAABJRU5ErkJggg=="
            alt="cloud-lighting--v1"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <a
              href="https://github.com/sheikhamir1/blueSky"
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
              href="https://github.com/sheikhamir1/blueSky"
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
          BlueSky
        </h3>
        <div className="text-gray-600 dark:text-gray-300 mb-4">
          <p>
            <strong>BlueSky</strong> is a modern weather app built with{" "}
            <strong>React 19</strong> and powered by <strong>Vite 6</strong>. It
            provides fast, interactive, and real-time weather updates.
          </p>

          <h2>🔧 Tech Stack</h2>
          <ul>
            <li>
              <strong>React 19</strong>, <strong>Vite 6</strong>
            </li>
            <li>
              <strong>React Router DOM 7</strong> for navigation
            </li>
            <li>
              <strong>Framer Motion</strong> for smooth animations
            </li>
            <li>
              <strong>Recharts</strong> for data visualization
            </li>
          </ul>

          <h2>📌 Key Features</h2>
          <ul>
            <li>Fast HMR with Vite for rapid development</li>
            <li>Interactive UI with real-time weather updates</li>
            <li>Data visualization of weather trends using Recharts</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 py-1 px-2 rounded-md">
            React js
          </span>
          <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 py-1 px-2 rounded-md">
            Css3
          </span>
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
            Framer Motion
          </span>
          <span className="text-xs bg-blue-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-1 px-2 rounded-md">
            React Feather
          </span>
          <span className="text-xs bg-blue-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 py-1 px-2 rounded-md">
            Recharts
          </span>
          <span className="text-xs bg-blue-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 py-1 px-2 rounded-md">
            Third Party API
          </span>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="https://github.com/sheikhamir1/blueSky"
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
