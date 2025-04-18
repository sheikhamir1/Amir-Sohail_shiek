// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  return (
    <div id="root">
      <section id="contact" class="py-20 bg-gray-50 dark:bg-neutral-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section heading --> */}
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or want to discuss potential collaboration?
              I'd love to hear from you!
            </p>
            <div class="w-20 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded mt-6"></div>
          </div>

          <div class="flex flex-col lg:flex-row gap-12">
            {/* <!-- Contact form --> */}
            <div class="w-full lg:w-2/3 bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden">
              <div class="p-8">
                <form class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        class="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        class="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="subject"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      class="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project or inquiry..."
                      class="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-300"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
                    >
                      <svg
                        class="w-5 h-5 mr-2"
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
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* <!-- Contact info and socials --> */}
            <div class="w-full lg:w-1/3 space-y-8">
              {/* <!-- Contact info --> */}
              <div class="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-8">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>

                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                        <svg
                          class="w-5 h-5"
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
                    </div>
                    <div class="ml-4">
                      <h4 class="text-md font-medium text-gray-900 dark:text-white">
                        Email
                      </h4>
                      <a
                        href="mailto:contact@yourname.com"
                        class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        contact@yourname.com
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                        <svg
                          class="w-5 h-5"
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
                    </div>
                    <div class="ml-4">
                      <h4 class="text-md font-medium text-gray-900 dark:text-white">
                        Phone
                      </h4>
                      <a
                        href="tel:+11234567890"
                        class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                        <svg
                          class="w-5 h-5"
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
                    </div>
                    <div class="ml-4">
                      <h4 class="text-md font-medium text-gray-900 dark:text-white">
                        Location
                      </h4>
                      <p class="text-gray-600 dark:text-gray-400">
                        San Francisco, CA, United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Social links --> */}
              <div class="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-8">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h3>

                <div class="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    class="flex items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2]">
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900 dark:text-white">
                        Twitter
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2]">
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900 dark:text-white">
                        LinkedIn
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#171515]/10 text-[#171515] dark:text-white">
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900 dark:text-white">
                        GitHub
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA4C89]/10 text-[#EA4C89]">
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900 dark:text-white">
                        Dribbble
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Availability --> */}
              <div class="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-8">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Availability
                </h3>

                <div class="flex items-center mb-4">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-3 pulse-animation"></div>
                  <p class="text-gray-700 dark:text-gray-300">
                    Currently available for freelance work
                  </p>
                </div>

                <div class="flex flex-col space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600 dark:text-gray-400">
                      Response Time:
                    </span>
                    <span class="text-gray-900 dark:text-white font-medium">
                      Within 24 hours
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600 dark:text-gray-400">
                      Working Hours:
                    </span>
                    <span class="text-gray-900 dark:text-white font-medium">
                      9:00 AM - 6:00 PM PST
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- FAQ section --> */}
          <div class="mt-16">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div class="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What services do you offer?
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  I specialize in web development, including responsive
                  websites, web applications, e-commerce solutions, and UI/UX
                  design. I can help with both frontend and backend development.
                </p>
              </div>

              <div class="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What is your typical project timeline?
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  Project timelines vary based on complexity. A simple website
                  might take 2-3 weeks, while more complex applications can take
                  2-3 months. I'll provide a detailed timeline during our
                  initial consultation.
                </p>
              </div>

              <div class="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How do you handle project pricing?
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  I offer both fixed-price and hourly rate options. After
                  understanding your project requirements, I'll recommend the
                  most suitable approach and provide a transparent quote.
                </p>
              </div>

              <div class="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you offer ongoing maintenance?
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  Yes, I offer ongoing maintenance and support services to
                  ensure your website or application continues to function
                  optimally. We can discuss maintenance packages based on your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
