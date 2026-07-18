"use client";

import { ReactNode, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { PenTool, Code, Briefcase, Award, ArrowLeft, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";

type SubProject = {
  title: string;
  description: string;
  image: string | StaticImageData;
  link?: string;
};

type Category = {
  title: string;
  description: string;
  icon: ReactNode;
  image: string | StaticImageData;
  projects: SubProject[];
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const portfolioCategories: Category[] = [
    {
      title: "Design Projects",
      description: "A collection of UI/UX designs, wireframes, and prototypes focusing on human-centered interactions and stunning aesthetics.",
      icon: <PenTool className="w-8 h-8 text-white" strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
      projects: [
        { title: "Online Banking App Design", description: "Modern, minimalist UI for a banking app focusing on accessibility.", image: "/Online_banking_appdesign.webp", link: "https://www.figma.com/proto/k68qbYeCt3KPOpKcBhUIF1/Banking-App-dash-Board?node-id=0-1&t=AESKs4zIDq97AhEl-1" },
        // { title: "E-Library App Design", description: "Modern, minimalist UI for a library app focusing on accessibility.", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop" },
        // { title: "Agency Branding", description: "Complete brand identity and web design for a creative digital agency.", image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop" },
      ]
    },
    {
      title: "Web Development",
      description: "Full-stack web applications built with modern frameworks like React, Next.js, and Node.js, featuring responsive layouts and robust backends.",
      icon: <Code className="w-8 h-8 text-white" strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
      projects: [
        { title: "My professional Portfolio website", description: "I built this website to showcase my skills and projects to potential employers. It features a clean, modern design with a focus on user experience.", image: "/portfolio.webp", link: "https://m-pavithar-flf5.vercel.app" },
        // { title: "SaaS Dashboard", description: "Real-time analytics and data visualization portal using React and Recharts.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
        // { title: "Real Estate App", description: "Property listing platform with interactive maps and messaging.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop" },
      ]
    },
    {
      title: "Project Management",
      description: "Agile workflows, sprint planning, and team leadership artifacts showcasing successful product deliveries from ideation to launch.",
      icon: <Briefcase className="w-8 h-8 text-white" strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
      projects: [
        // { title: "Agile Sprint Tracker", description: "Custom Jira dashboards and workflow optimizations for dev teams.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop" },
        // { title: "Product Roadmap", description: "Strategic quarterly planning and cross-functional team coordination.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" }
      ]
    },
    {
      title: "Certifications",
      description: "Professional credentials and continuing education achievements in software engineering, cloud architecture, and project management.",
      icon: <Award className="w-8 h-8 text-white" strokeWidth={1.5} />,
      image: "/Certification.webp",
      projects: [
        { title: "Google Project Management", description: "Trained in Agile methodologies, project planning, execution, and team coordination.", image: "/project_management.webp", link: "https://www.coursera.org/account/accomplishments/professional-cert/E0PQMX58ZVLW" },
        // { title: "React Native Specialist", description: "Advanced mobile development and cross-platform architecture.", image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=600&auto=format&fit=crop" },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-widest uppercase text-sm">Back to Home</span>
          </Link>
        </motion.div>

        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest mb-6"
          >
            My Portfolio
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-[1px] bg-white/30 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolioCategories.map((item, index) => (
            <GlassCard key={item.title} delay={0.2 * index} className="group p-0 overflow-hidden flex flex-col h-full border-white/10 hover:border-white/30 cursor-pointer" onClick={() => setSelectedCategory(item)}>
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
                <img
                  src={typeof item.image === 'string' ? item.image : item.image.src}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-6 right-6 z-20 p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                  {item.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white tracking-wider mb-4 uppercase">{item.title}</h3>
                <p className="text-white/60 font-light mb-8 flex-grow leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory(item);
                  }}
                  className="self-start px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Project Cards Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-[0_0_100px_rgba(255,255,255,0.05)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black/50 rounded-full border border-white/10">
                    {selectedCategory.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-wider uppercase">{selectedCategory.title}</h2>
                    <p className="text-white/50 text-sm font-light mt-1 hidden md:block">Sample projects and work</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-3 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors border border-transparent hover:border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body: Project Cards */}
              <div className="p-6 md:p-8 overflow-y-auto bg-black/20 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {selectedCategory.projects.map((proj, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="group bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={typeof proj.image === 'string' ? proj.image : proj.image.src}
                          alt={proj.title}
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h4 className="text-lg font-bold text-white tracking-wide uppercase mb-3">{proj.title}</h4>
                        <p className="text-white/60 font-light text-sm mb-6 flex-1 leading-relaxed">
                          {proj.description}
                        </p>
                        <a href={proj.link || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mt-auto group/btn w-fit">
                          <span>View Live</span>
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
