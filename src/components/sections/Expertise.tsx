"use client";

import GlassCard from "../ui/GlassCard";
import { PenTool, Code, Cloud, ShieldCheck, Briefcase, Search } from "lucide-react";
import { 
  SiFigma, 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGooglecloud, SiDocker,
  SiLetsencrypt, SiJsonwebtokens,
  SiJira, SiTrello, SiGithub,
  SiGoogleanalytics, SiGooglesearchconsole
} from "react-icons/si";

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "UI/UX Development",
      description: "Crafting intuitive and visually stunning user interfaces with a focus on human-centered design principles.",
      mainIcon: <PenTool className="w-10 h-10 text-white" strokeWidth={1} />,
      techIcons: [
        { icon: <SiFigma />, name: "Figma" },
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">XD</span>, name: "Adobe XD" },
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">PS</span>, name: "Photoshop" },
      ]
    },
    {
      title: "Full Stack Development",
      description: "Building robust, scalable, and responsive web applications from the frontend to the backend.",
      mainIcon: <Code className="w-10 h-10 text-white" strokeWidth={1} />,
      techIcons: [
        { icon: <SiHtml5 />, name: "HTML" },
        { icon: <SiCss />, name: "CSS" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
      ]
    },
    {
      title: "Cloud Architecture",
      description: "Designing and deploying reliable cloud infrastructure for high availability and performance.",
      mainIcon: <Cloud className="w-10 h-10 text-white" strokeWidth={1} />,
      techIcons: [
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">AWS</span>, name: "AWS" },
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">Azure</span>, name: "Azure" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <SiDocker />, name: "Docker" },
      ]
    },
    {
      title: "Web Security",
      description: "Implementing best practices to secure applications against vulnerabilities and protect user data.",
      mainIcon: <ShieldCheck className="w-10 h-10 text-white" strokeWidth={1} />,
      techIcons: [
        { icon: <SiLetsencrypt />, name: "SSL" },
        { icon: <SiJsonwebtokens />, name: "JWT" },
        // Simple text fallbacks for generic concepts
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">OAuth</span>, name: "OAuth" },
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">FW</span>, name: "Firewall" },
      ]
    },
    {
      title: "Project Management",
      description: "Leading teams and guiding projects from conceptualization to successful delivery using agile methodologies.",
      mainIcon: <Briefcase className="w-10 h-10 text-white" strokeWidth={1} />,
      techIcons: [
        { icon: <SiJira />, name: "Jira" },
        { icon: <SiTrello />, name: "Trello" },
        { icon: <SiGithub />, name: "GitHub" },
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">Agile</span>, name: "Agile" },
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">Scrum</span>, name: "Scrum" },
      ]
    },
    {
      title: "SEO & Digital Marketing",
      description: "Optimizing web presence to maximize visibility, reach, and organic growth.",
      mainIcon: <Search className="w-10 h-10 text-white" strokeWidth={1} />,
      techIcons: [
        { icon: <SiGoogleanalytics />, name: "Analytics" },
        { icon: <SiGooglesearchconsole />, name: "Search Console" },
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">SEO</span>, name: "SEO" },
        { icon: <span className="text-xs font-bold border border-white/50 rounded px-1">Social</span>, name: "Social Media" },
      ]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest mb-4">Expertise Skills</h2>
          <div className="w-24 h-[1px] bg-white/30 mx-auto"></div>
        </div>

        <div className="flex flex-col space-y-6">
          {expertiseAreas.map((area, index) => (
            <GlassCard key={area.title} delay={index * 0.15} className="w-full relative group overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out"></div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
                <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                  {area.mainIcon}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-medium text-white tracking-wider mb-2">{area.title}</h3>
                  <p className="text-white/60 font-light mb-6 md:mb-0 max-w-2xl">{area.description}</p>
                </div>

                <div className="flex flex-wrap gap-4 md:justify-end items-center md:min-w-[200px]">
                  {area.techIcons.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="flex flex-col items-center justify-center text-white/50 hover:text-white transition-colors duration-300"
                      title={tech.name}
                    >
                      <div className="text-2xl mb-1">{tech.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
