import { useState } from "react";
import { cn } from "@/lib/utils";

// ICON URLs
const skillIcons = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
};

// SKILLS DATA
const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend", icon: "html" },
  { name: "CSS", level: 90, category: "frontend", icon: "css" },
  { name: "Bootstrap", level: 85, category: "frontend", icon: "bootstrap" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "typescript" },
  { name: "React", level: 90, category: "frontend", icon: "react" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "node" },
  { name: "Express", level: 75, category: "backend", icon: "express" },
  { name: "MongoDB", level: 80, category: "backend", icon: "mongodb" },
  { name: "Java", level: 70, category: "backend", icon: "java" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: "git" },
  { name: "Docker", level: 70, category: "tools", icon: "docker" },
  { name: "Figma", level: 85, category: "tools", icon: "figma" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={skillIcons[skill.icon]}
                  alt={skill.name}
                  className="h-12 w-12 animate-spin-slow hover:scale-110 transition-all"
                />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
