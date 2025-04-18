// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div id="root">
      <section id="about" className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4" id="el-vh2a3jxu">
          <div className="text-center mb-12" id="el-ve1cwwzk">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800 dark:text-white"
              id="el-dt1aepgg"
            >
              About Me
            </h2>
            <div
              className="w-20 h-1 bg-blue-500 mx-auto mb-6"
              id="el-tlxh6qmo"
            ></div>
            <p
              className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
              id="el-3u42c48q"
            >
              A passionate developer with expertise in full-stack development
              and cybersecurity
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            id="el-ktuq6dss"
          >
            {/* <!-- Professional Bio --> */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neutral-800 dark:text-white">
                My Professional Journey
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                I am a Full Stack Web Developer and Web Security Specialist
                currently pursuing a Master's in Computer Applications. My
                journey in web development began with a focus on frontend
                technologies, where I mastered HTML, CSS, and JavaScript. I then
                leveled up my skills by learning frameworks like Bootstrap,
                Tailwind CSS, and React.js, along with using DaisyUI to enhance
                my projects. After building a strong foundation in frontend
                development, I expanded my skill set to backend technologies,
                specializing in Node.js, Express.js, and MongoDB. I became
                proficient in the MVC model, REST APIs, and implementing
                security features such as Authentication and Authorization.
                Additionally, I learned to use Git and GitHub for version
                control, which helped me collaborate on numerous projects and
                manage my codebase efficiently. I have created various projects
                to showcase my skills, including live demos where viewers can
                interact with the live websites and explore the code on GitHub.
                I also hold several certifications in web development, including
                JavaScript, React.js, MongoDB, Node.js, Frontend Development,
                and Full Stack Development. Alongside my web development skills,
                I have deep knowledge of Cybersecurity. I am certified in
                Ethical Hacking and Cybersecurity Training, and I specialize in
                Web Penetration Testing. I use tools like Burp Suite, Nmap, and
                adhere to the OWASP Top 10 to perform comprehensive
                vulnerability assessments on both frontend and backend systems.
                I’ve conducted testing and auditing on over 50 of the most
                dangerous web vulnerabilities. Currently, I’m looking for
                exciting projects to collaborate on, while continuing my studies
                and advancing my expertise in both development and
                cybersecurity.
              </p>

              {/* <!-- Contact Information --> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-500 dark:text-neutral-400">
                      Experience
                    </h4>
                    <p className="font-medium text-neutral-800 dark:text-white">
                      4+ Years
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-500 dark:text-neutral-400">
                      Phone
                    </h4>
                    <p className="font-medium text-neutral-800 dark:text-white">
                      +91 8017028827{" "}
                      <span className="text-sm text-gray-500">
                        {" "}
                        (always WhatsApp Me first)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-500 dark:text-neutral-400">
                      Email
                    </h4>
                    <p className="font-medium text-neutral-800 dark:text-white">
                      amirsohail898198@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-500 dark:text-neutral-400">
                      Location
                    </h4>
                    <p className="font-medium text-neutral-800 dark:text-white">
                      India, Kolkata
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://www.linkedin.com/in/amir-sohail-shiek/"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get In Touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Skills & Expertise Card --> */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-neutral-700">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-white">
                technology`s i use in my work
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {/* <!-- Technical Skills Cards --> */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-neutral-800/80 dark:to-blue-900/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-blue-100/50 dark:border-blue-800/30 hover:border-blue-200 dark:hover:border-blue-800/70">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="ml-4 text-xl font-semibold text-neutral-800 dark:text-white">
                      Front-End Development
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Html5/Css3
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Javascript
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Bootstraps
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Tailwind
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Daisy UI
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Flowbite
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Typescript
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      React
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Zustand
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Tanstack
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800/60">
                      Socket.io
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-neutral-800/80 dark:to-green-900/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-green-100/50 dark:border-green-800/30 hover:border-green-200 dark:hover:border-green-800/70">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="ml-4 text-xl font-semibold text-neutral-800 dark:text-white">
                      Back-End Development
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Node.js
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Express
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Restfull Api
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Graphql Api
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      API Design
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Authentication
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Authorization
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      bcryptjs
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Web sockets
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Cors
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Jwt
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      multer
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Python
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-all hover:bg-green-200 dark:hover:bg-green-800/60">
                      Django
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium transition-all hover:bg-purple-200 dark:hover:bg-purple-800/60">
                        MongoDB
                      </span>
                      <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium transition-all hover:bg-purple-200 dark:hover:bg-purple-800/60">
                        Mongoose
                      </span>
                      {/* <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium transition-all hover:bg-purple-200 dark:hover:bg-purple-800/60">
                        MySQL
                      </span> */}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-neutral-800/80 dark:to-red-900/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-red-100/50 dark:border-red-800/30 hover:border-red-200 dark:hover:border-red-800/70">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center text-white shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <h4 className="ml-4 text-xl font-semibold text-neutral-800 dark:text-white">
                        Security
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1.5 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full text-sm font-medium transition-all hover:bg-red-200 dark:hover:bg-red-800/60">
                        Pen Testing
                      </span>
                      <span className="px-3 py-1.5 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full text-sm font-medium transition-all hover:bg-red-200 dark:hover:bg-red-800/60">
                        Auth Systems
                      </span>
                      <span className="px-3 py-1.5 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full text-sm font-medium transition-all hover:bg-red-200 dark:hover:bg-red-800/60">
                        Encryption
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Professional Skills --> */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-5 text-neutral-700 dark:text-neutral-200">
                  Professional Skills
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-neutral-100 dark:bg-neutral-700/70 px-4 py-3.5 rounded-lg text-center transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800/70 transform hover:-translate-y-0.5">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      Problem Solving
                    </span>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-700/70 px-4 py-3.5 rounded-lg text-center transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800/70 transform hover:-translate-y-0.5">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      Team Leadership
                    </span>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-700/70 px-4 py-3.5 rounded-lg text-center transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800/70 transform hover:-translate-y-0.5">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      Agile Methods
                    </span>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-700/70 px-4 py-3.5 rounded-lg text-center transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800/70 transform hover:-translate-y-0.5">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      CI/CD Pipeline
                    </span>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-700/70 px-4 py-3.5 rounded-lg text-center transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800/70 transform hover:-translate-y-0.5">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      Code Review
                    </span>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-700/70 px-4 py-3.5 rounded-lg text-center transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800/70 transform hover:-translate-y-0.5">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      Documentation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
