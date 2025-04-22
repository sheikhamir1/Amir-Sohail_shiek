import React, { useState } from "react";
import { SoilConnect_Demo } from "../LiveDemo/SoilConnect_Demo";
import { FoodFusion_Demo } from "../LiveDemo/FoodFusion_Demo";
import { ChatBuddy } from "../LiveDemo/ChatBuddy";
import { BlogVerse } from "../LiveDemo/BlogVerse";
import { TaskMaster } from "../LiveDemo/TaskMaster";
import { BlueSky } from "../LiveDemo/BlueSky";
import { Cyber } from "../LiveDemo/Cyber";

function DemoProjects() {
  const [activeTab, setActiveTab] = useState("frontend");
  return (
    <div id="root">
      <section
        id="demo-projects"
        className="py-16 bg-white dark:bg-neutral-900"
      >
        <div className="container mx-auto px-4" id="el-h3pjbl6z">
          <div className="text-center mb-12" id="el-fj8ag7am">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800 dark:text-white"
              id="el-9qqiqv8l"
            >
              Live Demo Projects
            </h2>
            <div
              className="w-50 h-1 bg-blue-500 mx-auto mb-6"
              id="el-zn0f6jzf"
            ></div>
            <p
              className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
              id="el-o1t7zvi2"
            >
              Explore these live demonstrations of my work across different
              domains
            </p>
          </div>
          {/* <!-- Project Categories Tabs --> */}
          <div className="mb-10" id="el-rlfmn86p">
            <div
              className="flex flex-wrap justify-center gap-4"
              id="el-u5zwktfx"
            >
              <button
                onClick={() => setActiveTab("frontend")}
                className="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white rounded-full font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none cursor-pointer"
                id="frontend-tab"
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white rounded-full font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none cursor-pointer"
                id="backend-tab"
              >
                Backend
              </button>
              <button
                onClick={() => setActiveTab("fullstack")}
                className="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white rounded-full font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none cursor-pointer"
                id="fullstack-tab"
              >
                Full Stack
              </button>
              <button
                onClick={() => setActiveTab("cybersecurity")}
                className="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white rounded-full font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none cursor-pointer"
                id="security-tab"
              >
                Cybersecurity
              </button>
            </div>
          </div>

          {/* color #3084CB */}

          {/* <!-- Projects Display --> */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            id="el-pjnaekav"
          >
            {/* <!-- Frontend --> */}
            {activeTab === "frontend" && (
              <>
                <SoilConnect_Demo />
                <FoodFusion_Demo />
                <BlogVerse />
                <TaskMaster />
                <BlueSky />
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
            {activeTab === "cybersecurity" && <Cyber />}
          </div>
          {/* <!-- Request Custom Demo --> */}
          <div className="mt-16 text-center" id="el-oa20q9ty">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 md:p-10 max-w-4xl mx-auto shadow-xl"
              id="el-0uqv92uf"
            >
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                id="el-5s565heq"
              >
                Need a Custom Demo?
              </h3>
              <p
                className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                id="el-dpko4rxu"
              >
                If you'd like to see a personalized demonstration for your
                specific needs, I'd be happy to create one for you.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md"
                id="el-pwpprgl8"
              >
                Request a Custom Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  id="el-lpb7x1jp"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
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
