"use client";

import GlassCard from "../ui/GlassCard";
import { GraduationCap, Briefcase, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto max-w-[77rem]">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest mb-4">Get to Know Me</h2>
          <div className="w-24 h-[1px] bg-white/30 mx-auto"></div>
        </div>

        <div className="relative flex flex-col space-y-16 md:space-y-32 mt-16 md:mt-24 pb-20">
          
          {/* Tree Root Line (Hidden on mobile) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 -translate-x-1/2 rounded-full z-0"
          ></motion.div>
          
          {/* Card 1: Professional Biography (Left Side) */}
          <div className="relative w-full flex justify-start items-center">
            <div className="w-full md:w-[46%] z-10">
              <GlassCard 
                delay={0.2} 
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                className="relative group !p-10 border border-white/20"
              >
                <div className="absolute -inset-0.5 bg-white opacity-0 group-hover:opacity-10 rounded-xl blur transition duration-1000"></div>
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <User className="text-white w-8 h-8 mr-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-medium text-white tracking-widest uppercase">Biography</h3>
                  </div>
                  <p className="text-white/70 font-light leading-relaxed">
                    I am a dedicated software engineer with a deep passion for creating innovative digital solutions. 
                    My journey in technology is driven by an insatiable curiosity and a commitment to excellence. 
                    I thrive in dynamic environments where I can leverage my multidisciplinary skills in full-stack 
                    development, UI/UX design, and project management to deliver products that exceed expectations.
                  </p>
                </div>
              </GlassCard>
            </div>
            {/* Left Curve Connector */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:block absolute right-1/2 bottom-1/2 w-[4%] h-[60px] border-b-[2px] border-r-[2px] border-white/20 rounded-br-[30px] z-0"
            ></motion.div>
          </div>

          {/* Card 2: Education (Right Side) */}
          <div className="relative w-full flex justify-end items-center">
            <div className="w-full md:w-[46%] z-10">
              <GlassCard 
                delay={0.3} 
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                className="relative group !p-10 border border-white/20"
              >
                <div className="absolute -inset-0.5 bg-white opacity-0 group-hover:opacity-10 rounded-xl blur transition duration-1000"></div>
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="text-white w-8 h-8 mr-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-medium text-white tracking-widest uppercase">Education</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l border-white/20 pl-4 py-1">
                      <h4 className="text-white font-medium mb-1">Undergraduate (In Progress)</h4>
                      <p className="text-white/60 text-sm font-light">Sabaragamuwa University of Sri Lanka</p>
                    </div>
                    <div className="border-l border-white/20 pl-4 py-1">
                      <h4 className="text-white font-medium mb-1">GCE Advanced Level</h4>
                      <p className="text-white/60 text-sm font-light">Completed at: BT/KK/KATHIRAVELY V.M.V</p>
                    </div>
                    <div className="border-l border-white/20 pl-4 py-1">
                      <h4 className="text-white font-medium mb-1">GCE Ordinary Level</h4>
                      <p className="text-white/60 text-sm font-light">Completed at: BT/KK/KATHIRAVELY V.M.V</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            {/* Right Curve Connector */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block absolute left-1/2 bottom-1/2 w-[4%] h-[60px] border-b-[2px] border-l-[2px] border-white/20 rounded-bl-[30px] z-0"
            ></motion.div>
          </div>

          {/* Card 3: Experience (Left Side) */}
          <div className="relative w-full flex justify-start items-center">
            <div className="w-full md:w-[46%] z-10">
              <GlassCard 
                delay={0.3} 
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                className="relative group !p-10 border border-white/20"
              >
                <div className="absolute -inset-0.5 bg-white opacity-0 group-hover:opacity-10 rounded-xl blur transition duration-1000"></div>
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <Briefcase className="text-white w-8 h-8 mr-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-medium text-white tracking-widest uppercase">Experience</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l border-white/20 pl-4 py-1">
                      <h4 className="text-white font-medium mb-1">Volunteer Teaching</h4>
                      <p className="text-white/60 text-sm font-light">Duration: 6 Months</p>
                    </div>
                    <div className="border-l border-white/20 pl-4 py-1">
                      <h4 className="text-white font-medium mb-1">Data Collecting Volunteer Officer</h4>
                      <p className="text-white/60 text-sm font-light">Divisional Secretary Office • 3 Months</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            {/* Left Curve Connector */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block absolute right-1/2 bottom-1/2 w-[4%] h-[60px] border-b-[2px] border-r-[2px] border-white/20 rounded-br-[30px] z-0"
            ></motion.div>
          </div>

          {/* Card 4: Personal Interests (Right Side) */}
          <div className="relative w-full flex justify-end items-center">
            <div className="w-full md:w-[46%] z-10">
              <GlassCard 
                delay={0.3} 
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                className="relative group !p-10 border border-white/20"
              >
                <div className="absolute -inset-0.5 bg-white opacity-0 group-hover:opacity-10 rounded-xl blur transition duration-1000"></div>
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <BookOpen className="text-white w-8 h-8 mr-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-medium text-white tracking-widest uppercase">Interests</h3>
                  </div>
                  <ul className="space-y-3 text-white/70 font-light">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 mr-3 flex-shrink-0"></span>
                      Researching business-related topics
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 mr-3 flex-shrink-0"></span>
                      Exploring emerging technologies
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 mr-3 flex-shrink-0"></span>
                      Reading books
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 mr-3 flex-shrink-0"></span>
                      Playing football
                    </li>
                  </ul>
                </div>
              </GlassCard>
            </div>
            {/* Right Curve Connector */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block absolute left-1/2 bottom-1/2 w-[4%] h-[60px] border-b-[2px] border-l-[2px] border-white/20 rounded-bl-[30px] z-0"
            ></motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
