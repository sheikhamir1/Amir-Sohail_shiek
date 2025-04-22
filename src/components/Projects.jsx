// src/components/Projects.js
import React from "react";
import { SoilConnect } from "../Projects/SoilConnect";
import { FoodFusion } from "../Projects/FoodFusion";
import { ChatBuddy } from "../Projects/ChatBuddy";
import { BlogVerse } from "../Projects/BlogVerse";
import { TaskMaster } from "../Projects/TaskMaster";
import { BlueSky } from "../Projects/BlueSky";

const Projects = () => {
  return (
    <div id="root">
      <section
        id="projects"
        className="py-16 md:py-24 bg-white dark:bg-neutral-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-3">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills and expertise
              in web development.
            </p>
          </div>

          {/* <!-- Projects Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* <!-- Project Card 1 --> */}
            <SoilConnect />
            {/* <!-- Project Card 2 --> */}
            <FoodFusion />
            {/* <!-- Project Card 3 --> */}
            <ChatBuddy />
            {/* <!-- Project Card 4 --> */}
            <BlogVerse />
            {/* <!-- Project Card 5 --> */}
            <TaskMaster />
            {/* <!-- Project Card 6 --> */}
            <BlueSky />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
