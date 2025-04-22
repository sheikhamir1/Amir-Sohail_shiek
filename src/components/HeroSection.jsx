// src/components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-neutral-900 pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* <!-- Image on the left (mobile: top) --> */}
          <div className="w-full md:w-5/12">
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-xl">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 dark:opacity-20"></div> */}
              <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                <img src="me.jpg" alt="my photo" />
              </div>
            </div>
          </div>

          {/* <!-- Introduction on the right (mobile: bottom) --> */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <div className="animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-4">
                Web Developer & Web Security Specialist
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                  Amir Sohail Shiek
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                As a Web Developer and Web Security Specialist, I combine
                technical expertise in building dynamic, responsive websites
                with a deep understanding of web security best practices. I
                design user-friendly interfaces while ensuring robust security
                measures to protect data and maintain privacy. With a passion
                for both development and security, I deliver innovative, safe,
                and high-performance solutions for the web.
              </p>

              <div
                className="flex flex-col flex-wrap sm:flex-row justify-between md:justify-start gap-4 text-white"
                id="el-dnqyn5cm"
              >
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  id="el-qhnkjyot"
                >
                  Contact Me
                </a>
                <a
                  href="#demo-projects"
                  className="px-6 py-3 bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 rounded-lg font-medium transition-colors duration-300"
                  id="el-eof9ycvy"
                >
                  Live Projects
                </a>
                <a
                  href="https://github.com/sheikhamir1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                  id="el-v81vgss3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    id="el-4gez7ton"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      id="el-zfhov8e2"
                    ></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* <!-- Social Links --> */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/sheikhamir1"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/amir-sohail-shiek/"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sheikh_fitness01/"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="instagram"
                target="_blank"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.211 0 3.585.012 4.85.07 1.213.059 2.335.295 3.207 1.168.872.872 1.109 1.994 1.168 3.207.058 1.265.07 1.639.07 4.85s-.012 3.585-.07 4.85c-.059 1.213-.295 2.335-1.168 3.207-.872.872-1.994 1.109-3.207 1.168-1.265.058-1.639.07-4.85.07s-3.585-.012-4.85-.07c-1.213-.059-2.335-.295-3.207-1.168-.872-.872-1.109-1.994-1.168-3.207-.058-1.265-.07-1.639-.07-4.85s.012-3.585.07-4.85c.059-1.213.295-2.335 1.168-3.207.872-.872 1.994-1.109 3.207-1.168 1.265-.058 1.639-.07 4.85-.07zm0-2.163c-3.228 0-3.617.013-4.88.072-1.276.059-2.396.308-3.318 1.23-.922.922-1.171 2.042-1.23 3.318-.059 1.263-.072 1.652-.072 4.88 0 3.228.013 3.617.072 4.88.059 1.276.308 2.396 1.23 3.318.922.922 2.042 1.171 3.318 1.23 1.263.059 1.652.072 4.88.072s3.617-.013 4.88-.072c1.276-.059 2.396-.308 3.318-1.23.922-.922 1.171-2.042 1.23-3.318.059-1.263.072-1.652.072-4.88 0-3.228-.013-3.617-.072-4.88-.059-1.276-.308-2.396-1.23-3.318-.922-.922-2.042-1.171-3.318-1.23-1.263-.059-1.652-.072-4.88-.072zm0 5.838a6.195 6.195 0 1 0 6.195 6.195 6.194 6.194 0 0 0-6.195-6.195zm0 10.662a4.467 4.467 0 1 1 4.467-4.467 4.467 4.467 0 0 1-4.467 4.467zm6.219-10.254a1.44 1.44 0 1 0-1.44-1.44 1.44 1.44 0 0 0 1.44 1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Scroll down indicator --> */}
        <div className="hidden md:flex justify-center mt-16">
          <a
            href="#about"
            className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-gray-200 dark:border-neutral-700 text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
