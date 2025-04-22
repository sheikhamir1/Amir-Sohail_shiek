// src/components/About.js
import React from "react";
import { Bio } from "./Bio";
import { AboutHeading } from "./AboutHeading";
import { FrontEnd } from "./FrontEnd";
import { BackEnd } from "./BackEnd";
import { DataBase } from "./DataBase";
import { Cyber } from "./Cyber";
import { ProfessionalSkills } from "./ProfessionalSkills";

const About = () => {
  return (
    <div id="root">
      <section id="about" className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4" id="el-vh2a3jxu">
          <AboutHeading />
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            id="el-ktuq6dss"
          >
            {/* <!-- Professional Bio --> */}
            <Bio />

            {/* <!-- Skills & Expertise Card --> */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-neutral-700">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-white">
                Technology/Tools i used in my Projects
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {/* <!-- Technical Skills --> */}
                <FrontEnd />
                <BackEnd />
                <DataBase />
                <Cyber />
              </div>

              {/* <!-- Professional Skills --> */}
              <ProfessionalSkills />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
