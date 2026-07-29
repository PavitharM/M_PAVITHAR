"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 z-10 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest uppercase mb-6 text-glow px-2 break-words">
            Mangaleswaran Pavithar
          </h1>
          
          <div className="text-lg sm:text-xl md:text-3xl font-medium text-white/80 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center tracking-wider mb-8">
            <Typewriter
              words={[
                'SOFTWARE ENGINEER...!',
                'FULL STACK DEVELOPER...!',
                'UI/UX DESIGNER...!',
                'PROJECT MANAGER...!'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed font-light px-4">
            A passionate technologist dedicated to crafting elegant, scalable, and user-centric digital experiences. 
            Blending technical expertise with design aesthetics to build solutions that not only work flawlessly 
            but leave a lasting impression.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
