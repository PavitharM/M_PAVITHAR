"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Motivation() {
  return (
    <section id="motivation" className="py-20 bg-[#0d0d0d] relative min-h-screen flex flex-col items-center justify-center text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-white/40 text-sm tracking-widest uppercase mb-4 block">Motivation</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white font-serif italic leading-tight">
            "Great software is built with passion, precision, and purpose."
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
            <a 
              href="#" // Placeholder for CV link
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium tracking-widest uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              See My CV
            </a>
            
            <Link 
              href="/portfolio"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium tracking-widest uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              View My Work
            </Link>
          </div>

          <div className="pt-8">
            <Link 
              href="/portfolio"
              className="group flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black font-bold tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              Projects
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
