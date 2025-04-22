import React from "react";

export function Design() {
  return (
    <div id="design-content" className="tech-content ">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Design Tools
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
          {/* <!-- Figma --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z" />
                <path d="M11.264 15.297V8.981H6.676c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h2.49v-2.664z" />
                <path d="M15.852 24h-4.588v-8.702h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.212-4.49 4.212z" />
                <path d="M6.676 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h2.49v8.98h-2.49z" />
                <path d="M11.264 8.981V0h-4.59C4.2 0 2.184 2.015 2.184 4.49s2.014 4.491 4.49 4.491h4.59z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Figma
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-pink-600 dark:bg-pink-500 h-1.5 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>

          {/* <!-- Adobe XD --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3z" />
                <path
                  d="M10.15 7.3l-1.2 4.6-1.2-4.6H5.35l2.3 7.3v.05l.1.4v.05l.05.1v.05h2.8l3.4-8H11.4L10.2 7.3h-.05zM16.75 11.9c0 1.5.7 2.25 2.1 2.25.7 0 1.2-.05 1.7-.25v-1.8c-.35.2-.7.35-1.05.35-.7 0-1-.4-1-1.2v-2.4h2.15V7.3h-2.15V5.2h-1.75v2.1h-1.25v1.55h1.25v3.05z"
                  fill="#fff"
                />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Adobe XD
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-pink-600 dark:bg-pink-500 h-1.5 rounded-full"
                style={{ width: "88%" }}
              ></div>
            </div>
          </div>

          {/* <!-- Photoshop --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.85 8.525c-.35 0-.65.05-.8.1v2.4c.15.05.35.05.6.05 1 0 1.6-.5 1.6-1.35.05-.8-.45-1.2-1.4-1.2zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3z" />
                <path
                  d="M10.2 12.2c-.6 0-1.05-.05-1.3-.1v4.2H7.15v-7.8c.55-.1 1.3-.15 2.35-.15 1.1 0 1.9.2 2.4.6.5.4.8 1.05.8 1.85 0 .8-.3 1.45-.8 1.9-.55.5-1.35.7-2.7.7zm7.2-1.95c-.5-.25-1.05-.4-1.05-.8 0-.3.25-.5.75-.5.5 0 .95.2 1.15.35l.25-1.35c-.25-.15-.75-.35-1.4-.35-1.3 0-2.2.8-2.2 1.85 0 .9.65 1.5 1.5 1.8.6.25 1.05.5 1.05.95 0 .35-.3.6-.9.6-.45 0-1.1-.2-1.4-.4l-.25 1.4c.3.2.95.4 1.65.4 1.45 0 2.35-.85 2.35-1.95-.05-1-.65-1.55-1.5-2z"
                  fill="#fff"
                />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Photoshop
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                style={{ width: " 85%" }}
              ></div>
            </div>
          </div>

          {/* <!-- Illustrator --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3z" />
                <path
                  d="M17.65 14.95l-.55-2.05h-2.4l-.55 2.05h-1.7l2.35-8h2.25l2.4 8h-1.8zM16.7 11.3c-.5-1.9-.8-3-.9-3.4h-.05c-.1.45-.3 1.5-.85 3.4h1.8zM9.65 8.5c.35 0 .6.05.8.1l.2-1.35c-.25-.15-.65-.2-1.05-.2-.55 0-1.1.15-1.5.5-.4.35-.7.85-.9 1.45-.2.6-.3 1.5-.3 2.8 0 1.7.3 2.95.85 3.65.55.7 1.35 1.05 2.35 1.05.4 0 .85-.1 1.3-.25l-.15-1.35c-.3.15-.55.2-.85.2-.5 0-.85-.2-1.1-.55-.3-.45-.4-1.35-.4-2.7 0-1.4.15-2.35.4-2.85.15-.3.45-.5.85-.5z"
                  fill="#fff"
                />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Illustrator
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-amber-600 dark:bg-amber-500 h-1.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          {/* <!-- Sketch --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 1.5L24 12 12 22.5 0 12 12 1.5zm6.3 9L12 22.5 5.7 10.5h12.6z" />
                <path d="M12 22.5L5.7 10.5 1.5 9 12 1.5v21z" />
                <path d="M12 22.5L18.3 10.5 22.5 9 12 1.5v21z" />
                <path d="M5.7 10.5L12 1.5 18.3 10.5H5.7z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Sketch
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-amber-600 dark:bg-amber-500 h-1.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
