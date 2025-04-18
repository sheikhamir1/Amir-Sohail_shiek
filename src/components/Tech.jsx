import React from "react";

export function Tech() {
  return (
    <>
      {/* tech */}

      <div id="root">
        <section
          id="technologies"
          className="py-20 bg-gray-50 dark:bg-neutral-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* <!-- Section heading --> */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies & Skills
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Here are the technologies and tools I use to bring ideas to
                life.
              </p>
              <div className="w-20 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded mt-6"></div>
            </div>

            {/* <!-- Tech categories tabs --> */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                className="tech-tab px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="frontend"
              >
                Frontend
              </button>
              <button
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="backend"
              >
                Backend
              </button>
              <button
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="mobile"
              >
                Mobile
              </button>
              <button
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="design"
              >
                Design
              </button>
              <button
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="devops"
              >
                DevOps
              </button>
            </div>

            {/* <!-- Tech content panels --> */}
            <div className="tech-content-container">
              {/* <!-- Frontend Technologies --> */}
              <div id="frontend-content" className="tech-content block">
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Frontend Development
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
                    {/* <!-- HTML --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          fill="currentColor"
                        >
                          <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        HTML5
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-orange-600 dark:bg-orange-500 h-1.5 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- CSS --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          fill="currentColor"
                        >
                          <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        CSS3
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- JavaScript --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        JavaScript
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-yellow-600 dark:bg-yellow-500 h-1.5 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- React --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        React
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Vue.js --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Vue.js
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-green-600 dark:bg-green-500 h-1.5 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Tailwind CSS --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                        >
                          <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Tailwind CSS
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-teal-600 dark:bg-teal-500 h-1.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- TypeScript --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path d="M480 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM248 384.03c0 11.84-9.55 21.42-21.38 21.42a21.43 21.43 0 01-21.38-21.42V247.29h-49.96c-11.84 0-21.38-9.59-21.38-21.42 0-11.84 9.55-21.42 21.38-21.42H311.7c11.84 0 21.38 9.59 21.38 21.42 0 11.84-9.55 21.42-21.38 21.42h-42.33v136.74zM16 132v-60c0-6.63 5.37-12 12-12h456c6.63 0 12 5.37 12 12v60c0 6.63-5.37 12-12 12H28c-6.63 0-12-5.37-12-12zm272 96c0-11.84 9.55-21.42 21.38-21.42 11.84 0 21.38 9.59 21.38 21.42v155.58c0 11.84-9.55 21.42-21.38 21.42-11.84 0-21.38-9.59-21.38-21.42V228z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        TypeScript
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Next.js --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Next.js
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-gray-800 dark:bg-gray-400 h-1.5 rounded-full"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Redux --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.854-4.957-1.422-7.335zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Redux
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-purple-600 dark:bg-purple-500 h-1.5 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- SASS --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          fill="currentColor"
                        >
                          <path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.3 0-43.69 20-56.18 38.4-7.9 4.3-24.59 13.5-42.49 23.1-6.8 3.8-13.8 7.7-20.1 11.2-.5-.5-.8-1-1.2-1.4-30.4-32.5-86.6-55.5-84.2-99.1.9-15.7 6.1-57 104.6-107.2 80.5-41.09 144.8-29.66 155.8-4.7 15.9 35.86-34.2 102.6-117.5 112.2-31.7 3.7-48.4-8.7-52.5-13.3-4.4-4.8-5-5-6.7-4.1-2.7 1.6-1 6.1 0 8.8 2.6 6.8 13.3 18.8 31.4 24.7 16 5.3 54.9 8.2 102-10.1 52.7-20.5 93.9-77.7 81.8-125.8-12.2-48.8-91.9-64.8-167.4-37.6-44.9 16.2-93.4 41.5-128.4 74.7-41.5 39.5-48.2 74-45.4 88.3 9.7 50.2 78.7 82.9 106.1 107.1-1.4.8-2.7 1.5-3.8 2.1-13.9 6.9-66.9 34.6-80.1 63.9-15 33.2 2.4 57 13.9 60.2 35.7 9.9 72.4-7.9 92.1-37.3 19.7-29.4 17.3-67.5 8.2-85-0.1-.2-0.2-0.4-0.4-0.6 3.6-2.1 7.4-4.2 11.1-6.4 7.2-4.2 14.3-8.1 20.4-11.3 3.3 11.9 6.6 23.3 12 34.4 5.4 11 16.5 25.3 25.6 25.3a9 9 0 0 0 4.3-1.1c5.9-3.2 10.8-15.5 9.8-28.1a142.91 142.91 0 0 0-7.1-31.9c.1-.3.3-.6.4-1 5.8-14.6 19.7-53.1 35.9-52.2 14.1.8 18.2 13 14 35.6s-15.5 39.3-3.7 42.7c3.3.9 6.7-1.1 8.6-2.5 3.4-2.1 7.6-5.5 11.5-13.5 7.5-15.5 13.9-37.3 13.9-37.3s-8.2 45.5 14.1 45.5c8.1 0 16.2-10.5 19.8-15.8v.1s.2-.3.6-1a36.47 36.47 0 0 0 1.6-2.6v-.3c3.2-5.6 10.4-18.3 21.1-39.4 13.8-27.2 27.1-61.2 27.1-61.2a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2.1.1.1.2.2.3 3-4.1 6.4-8.3 9.9-12.5 6.4-7.7 13.9-16.5 22.4-26.3a207.08 207.08 0 0 0 7 26.7c1.8 5.6 5.2 11.7 8.3 17.6-13.3 10.8-21.5 23.3-24.4 31.5-5.3 15.1-1.2 22.1 6.6 23.6 3.5.7 8.6-.9 12.3-2.4 4.7-1.6 10.3-4.2 15.5-8.1a40.1 40.1 0 0 0 20.2-35.9c-.3-8.8-3.2-17.5-6.7-25.8.3-.4.5-.8.8-1.3 12.2-17.8 21.6-37.3 21.6-37.3a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.1 17 11.4 25.6-18.5 15.1-30.1 32.6-34.1 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.6-11.1c12.5-9.2 24.6-22.1 23.8-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.1-10.2 62.1-7.2 55.7 6.5 66.6 41.3 64.5 55.8-2.1 14.6-13.8 22.6-17.7 25-3.9 2.3-5.1 3.1-4.8 4.8.5 2.5 2.3 2.4 5.6 1.9 4.6-.8 29.1-11.8 30.2-38.7 1.6-34-31.1-71.4-89-71.1zM121.74 436.63c-18.79 20.49-45.11 28.19-56.53 21.69-12.23-6.9-7.39-36.67 15.89-58.19 14.2-13.14 32.63-25.36 44.8-32.86 2.78-1.7 6.89-4.19 11.9-7.19a3.7 3.7 0 0 1 .41-.25c1.09-.63 2.29-1.36 3.58-2.19 10.4 38.26.5 71.69-20.05 79zM272.01 318.64c-6.5 15.9-20.2 56.5-28.5 54.3-7.1-1.9-11.4-32.7-1.4-63.1 5-15.4 15.6-33.9 21.9-41 10.1-11.3 21.2-15.1 23.8-10.4 3.4 6-12.3 49.7-15.8 60.2zm115.89 40.55c-2.8 1.4-5.3 2.4-6.5 1.7-0.9-.5.1-2.4.1-2.4s13.1-14 18.2-20.5c3-3.8 6.4-8.2 10.2-13.3v1.4c0 17.1-16.6 28.6-22 33.1zm74.5-16.54c-2.1-1.5-1.7-6.2 5.2-21 2.7-5.8 8.9-15.5 19.6-24.8a36.32 36.32 0 0 1 1.9 10.8c0 22.7-16.3 31.1-26.7 35z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        SASS
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-pink-600 dark:bg-pink-500 h-1.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Backend Technologies --> */}
              <div id="backend-content" className="tech-content hidden">
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Backend Development
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
                    {/* <!-- Node.js --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Node.js
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-green-600 dark:bg-green-500 h-1.5 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Express.js --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                        >
                          <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.975-5.248c.623-3.388 1.345-6.73 2.538-9.956.41-1.08.75-1.172 1.512-.624a30.414 30.414 0 0 1 4.745 3.85c.522.488.854.426 1.297-.094a15.182 15.182 0 0 1 2.58-2.4c.8-.583 1.39-.424 1.713.518 2.32 6.775 2.913 13.686 2.048 20.8-.08.668-.477 1.008-1 .876-.533-.136-1.07-.372-1.566-.63-.38-.2-.73-.16-1.102.07-1.68 1.04-3.444 1.915-5.39 2.444-.736.2-1.05-.032-1.197-.746-.74-3.59-1.83-7.09-3.453-10.4-.883-1.81-1.88-3.566-3.225-5.073-.516-.578-.48-.964-.06-1.535l.602 1.123c1.18 2.14 2.37 4.274 3.14 6.582.756 2.27 1.266 4.61 1.776 6.947.16.732.45.792 1.104.37 2.014-1.296 3.49-3.053 4.374-5.3.208-.53.224-1.18.196-1.777-.116-2.51-1.157-4.675-2.616-6.64-.532-.714-1.16-1.35-1.745-2.02-.274-.313-.537-.65-.873-1.06l.507-.038c2.13-.235 4.253-.135 6.34.33a5.19 5.19 0 0 0 .672.114c.95.1 1.072.374.297 1.043a10.727 10.727 0 0 1-2.145 1.588c-.657.374-.7.644-.19 1.325 1.61 2.15 2.45 4.596 2.64 7.26.86 12.54-10.184 15.35-17.386 13.605-.175-.043-.35-.143-.507-.122a.465.465 0 0 0-.367.34c-.05.252.183.5.323.75l.348.11c2.766.763 5.562.934 8.37.58 6.44-.81 11.347-3.84 13.317-10.343 1.267-4.183.034-9.743-3.675-13.89C23.566 3.574 20.366 2.03 16.8 1.388a22.753 22.753 0 0 0-5.664-.115c-5.042.414-9.323 2.366-12.396 6.32-2.84 3.65-3.436 7.866-2.75 12.345.15.952.4 1.88.74 2.94-.114-.937-.14-1.712-.126-2.485a27.272 27.272 0 0 1 .493-5.484c.384-1.927.874-3.83 1.45-5.708.648-2.13 1.333-4.256 2.05-6.36.318-.934.74-1.837 1.13-2.78.098.02.145.014.152.034.094.25.18.504.258.76l-1.134 4.983c-.554 2.07-1.198 4.11-1.686 6.2-.346 1.483-.547 3-.817 4.5z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Express.js
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-gray-800 dark:bg-gray-400 h-1.5 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- MongoDB --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.802-.436-1.222-.105-.558-.105-1.133-.105-1.7 0-.506 0-1.01.07-1.5.07-.53.052-1.06-.072-1.58-.173-.616-.423-1.2-.767-1.76-.575-.905-1.215-1.77-1.9-2.598-.21-.28-.558-.487-.627-.83-.07-.383.174-.523.436-.662.76-.35 1.456-.82 2.153-1.308.21-.14.366-.36.488-.575.468-.767.837-1.57 1.047-2.418.314-1.37.314-2.737-.105-4.106-.28-.906-.767-1.73-1.342-2.453-.59-.767-1.343-1.394-2.154-1.96-.21-.14-.384-.35-.558-.523-.243-.278-.47-.557-.662-.87-.07-.105-.183-.192-.21-.383zm-3.054 8.8c-.06-.12-.137-.23-.228-.347l-.347-.382c-.585-.632-1.1-1.333-1.512-2.102-1.013-1.9-1.427-4.01-1.306-6.13.037-.718.12-1.431.347-2.126.14-.438.155-.68-.174-.96-.347-.302-.382-.645-.94-.76-.58-.127-1.2-.652-1.84-.175S6.2.874 5.958 1.273c-.227.4-.436.838-.575 1.292-.28.89-.468 1.8-.558 2.72-.243 2.453 0 4.853.906 7.132.255.627.542 1.256.976 1.764l.208.3c.255.338.24.414-.255.737-.297.196-.553.454-.766.766-.505.77-.856 1.648-1.083 2.567-.314 1.308-.314 2.65 0 3.957.314 1.308.976 2.453 1.865 3.415.433.487.924.94 1.448 1.36.347.227.765.42 1.083.662.153.105.334.21.4.42.06.174-.048.35-.133.49-.087.14-.21.243-.347.313-.78.262-.827 1.74-.106 2.095.21.087.366.156.533.21.347.106.662.072.976-.106.145-.86.27-.2.37-.327.263-.402.453-.873.567-1.363.37-1.255.152-2.532-.566-3.618-.21-.313-.21-.522 0-.8.563-.755 1.1-1.53 1.517-2.372.21-.4.4-.836.513-1.292.105-.385.07-.77-.07-1.156-.07-.21-.183-.4-.296-.59-.21-.384-.488-.645-.767-.94-.494-.546-1.01-1.083-1.413-1.67-.452-.766-.835-1.607-1.032-2.453-.07-.314-.087-.627-.087-.906-.016-.767.07-1.516.244-2.283.033-.156.102-.295.2-.41.21-.244.4-.487.644-.662.174-.07.296-.07.366.157.07.244.104.488.174.732.07.5.244.94.488 1.34.105.243.28.453.453.662.384.43.802.836 1.2 1.25.42.42.906.767 1.396 1.117.073.033.14.078.197.132.166.14.314.297.419.47.105.227.07.4-.105.627-.21.243-.487.4-.767.54-.28.142-.54.296-.8.47-.167.14-.314.315-.418.523-.244.454-.383.94-.418 1.448-.106.767-.035 1.5.244 2.21.144.35.328.683.557.98.194.21.42.383.663.524.244.152.244.152.069.384z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        MongoDB
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-green-600 dark:bg-green-500 h-1.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- GraphQL --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.428 1.299c-.812 0-1.312.685-1.312 1.377v1.004a7.913 7.913 0 00-5.261 3.04l-.87-.504a1.184 1.184 0 00-1.623.433L2.28 8.721a1.184 1.184 0 00.433 1.623l.867.503a7.916 7.916 0 000 6.078l-.867.5a1.184 1.184 0 00-.433 1.624l1.082 2.073a1.184 1.184 0 001.623.432l.87-.503a7.913 7.913 0 005.261 3.04v1.004c0 .692.5 1.377 1.312 1.377h2.144c.812 0 1.312-.685 1.312-1.377V23.09a7.913 7.913 0 005.26-3.04l.87.504a1.184 1.184 0 001.624-.433l1.082-2.072a1.184 1.184 0 00-.433-1.624l-.867-.5a7.916 7.916 0 000-6.078l.867-.503a1.184 1.184 0 00.433-1.623l-1.082-2.073a1.184 1.184 0 00-1.623-.433l-.87.504a7.913 7.913 0 00-5.261-3.04V2.676c0-.692-.5-1.377-1.312-1.377h-2.144zm1.07 7.812c1.678 0 3.157.646 4.034 1.636h-8.07c.879-.99 2.358-1.636 4.035-1.636zm-3.943 2.846h7.888v1.208H9.555v-1.208zm0 2.417h7.888v1.211H9.555v-1.211zm0 2.42h7.888c-.879.99-2.358 1.636-4.034 1.636-1.678 0-3.157-.646-4.035-1.636h.18z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        GraphQL
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-pink-600 dark:bg-pink-500 h-1.5 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Python --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Python
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Firebase --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3.89 15.673L6.255.461A.542.542 0 017.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 00-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 001.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984 14.3 7.148z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Firebase
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-yellow-600 dark:bg-yellow-500 h-1.5 rounded-full"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- PostgreSQL --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0499.7982-3.5508.1899-4.497-.9032-1.4054-2.2053-1.5442-2.5991-1.5442-.3951 0-1.1012.0877-1.6902.4212-.5928-.3351-1.3418-.5298-2.1555-.5298-1.2869 0-2.5324.5761-3.5458 1.6273-.5962-.1822-2.2248-.5905-3.5342-.1-.6576.2472-1.1886.7487-1.5783 1.4896-.3897-.125-.8440996-.1822-1.3198996-.1616-.7373.0317-1.4798.3388-2.1354.8818C4.2358 5.1587 3.6895 5.7353 3.312 6.4245c-.3371.6129-.5201 1.3351-.5201 2.0726 0 .1425.0094.2849.0284.4273-.254.0651-.6684.2165-.9523.5347-.3538.3946-.502.9472-.4461 1.6549.056.7056.2798 1.4803.6042 2.105.1804.3426.1878.4239.1196.775-.264.1388-.5695.3128-.7499.5479-.09.1172-.1995.2947-.1995.5129 0 .1552.0437.3138.1341.4892.1746.3395.5494.5128 1.114.5128.1073 0 .2197-.0062.3377-.0172 1.7036-.1576 2.6493.0633 3.1461.291-.094.3716-.283.75-.4999 1.0841-.2229.3449-.4555.7018-.6249 1.0604-.1902.4035-.3045.7891-.3045 1.0827 0 .2857.1046.5398.304.7362.1995.1964.4722.3099.7669.3099.4722 0 .9878-.253 1.3644-.5131.3743-.2572.7713-.6978 1.2195-1.3511.1513.3035.5157.5986 1.2787.5986.1356 0 .2851-.0094.4515-.0313.6325-.0772 1.0889-.2633 1.4259-.583.3255-.3079.5177-.7459.5744-1.3034.0058-.0569.0091-.1159.0102-.1761.4374.02.9389.0313 1.5402.0313 1.0812 0 1.9058-.0671 2.4598-.1996.7938-.19 1.5161-.5768 1.9655-1.0587.2967-.3166.4949-.6893.5698-1.0732.0346-.1778.0209-.3558-.0406-.5268m-1.981-10.338c.5326-.0282 1.2608.1324 1.6646.7333.4833.7198.2987 2.3932-.08 3.6432-.4343 1.4281-1.1761 3.0533-1.9219 4.5098-.1312-.3564-.3581-.7339-.6752-1.0364-.3903-.3731-.9297-.6524-1.598-.8279.5995-1.8406 1.0346-3.7953 1.2869-5.0124.1909-.9216.2499-1.6273.3056-1.9857l-.0009-.0001c.025-.1626.0438-.28.0784-.334.0355-.0561.0689-.0561.0094-.0561.1196-.0538.6035-.2695.9312-.2337m-6.4232.7584c.3903.0222.7493.1203 1.0754.2924-.507.4753-.9968 1.0555-1.4788 1.7459-.0338-.2009-.0739-.3986-.1204-.5919-.2188-.9278-.5337-1.5046-.6277-1.6753.3523.0718.7528.1629 1.1515.2289m-.1977 8.3246c-.0682.3924-.108.6999-.5609 1.2185-.4343.4951-.9332.7072-1.2099.7072-.0619 0-.1116-.0107-.1512-.0328-.0902-.0517-.1344-.1434-.1376-.2816-.019-.7584.7756-1.5569 1.3665-1.8431.2298-.1114.4544-.1747.6646-.1958.0311.1454.0595.290922.0851.4353l-.0566-.0077zm-5.6227-8.4045c.9857-.3708 2.5405.0678 3.1925.243-.075.0939-.188.2582-.3169.4846-.3676.6425-.7188 1.5062-.9035 2.2998-.2296 1.0028-.2387 2.0221-.2046 2.7452-.4249-.0855-.8655-.111-1.3043-.0429-.4608.0717-.8831.2347-1.2664.4446-.087-1.1213-.5417-4.5114.8032-6.1743m-2.7724 9.9722c-.5322.0772-1.0644.1337-1.5863.1694-.0768.0051-.1493.0078-.2177.0078-.238 0-.4485-.0379-.5276-.2288-.0394-.0951-.022-.1855.0517-.2643.1502-.1638.5836-.3094.5836-.3094s1.2608-.5286 2.2565-1.6702c.091-.105.1784-.2133.2602-.3211.3-.0389.561-.05.7875-.033.1284.0097.2518.0333.3718.0717-.2698.8114-.7296 2.1483-1.9797 2.5779m6.3939 2.2722c-.2015.1891-.4298.2795-.6941.2795-.1578 0-.3419-.0421-.5632-.1332l-.0134-.0056c-.1393-.058-.1959-.1367-.1959-.2337 0-.0833.0405-.194.1171-.319.1622-.2642.3782-.5103.5844-.7514.2276-.2653.4638-.5397.6362-.8315.0134.057.0295.1135.049.1689.0823.2349.2062.4201.35.5335-.091.1088-.1899.2144-.299.3199-.1284.1268-.2673.2507-.4151.3736m5.4991-.6761c-.1942.0293-.3824.0429-.5683.0429-.3766 0-.7242-.0535-1.0938-.1133.033-.1159.0451-.2343.0347-.3538-.0231-.2535-.1204-.4757-.2889-.6596-.1708-.1873-.4297-.3372-.7748-.4466.0762-.2823.2091-.5991.3656-.8855.0481-.0877.0987-.1746.1501-.2605l.0009-.0002c.1046.022.2086.0461.3131.0731.1513.0397.3033.0836.4553.1307.3431.1061.6986.2159.9617.2236.1277.0039.2213-.0142.2952-.0561.0723-.0409.1301-.1061.1575-.1996.0404-.1365.0247-.3188-.0435-.5.073.0217.1447.0475.2164.0772.5417.2264.9994.602 1.03 1.1677.0134.2531-.1103.565-.4142.8152Z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        PostgreSQL
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- PHP --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          fill="currentColor"
                        >
                          <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        PHP
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-indigo-600 dark:bg-indigo-500 h-1.5 rounded-full"
                          style={{ width: "65% " }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Mobile Development --> */}
              <div id="mobile-content" className="tech-content hidden">
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Mobile Development
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
                    {/* <!-- React Native --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        React Native
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "85% " }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Flutter --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Flutter
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-cyan-600 dark:bg-cyan-500 h-1.5 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Ionic --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22.922 7.027l-.103-.23-.169.188c-.408.464-.928.82-1.505 1.036l-.159.061.066.155a9.745 9.745 0 0 1 .75 3.759c0 5.405-4.397 9.806-9.806 9.806-5.409 0-9.802-4.397-9.802-9.802 0-5.405 4.402-9.806 9.806-9.806 1.467 0 2.883.319 4.2.947l.155.075.066-.159a3.046 3.046 0 0 1 .976-1.336l.197-.159-.235-.108A11.97 11.97 0 0 0 12 0C5.375 0 0 5.375 0 12c0 6.625 5.375 12 12 12s12-5.375 12-12c0-1.669-.347-3.277-.984-4.745l-.094-.228zM12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm9.5-3c0 1.381-1.119 2.5-2.5 2.5S16.5 5.881 16.5 4.5 17.619 2 19 2s2.5 1.119 2.5 2.5z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Ionic
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "65% " }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Swift --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21.984 16.348c.056-.112.056-.224.112-.336 1.346-5.272-1.851-11.44-7.347-14.693 2.412 3.253 3.365 7.122 2.524 10.599-.056.28-.168.503-.28.783-.112-.056-.224-.112-.335-.168-.392-.223-.951-.503-1.346-.671-2.803-1.398-5.272-1.06-7.459.783-.392.336-.672.672-1.008 1.06-.112.112-.224.224-.336.336-.336.392-.728.728-1.119 1.06-.056.056-.112.112-.224.168-.056.056-.112.112-.168.112-.448.392-.896.783-1.232 1.23-.392.448-.672.896-1.064 1.399l-.224.336c-.224.336-.448.672-.616 1.009-.112.224-.224.447-.28.671v.112c-.112.056-.112.168-.168.28-.056.112-.056.224-.112.336-.056.112 0 .224-.056.336v1.676c0 .112 0 .224.056.336 0 .112.056.224.112.336.056.112.112.168.168.28.056.056.112.112.224.168.112.056.168.112.28.112.112.056.224.056.336.112.168 0 .336 0 .504-.056.112 0 .224-.056.336-.112.112-.056.224-.112.336-.168h.056c.336-.224.616-.448.896-.728 1.064-1.063 1.96-2.07 3.589-2.82-.392 1.175-.728 2.019-1.232 2.915 3.813-2.3 7.515-1.9 9.923-.839 0-.11.112-.11.112-.167h.056c.112-.056.168-.112.28-.168.112-.056.168-.112.224-.168.112-.056.112-.112.168-.224.056-.056.112-.168.112-.224.056-.112.056-.224.112-.336.056-.112.056-.224.056-.336v-.392c.056-.224.056-.336.056-.448 0-.056-.056-.168-.112-.224 0-.112-.056-.224-.112-.336-.056-.112-.112-.168-.168-.28-.056-.056-.168-.112-.224-.168-.112-.056-.224-.112-.336-.112-.112-.056-.224-.056-.336-.056-.112 0-.28 0-.392.056-.112 0-.224.056-.336.112-.112.056-.168.112-.28.168-.056.056-.112.112-.168.224-.56.056-.56.112-.112.168z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Swift
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-orange-600 dark:bg-orange-500 h-1.5 rounded-full"
                          style={{ width: "53%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Kotlin --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1.3 24l11.3-11.5L24 24zM0 0h12L0 12.5zm13.4 0L0 14v10l12-12L24 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Kotlin
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-purple-600 dark:bg-purple-500 h-1.5 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Design Tools --> */}
              <div id="design-content" className="tech-content hidden">
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

              {/* <!-- DevOps Tools --> */}
              <div id="devops-content" className="tech-content hidden">
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    DevOps Tools
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
                    {/* <!-- Git --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Git
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-orange-600 dark:bg-orange-500 h-1.5 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Docker --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          fill="currentColor"
                        >
                          <path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Docker
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- AWS --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.75 11.35c-.33-.28-.81-.39-1.33-.39-.43 0-.9.08-1.36.23a11.55 11.55 0 0 0-.44.15v-.82c.37-.15.75-.27 1.09-.38.51-.17 1.11-.26 1.7-.26.87 0 1.61.18 2.13.5.55.35.82.95.82 1.8v3.47c0 .45.17.75.52.9l.21.09v.1c-.28.15-.54.22-.77.22-.35 0-.62-.07-.81-.21a1.1 1.1 0 0 1-.4-.69v-.02h-.03c-.6.75-1.45 1.13-2.52 1.13-.71 0-1.29-.2-1.71-.61-.43-.41-.64-.96-.64-1.65 0-.8.31-1.42.92-1.84.62-.42 1.45-.63 2.51-.63h1.43v-.46c0-.44-.1-.77-.28-.96zm-1.06 4.34c.37 0 .72-.1 1.05-.28.33-.2.6-.45.8-.75.01-.03.02-.11.04-.25.01-.14.02-.27.02-.4v-.87h-1.21c-.5 0-.91.11-1.21.34-.31.23-.47.56-.47.99 0 .34.1.61.3.81.18.18.42.28.7.28zm-9.47.77V7.5c.57-.11 1.28-.17 2.14-.17 1.08 0 1.9.22 2.45.67.54.44.81 1.07.81 1.89 0 .88-.3 1.6-.9 2.15-.6.55-1.43.83-2.47.83-.26 0-.45-.01-.57-.03v3.62c0 .35.05.61.14.77l.19.19.13.11v.12h-2.68v-.1c.31-.16.47-.46.47-.89v-5.45zm2.17-4.73c0 .15.13.28.4.38.28.1.5.16.7.16.41 0 .76-.14 1.03-.41.27-.28.41-.68.41-1.21 0-.94-.5-1.41-1.5-1.41-.35 0-.7.04-1.04.1v2.39zM1 13.85c.47.38 1.07.59 1.8.61.71.02 1.31-.15 1.79-.51.1-.07.18-.16.25-.26l.14-.18c.09-.14.17-.31.24-.5l.12.08a1.9 1.9 0 0 1 .03.64c-.05.21-.14.4-.28.57-.28.35-.66.62-1.16.82-.49.2-1.04.3-1.65.3-.98 0-1.76-.3-2.33-.9C.14 13.92 0 13.18 0 12.32c0-.9.18-1.66.55-2.3.46-.81 1.25-1.22 2.38-1.22 1.74 0 2.62 1.04 2.62 3.11H1.44c0 .8.18 1.45.55 1.94zm2.21-2.64c0-.54-.11-.96-.32-1.25-.21-.3-.52-.45-.95-.45-.4 0-.73.13-.98.4-.25.27-.4.67-.46 1.19v.11h2.71z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        AWS
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-amber-600 dark:bg-amber-500 h-1.5 rounded-full"
                          style={{ width: " 70%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Jenkins --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.34 15.37c-.22-.28-.04-1.56-.04-1.56s-.29-.57-.45-.97c-.25-.62-1.03-.65-1.03-.65-.01.5.32.85.32.85-.33.17-.42.97-.42.97-.06.89.54 1.38.54 1.38.21.85.55.83.55.83.26.92.82.79.82.79.74.37 1.23-.08 1.23-.08.93.47 1.31-.18 1.31-.18 1.39.32 1.7-.79 1.7-.79 1.72.23 1.95-1.07 1.95-1.07 1.86.04 1.67-1.37 1.67-1.37 1.85-.31 1.57-1.5 1.57-1.5 1.32-1.57.3-2.17.3-2.17-.23-1.41-1.26-1.25-1.26-1.25-.41-.52-1.47-.6-1.47-.6-.73-1.53-1.92-1.11-1.92-1.11-1.62.09-1.79.91-1.79.91-1.51-.29-1.81.94-1.81.94-1.67-.11-1.73 1.16-1.73 1.16-1.08 1.2.23 2.12.23 2.12.9.41.48 1.82.48 1.82.11 1 .94 1.32.94 1.32-.17.87.21 1.05.21 1.05-.18.41-.35 1.27-.35 1.27ZM22.28 13.32c-.28-.49-.7-.49-.7-.49-.31-.8-.85-.55-.85-.55.04-1.17-.82-1.32-.82-1.32-1.15-.37-1.32.7-1.32.7-1.17.11-1.17.95-1.17.95-1.25.05-1.34 1.13-1.34 1.13-1.01.76-.53 1.67-.53 1.67.42.77 1.04.55 1.04.55-.14.62.27.81.27.81-.42.67.16.96.16.96.44.55.81.26.81.26.71.65 1.78.02 1.78.02 1.75.9 2.24-.4 2.24-.4.99.29 1.36-.48 1.36-.48 1.28-.59.94-1.45.94-1.45.53-.68-.05-1.11-.05-1.11.49-.68-.18-1.25-.82-1.25ZM6.97 3.97c-1.26-.46-1.5.83-1.5.83-1.06-.2-1.45.83-1.45.83-1.39.38-.83 1.34-.83 1.34.16 1.13 1.3 1.33 1.3 1.33 1.09 1.24 1.83.34 1.83.34.68.88 1.94.09 1.94.09 1.08.88 1.84.04 1.84.04 1.78.83 2.24-.58 2.24-.58 1.76.2 1.67-1.35 1.67-1.35 1.79-.13 1.32-1.61 1.32-1.61.7-.17.54-1.35.54-1.35-1.16-1.79-2.24-1.4-2.24-1.4-.77-.9-1.96-.52-1.96-.52-1.12-1.24-2.09-.45-2.09-.45-.84-.44-1.61.46-1.61.46Z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Jenkins
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-gray-800 dark:bg-gray-400 h-1.5 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- Kubernetes --> */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.004 0a1.88 1.88 0 0 0-.742.174l-9 3.55A1.79 1.79 0 0 0 1.003 5.2v13.35a1.92 1.92 0 0 0 1.35 1.65l9.05 3.42c.35.14.77.15 1.2 0l9.05-3.42a1.92 1.92 0 0 0 1.35-1.65V5.2a1.79 1.79 0 0 0-1.259-1.476l-9-3.55a1.88 1.88 0 0 0-.742-.174ZM12 3.5a.48.48 0 0 1 .15 0 .52.52 0 0 1 .44.5v.15a6.92 6.92 0 0 1 1.35.4 11.4 11.4 0 0 1 .7-1c.15-.18.33-.34.55-.34a.6.6 0 0 1 .5.24l.84.97c.19.22.12.42 0 .6a.5.5 0 0 1-.22.18c-.1.4-.36.73-.7 1a10.7 10.7 0 0 1 .7 1.2c.37-.08.72-.1 1-.1h.1a.5.5 0 0 1 .55.4l.1 1.25a.47.47 0 0 1-.36.54h-.14a6.58 6.58 0 0 1-1.15 0 8.3 8.3 0 0 1-.45 1.31c.13.1.24.19.35.28.16.14.25.34.18.55a.5.5 0 0 1-.18.22l-1.07.7a.48.48 0 0 1-.66-.1.54.54 0 0 1-.1-.18c-.08-.17-.1-.42-.08-.74a8.8 8.8 0 0 1-1.25.53c0 .16-.1.33-.15.47a.58.58 0 0 1-.5.44.5.5 0 0 1-.24 0l-1.2-.42a.45.45 0 0 1-.33-.55.5.5 0 0 1 .1-.22c.08-.13.22-.24.4-.34a9.9 9.9 0 0 1-1.1-1.11 5.28 5.28 0 0 1-.63.5.41.41 0 0 1-.24.08.53.53 0 0 1-.46-.24.6.6 0 0 1-.05-.24l-.1-1.33a.5.5 0 0 1 .5-.5h.12c.2 0 .43.08.65.17a8.6 8.6 0 0 1-.09-1.7c-.23-.04-.47-.06-.7-.13a.49.49 0 0 1-.4-.45V6.2a.46.46 0 0 1 .4-.54c.27-.06.55 0 .86.12.09-.5.32-.98.55-1.35a3.6 3.6 0 0 1-.4-.52.5.5 0 0 1 0-.63.5.5 0 0 1 .22-.18l1.24-.55A.48.48 0 0 1 12 3.5Zm.168 6.645a1.917 1.917 0 0 0-1.916 1.917 1.917 1.917 0 0 0 1.916 1.916 1.917 1.917 0 0 0 1.917-1.916 1.917 1.917 0 0 0-1.917-1.917ZM7.01 17.2a.52.52 0 0 1 .527.66c-.095.535-.202 1.058-.344 1.593a.555.555 0 0 1-.536.419h-.055a.555.555 0 0 1-.533-.455c-.117-.55-.19-1.09-.24-1.64a.588.588 0 0 1 .467-.576 1.354 1.354 0 0 1 .714-.001Zm10.086 0a1.36 1.36 0 0 1 .669.001.588.588 0 0 1 .467.576c-.05.55-.123 1.09-.24 1.64a.556.556 0 0 1-.533.455h-.055a.555.555 0 0 1-.535-.42c-.143-.534-.25-1.057-.345-1.591a.52.52 0 0 1 .572-.661Zm-5.043 1.845a2.369 2.369 0 0 1 .838.154c.5.198.702.52.8 1.006.062.306.195.894.32 1.347a.631.631 0 0 1-.311.722.56.56 0 0 1-.274.064.648.648 0 0 1-.583-.488 14.707 14.707 0 0 1-.359-1.571.677.677 0 0 0-.341-.48c-.347-.193-.791-.106-1.17.043a.56.56 0 0 1-.73-.237.617.617 0 0 1 .283-.825 2.952 2.952 0 0 1 1.527-.735Z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        Kubernetes
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
