import React from "react";

export function Bio() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-neutral-800 dark:text-white">
        My Professional Journey
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
        I am a Full Stack Web Developer and Web Security Specialist currently
        pursuing a Master's in Computer Applications. My journey in web
        development began with a focus on frontend technologies, where I
        mastered HTML, CSS, and JavaScript. I then leveled up my skills by
        learning frameworks like Bootstrap, Tailwind CSS, and React.js, along
        with using DaisyUI to enhance my projects. After building a strong
        foundation in frontend development, I expanded my skill set to backend
        technologies, specializing in Node.js, Express.js, and MongoDB. I became
        proficient in the MVC model, REST APIs, and implementing security
        features such as Authentication and Authorization. Additionally, I
        learned to use Git and GitHub for version control, which helped me
        collaborate on numerous projects and manage my codebase efficiently. I
        have created various projects to showcase my skills, including live
        demos where viewers can interact with the live websites and explore the
        code on GitHub. I also hold several certifications in web development,
        including JavaScript, React.js, MongoDB, Node.js, Frontend Development,
        and Full Stack Development. Alongside my web development skills, I have
        deep knowledge of Cybersecurity. I am certified in Ethical Hacking and
        Cybersecurity Training, and I specialize in Web Penetration Testing. I
        use tools like Burp Suite, Nmap, and adhere to the OWASP Top 10 to
        perform comprehensive vulnerability assessments on both frontend and
        backend systems. I’ve conducted testing and auditing on over 50 of the
        most dangerous web vulnerabilities. Currently, I’m looking for exciting
        projects to collaborate on, while continuing my studies and advancing my
        expertise in both development and cybersecurity.
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
  );
}
