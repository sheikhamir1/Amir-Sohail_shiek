import React, { useState } from "react";
import { FrontEnd } from "./FrontEnd";
import { BackEnd } from "./BackEnd";
import { Mobile } from "./Mobile";
import { Design } from "./Design";
import { DevOps } from "./DevOps";

export function Tech() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <>
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
                onClick={() => setActiveTab("frontend")}
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="frontend"
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="backend"
              >
                Backend
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="mobile"
              >
                Mobile
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="design"
              >
                Design
              </button>
              <button
                onClick={() => setActiveTab("devops")}
                className="tech-tab px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                data-target="devops"
              >
                DevOps
              </button>
            </div>

            {/* <!-- Tech content panels --> */}
            <div className="tech-content-container">
              {/* <!-- Frontend Technologies --> */}
              {activeTab === "frontend" && <FrontEnd />}

              {/* <!-- Backend Technologies --> */}
              {activeTab === "backend" && <BackEnd />}

              {/* <!-- Mobile Development --> */}
              {activeTab === "mobile" && <Mobile />}

              {/* <!-- Design Tools --> */}
              {activeTab === "design" && <Design />}

              {/* <!-- DevOps Tools --> */}
              {activeTab === "devops" && <DevOps />}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
