import React, { useState } from "react";
import { SoilConnect_Demo } from "../LiveDemo/SoilConnect_Demo";
import { FoodFusion_Demo } from "../LiveDemo/FoodFusion_Demo";
import { ChatBuddy } from "../LiveDemo/ChatBuddy";
import { BlogVerse } from "../LiveDemo/BlogVerse";
import { TaskMaster } from "../LiveDemo/TaskMaster";

function DemoProjects() {
  const [activeTab, setActiveTab] = useState("frontend");
  return (
    <div id="root">
      <section id="demo-projects" class="py-16 bg-white dark:bg-neutral-900">
        <div class="container mx-auto px-4" id="el-h3pjbl6z">
          <div class="text-center mb-12" id="el-fj8ag7am">
            <h2
              class="text-3xl md:text-4xl font-bold mb-2 text-neutral-800 dark:text-white"
              id="el-9qqiqv8l"
            >
              Live Demo Projects
            </h2>
            <div
              class="w-50 h-1 bg-blue-500 mx-auto mb-6"
              id="el-zn0f6jzf"
            ></div>
            <p
              class="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
              id="el-o1t7zvi2"
            >
              Explore these live demonstrations of my work across different
              domains
            </p>
          </div>
          {/* <!-- Project Categories Tabs --> */}
          <div class="mb-10" id="el-rlfmn86p">
            <div class="flex flex-wrap justify-center gap-4" id="el-u5zwktfx">
              <button
                onClick={() => setActiveTab("frontend")}
                class="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white rounded-full font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none cursor-pointer"
                id="frontend-tab"
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                class="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white rounded-full font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none cursor-pointer"
                id="backend-tab"
              >
                Backend
              </button>
              <button
                onClick={() => setActiveTab("fullstack")}
                class="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white rounded-full font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none cursor-pointer"
                id="fullstack-tab"
              >
                Full Stack
              </button>
              <button
                onClick={() => setActiveTab("cybersecurity")}
                class="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white rounded-full font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none cursor-pointer"
                id="security-tab"
              >
                Cybersecurity
              </button>
            </div>
          </div>

          {/* color #3084CB */}

          {/* <!-- Projects Display --> */}
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            id="el-pjnaekav"
          >
            {/* <!-- Frontend --> */}
            {activeTab === "frontend" && (
              <>
                <SoilConnect_Demo />
                <FoodFusion_Demo />
                <BlogVerse />
                <TaskMaster />
              </>
            )}

            {/* <!--Backend --> */}
            {activeTab === "backend" && <ChatBuddy />}

            {/* <!-- Demo Project 3 - Full Stack --> */}
            {activeTab === "fullstack" && (
              <>
                <ChatBuddy />
                <TaskMaster />
              </>
            )}

            {/* <!-- Demo Project 4 - Cybersecurity --> */}
            {activeTab === "cybersecurity" && (
              <div
                class="bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-category="security"
                id="el-m6q9xxff"
              >
                <div
                  class="relative h-56 bg-neutral-200 dark:bg-neutral-700 overflow-hidden"
                  id="el-16anm93g"
                >
                  <div
                    class="absolute inset-0 flex items-center justify-center bg-red-600/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    id="el-c5nshsqt"
                  >
                    <div class="text-center p-4" id="el-awox83gt">
                      <p class="font-bold mb-2" id="el-ik65sxfp">
                        View Demo
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-s80icbcv"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          id="el-sp4d8y4a"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          id="el-5dsa37hw"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="w-full h-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center"
                    id="el-uk9eitnz"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center"
                      id="el-d45g30kg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-ltsb13gr"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          id="el-uuna343y"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="p-6" id="el-v45pouw4">
                  <div
                    class="flex justify-between items-center mb-3"
                    id="el-0h5cgxvd"
                  >
                    <h3
                      class="text-xl font-bold text-neutral-800 dark:text-white"
                      id="el-klh4w9eo"
                    >
                      Vulnerability Scanner
                    </h3>
                    <span
                      class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      id="el-dwk0gtqi"
                    >
                      Cybersecurity
                    </span>
                  </div>
                  <p
                    class="text-neutral-600 dark:text-neutral-400 mb-4"
                    id="el-qy0759or"
                  >
                    A web application security scanner that identifies common
                    vulnerabilities and suggests remediation steps.
                  </p>

                  <div class="flex flex-wrap gap-2 mb-5" id="el-4ywm3z6p">
                    <span
                      class="text-xs px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                      id="el-46q17teh"
                    >
                      Python
                    </span>
                    <span
                      class="text-xs px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                      id="el-xl6iuuzs"
                    >
                      Flask
                    </span>
                    <span
                      class="text-xs px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                      id="el-jqi529uz"
                    >
                      OWASP
                    </span>
                    <span
                      class="text-xs px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                      id="el-86hxy1ze"
                    >
                      Selenium
                    </span>
                  </div>

                  <div
                    class="flex justify-between items-center pt-4 border-t border-neutral-200 dark:border-neutral-700"
                    id="el-gi28icwb"
                  >
                    <a
                      href="#"
                      class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      id="el-nwygnxrx"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-hpwcrdv9"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          id="el-47qxxlos"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          id="el-lvp79fqa"
                        ></path>
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white"
                      id="el-759z0dbn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        id="el-n1waw50s"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          id="el-ybig2954"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <!-- Request Custom Demo --> */}
          <div class="mt-16 text-center" id="el-oa20q9ty">
            <div
              class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 md:p-10 max-w-4xl mx-auto shadow-xl"
              id="el-0uqv92uf"
            >
              <h3 class="text-2xl md:text-3xl font-bold mb-4" id="el-5s565heq">
                Need a Custom Demo?
              </h3>
              <p
                class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                id="el-dpko4rxu"
              >
                If you'd like to see a personalized demonstration for your
                specific needs, I'd be happy to create one for you.
              </p>
              <a
                href="#contact"
                class="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md"
                id="el-pwpprgl8"
              >
                Request a Custom Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  id="el-lpb7x1jp"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    id="el-mmvlmr5t"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DemoProjects;
