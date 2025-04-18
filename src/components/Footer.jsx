// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <div id="root">
      <footer
        id="footer"
        class="bg-gray-900 dark:bg-neutral-950 text-white pt-16 pb-8"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Top Footer Section --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* <!-- Logo and About --> */}
            <div class="col-span-1 lg:col-span-1">
              <div class="flex items-center mb-4">
                <h2 class="text-xl font-bold text-white">
                  <span class="text-blue-500">Amir Sohail</span> Shiek
                </h2>
              </div>
              <p class="text-gray-400 mb-6">
                Crafting elegant, responsive websites and web applications that
                deliver exceptional user experiences and help businesses grow.
              </p>
              <p class="text-gray-400 mb-6">
                Based in india, Kolkata
                <br />
                Available for freelance work worldwide
              </p>
              <div class="flex space-x-4">
                <a
                  href="https://github.com/sheikhamir1"
                  target="_blank"
                  aria-label="GitHub"
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/amir-sohail-shiek/"
                  target="_blank"
                  aria-label="LinkedIn"
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/sheikh_fitness01/"
                  target="_blank"
                  aria-label="Dribbble"
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300"
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

            {/* <!-- Quick Links --> */}
            <div class="col-span-1">
              <h3 class="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#home"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Services --> */}
            <div class="col-span-1">
              <h3 class="text-lg font-semibold text-white mb-6">Services</h3>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    E-commerce Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    Website Maintenance
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Contact Information --> */}
            <div class="col-span-1">
              <h3 class="text-lg font-semibold text-white mb-6">
                Contact Info
              </h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <svg
                      class="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <a
                      href="mailto:contact@yourname.com"
                      class="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      amirsohail898198@gmail.com
                    </a>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <svg
                      class="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <a
                      href="tel:+11234567890"
                      class="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      +91 8018028827
                    </a>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <svg
                      class="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <span class="text-gray-400">
                      kolkata , west bengal , India
                    </span>
                  </div>
                </li>
              </ul>

              {/* <!-- Newsletter --> */}
              {/* <div class="mt-8">
                <h4 class="text-white font-medium mb-2">Join my newsletter</h4>
                <p class="text-gray-400 text-sm mb-4">
                  Get the latest updates and news directly to your inbox.
                </p>
                <form class="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    class="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                  <button
                    type="submit"
                    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto w-full"
                  >
                    Subscribe
                  </button>
                </form>
              </div> */}
            </div>
          </div>

          {/* <!-- Divider --> */}
          <div class="border-t border-gray-800 my-8"></div>

          {/* <!-- Bottom Footer Section --> */}
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <p class="text-gray-500 text-sm">
                &copy; 2025 Amir Sohail Shiek. All rights reserved.
              </p>
            </div>
            {/* <div class="flex flex-wrap gap-4 text-sm text-gray-500">
              <a
                href="#"
                class="hover:text-blue-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span class="text-gray-700">|</span>
              <a
                href="#"
                class="hover:text-blue-500 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span class="text-gray-700">|</span>
            </div> */}
          </div>
        </div>

        {/* <!-- Back to top button --> */}
        <button
          class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg z-50 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 flex items-center justify-center"
          aria-label="Back to top"
        >
          <a href="#home">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </a>
        </button>
      </footer>
    </div>
  );
};

export default Footer;
