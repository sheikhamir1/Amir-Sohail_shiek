import React from "react";

export function ChatBuddy() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden">
        {/* <!-- Placeholder with gradient --> */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFUlEQVR4nO2aa4xdUxTHD8ZMU6OlraLiFUZpPVMNISWjqfcjESqkUhq+EAkNhqpX40M9QwhNUyJKKtJQNGNUpHRM0WlJaUlI651SjHpWq/xkdf672T333OOce/e5937wT+6Xtc9ee+291177v9a+UZQTQAtwKnAn8DLwEdAH/AX8AXwNrAQWADcC44DmqFEAjAGeADaQH98DDwJH1nMCRwNdMcPeA+4BzgeOAIYATfoNkexC4DFgTazvfOCgWk6gBZgplzFsBB4F2irQdSgwC/hTujYBtwM7FmO9AOwNLNWgfwMPAXtFVQLYR7v0j3S/AgytVm8igAM8d1gHTIgCAzhb58bwMTA89ADDgbUaYHnwAUp3Z5V35gaHUrwTsESKVwPDgihOH3OEt3AvhVJ6sxR+ZasVRGm2cQ8GftDYk0Ns8+86hOODWZl9/Is0kT5g92oUPSJFzwW1MJ8Ni2VDR6UKdgV+kZLDg1uY3Y5TPNduqUSB3cCG7kIszG7HDsCnsmU9cD8wOo+C2ep8Q6GWZrPlgRidsTM7z+62LJ2XqdO4mlibbstE2dLjRTJHjzps19I6uxu2sMsvK4CjZIvRo26R1dkepXkR2K1cZyNwNELOAOwnW9bE5O3At2p7PzFEa9sMA6I6AzhQtqyNyc3VPhPjMLxj0Tbe2YghtbzNywEYK1tWxOTdok97imQanol3flMNwVluXgCTZcu8lG9GelnqRL/B4rVhRlRn0J9KG6bKnUruNsm36LvvgIGuYYKEH9bD+FhGul62jHLulPCdyTuBXn17jWtoUuXDcHI9JiE7JsmG5Rm/v0Dff77tfgGmSViyArUAsDPwiYtICe0lbmb5PvCT+hzjhK1e9KouJ6gAKkQYNqe4U5LcJYI3JZHHn81Ha2C/G/c0TcB+J+Tse7Fsfj7e8Lga7PLZN7TRCYacqITOcH2sLS1qbZWbS6nv0qTIsdg7RG0FTmK85+NdcUJIetTaKgf2T6I0/nlx5aDpBR3smaqXGeaYrIrSVQmlibxZOiI5MoTxXuJ0nkifw7S87uRDBb4SSmMNzcDralwYBYD40eXAB94EfssZnbpT5NtTGk3C+L7hR9uZFONGq4g9XclQu6r1Y/XkMAW4T6vvcgnDN8DVoVIGYK70TnWCPbxD/qtFk4ROuwCXeauQFeami/R2sihBb1536pENzR55PMwaDgG+8FZsjNdpGHAp8IIMiWOFitILNECvyqC9euQxHjeoCrdZUk7uMeVe1+Cq7qj0fwfwtF6ifLcwxvkacAlwrWTvFv40UD7yucg6yQltJcvB6l0LgSv9nD7Gja6q1D0qlQO3aeyV2xZSvmYvT3cpvs/QWbDD25S0Iup3lnZso/KCYG4TpciNocs77HdcFALAvVqZdUWyAAdRElcmuiUKBblYlx8oCnSnY3UtoLBbvsZV4WQG6JkaEUCjHp2h3Yz+QOQCTFmXr3Yyds4e9qLcW8BJgcdo9wJQscVE4ByvkGb4UnxoYAA36/EibGelRDPPZFpFXTbEbvc3gLsVyvuUJhwPnCmZRczNJbnF9pfgKO8JZH7hk9Hgg4ErNAFH2bNgi87cuUmGii24ZOzVql64KpjUUOB04FbgKV2yxijelpvMUbV9rvenAhSlntSkWqWrR3zQ1RjsYh4RNRroJ7AdurXjO7Vau7vJi5SGZ6NGBtCm1+ZlXnUxCWVLrA0HYJAqLtcp1M8SrTqjHsT1f0T/gX8BrwZQuNL3yiIAAAAASUVORK5CYII="
            alt="chat"
          ></img>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <a
              href="https://github.com/sheikhamir1/chat-buddy/tree/master"
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
              href="https://github.com/sheikhamir1/chat-buddy/tree/master"
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
          Chat Buddy
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          <p class="tagline">
            Real-time global chat app built with modern web tech.
          </p>

          <p>
            <strong>Chat Buddy</strong> lets users chat with anyone around the
            world. Built with <strong>React</strong>, <strong>Node.js</strong>,
            and <strong>MongoDB</strong>, it supports real-time messaging,
            Google OAuth, and over 30 themes for a fully customized experience.
          </p>

          <h2>🔧 Tech Stack</h2>
          <ul>
            <li>
              <strong>Frontend:</strong> React, Vite, TailwindCSS, DaisyUI,
              Zustand, React Router, React Query
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express, MongoDB, JWT,
              Socket.IO, Cloudinary, Google OAuth
            </li>
          </ul>
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 py-1 px-2 rounded-md">
            React
          </span>
          <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 py-1 px-2 rounded-md">
            Zustand
          </span>
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-md">
            React Query
          </span>
          <span className="text-xs bg-blue-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-1 px-2 rounded-md">
            TailwindCSS
          </span>
          <span className="text-xs bg-blue-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 py-1 px-2 rounded-md">
            DaisyUI
          </span>
          <span className="text-xs bg-blue-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 py-1 px-2 rounded-md">
            Node.js
          </span>
          <span className="text-xs bg-blue-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 py-1 px-2 rounded-md">
            Express
          </span>
          <span className="text-xs bg-blue-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 py-1 px-2 rounded-md">
            MongoDB
          </span>
          <span className="text-xs bg-blue-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 py-1 px-2 rounded-md">
            JWT
          </span>
          <span className="text-xs bg-blue-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 py-1 px-2 rounded-md">
            Socket.IO
          </span>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="https://github.com/sheikhamir1/chat-buddy/tree/master"
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
