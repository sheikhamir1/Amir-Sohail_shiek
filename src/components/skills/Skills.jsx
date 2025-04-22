// src/components/Skills.js
import React from "react";
import { Tech } from "../Tech/Tech";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";
import { Database } from "./Database";
import { Cyber } from "./Cyber";
import { DevOps } from "./DevOps";
import { ExtraSkills } from "./ExtraSkills";

const Skills = () => {
  return (
    <div id="root">
      <section id="skills" className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4" id="el-mffneqsd">
          <div className="text-center mb-12" id="el-mbacrid4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800 dark:text-white"
              id="el-qv61hhjg"
            >
              Skills &amp; Expertise
            </h2>
            <div
              className="w-20 h-1 bg-blue-500 mx-auto mb-6"
              id="el-o9kxukud"
            ></div>
            <p
              className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
              id="el-ak9xbuf9"
            >
              A comprehensive overview of my technical expertise and
              professional competencies
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            id="el-40vxkxrg"
          >
            {/* <!-- Technical Skills --> */}
            <div id="el-eeom0hpa">
              <h3
                className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-white"
                id="el-hmawdu32"
              >
                Technical Skills
              </h3>

              <div className="space-y-8" id="el-nh8nuz7s">
                <Frontend />
                <Backend />
                <Database />
              </div>
            </div>

            {/* <!-- Other Skills --> */}
            <div id="el-jn2ui0jd">
              <h3
                className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-white invisible"
                id="el-1ig3wnes"
              >
                Specialized Knowledge
              </h3>

              <div className="space-y-8" id="el-8f8slu2p">
                <Cyber />
                <DevOps />
                <ExtraSkills />
              </div>
            </div>
          </div>
        </div>
        <Tech />
      </section>
    </div>
  );
};

export default Skills;
