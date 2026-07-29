"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ThumbsUp, Heart, Eye } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [likes, setLikes] = useState(124);
  const [hearts, setHearts] = useState(56);
  const [isLiked, setIsLiked] = useState(false);
  const [isHearted, setIsHearted] = useState(false);

  const handleLike = () => {
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  const handleHeart = () => {
    setHearts(prev => isHearted ? prev - 1 : prev + 1);
    setIsHearted(!isHearted);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Quote fades out as user scrolls down
  const quoteOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const quoteScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] w-full"
    >
      {/* Sticky container that locks to the screen for 150vh */}
      <div
        className="sticky top-0 w-full h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 overflow-hidden pt-20 md:pt-16 pb-10 md:pb-0 gap-6 md:gap-12"
      >

        {/* Left Side: Large Box-Radian Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[75vh] lg:h-[85vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl z-10"
        >
          <img
            src="/profile.jpg"
            alt="Mangaleswaran Pavithar"
            className="w-full h-full object-cover object-top md:object-center filter grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle overlay gradient on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80"></div>
        </motion.div>

        {/* Right Side: Text Container (Thought) */}
        <div className="relative w-full md:w-1/2 flex-1 md:flex-none flex flex-col items-center md:items-start justify-center text-center md:text-left z-20">

          {/* Inspirational Quote */}
          <motion.div
            style={{ opacity: quoteOpacity, scale: quoteScale }}
            className="w-full flex flex-col items-center md:items-start justify-center"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-light italic text-white/90 tracking-wide font-serif leading-relaxed">
              "Dreams become reality through consistent effort."
            </p>

            {/* Engagement Metrics */}
            <div className="flex items-center gap-6 mt-10 opacity-80">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 transition-all duration-300 ${isLiked ? 'text-blue-400' : 'text-white/50 hover:text-white'}`}
              >
                <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm md:text-base font-medium tracking-wide">{likes}</span>
              </button>

              <button
                onClick={handleHeart}
                className={`flex items-center gap-2 transition-all duration-300 ${isHearted ? 'text-red-500' : 'text-white/50 hover:text-white'}`}
              >
                <Heart className={`w-5 h-5 ${isHearted ? 'fill-current' : ''}`} />
                <span className="text-sm md:text-base font-medium tracking-wide">{hearts}</span>
              </button>

              <div className="flex items-center gap-2 text-white/50">
                <Eye className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium tracking-wide">1.4k</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        >
          <span className="text-white/40 text-[10px] tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
