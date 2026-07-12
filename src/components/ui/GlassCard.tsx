"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  initial?: any;
  whileInView?: any;
  onClick?: () => void;
}

export default function GlassCard({ 
  children, 
  className = "", 
  delay = 0,
  initial = { opacity: 0, y: 30 },
  whileInView = { opacity: 1, y: 0 },
  onClick
}: GlassCardProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth ease-out
      }}
      className={`glass-card p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
