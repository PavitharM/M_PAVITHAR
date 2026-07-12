"use client";

import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiAngular, SiVuedotjs, SiNodedotjs, SiExpress, SiPython, SiOpenjdk, // using OpenJDK for Java
  SiPhp, SiDocker, SiKubernetes,
  SiGit, SiGithub, SiMongodb, SiMysql, SiPostgresql, SiFirebase,
  SiLinux, SiFigma, SiJira, SiTrello,
  SiAndroidstudio
} from "react-icons/si";

export default function Technologies() {
  const techList = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Vue", icon: <SiVuedotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <SiOpenjdk /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "C#", icon: <span className="text-xs font-bold border border-white/50 rounded px-1">C#</span> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "AWS", icon: <span className="text-xs font-bold border border-white/50 rounded px-1">AWS</span> },
    { name: "Azure", icon: <span className="text-xs font-bold border border-white/50 rounded px-1">Azure</span> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Photoshop", icon: <span className="text-xs font-bold border border-white/50 rounded px-1">PS</span> },
    { name: "Illustrator", icon: <span className="text-xs font-bold border border-white/50 rounded px-1">AI</span> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Trello", icon: <SiTrello /> },
    { name: "VS Code", icon: <span className="text-xs font-bold border border-white/50 rounded px-1">VS</span> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Visual Studio", icon: <span className="text-xs font-bold border border-white/50 rounded px-1">VS</span> },
  ];

  // Split the array into two halves for two rows
  const midPoint = Math.ceil(techList.length / 2);
  const techListRow1 = techList.slice(0, midPoint);
  const techListRow2 = techList.slice(midPoint);

  // Duplicate arrays to create seamless infinite loops
  const duplicatedTechListRow1 = [...techListRow1, ...techListRow1];
  const duplicatedTechListRow2 = [...techListRow2, ...techListRow2];

  return (
    <section id="technologies" className="py-20 bg-black relative overflow-hidden min-h-screen flex flex-col items-center justify-center w-full">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest mb-4">Core Technologies</h2>
        <div className="w-24 h-[1px] bg-white/30 mx-auto"></div>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>
        
        {/* First Scrolling Row (Left) */}
        <div className="animate-marquee flex items-center gap-8 py-4">
          {duplicatedTechListRow1.map((tech, idx) => (
            <div 
              key={`row1-${tech.name}-${idx}`}
              className="flex items-center justify-center gap-6 px-12 py-8 min-w-[250px] rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex-shrink-0"
            >
              <div className="text-5xl text-white">{tech.icon}</div>
              <span className="text-white/80 font-medium tracking-wide text-2xl">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Second Scrolling Row (Right) */}
        <div className="animate-marquee flex items-center gap-8 py-4" style={{ animationDirection: "reverse" }}>
          {duplicatedTechListRow2.map((tech, idx) => (
            <div 
              key={`row2-${tech.name}-${idx}`}
              className="flex items-center justify-center gap-6 px-12 py-8 min-w-[250px] rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex-shrink-0"
            >
              <div className="text-5xl text-white">{tech.icon}</div>
              <span className="text-white/80 font-medium tracking-wide text-2xl">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
