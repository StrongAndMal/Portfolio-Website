import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SkillIcon = ({ Icon, name, color }) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-2">
      <div
        className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
        transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg
        group-hover:shadow-[var(--hover-color)]/10"
        style={{ "--hover-color": color }}
      >
        <RevealOnScroll>
          <Icon className="w-8 h-8 text-white/60 transition-all duration-300 group-hover:text-[var(--hover-color)]" />
        </RevealOnScroll>
      </div>
      <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export const About = () => {
  const skills = [
    { Icon: SiHtml5, name: "HTML", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS", color: "#1572B6" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiGithub, name: "GitHub", color: "#ffffff" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { Icon: SiVercel, name: "Vercel", color: "#ffffff" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/StrongAndMal",
      color: "hover:text-[#6e5494]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/mauro-alvarado-0b1b1b1b1/",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/StrongAndMal",
      color: "hover:text-[#1da1f2]",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:mauro@digitalmal.com",
      color: "hover:text-[#ea4335]",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 min-h-screen bg-[#161616] text-white/80 relative overflow-hidden"
    >
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[20rem] font-black text-white/5 transform -rotate-12 tracking-tighter">
          ABOUT
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2 className="text-7xl font-bold mb-16 text-white">ABOUT</h2>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Main statement */}
          <div>
            <p className="text-3xl font-light leading-relaxed text-white">
              So who am I? Great question. In a nutshell, I'm a self-taught full
              stack developer of 3 months of experience and counting, traveler,
              fitness enthusiast, music producer, content creator, and
              entrepreneur.
            </p>

            {/* Skills grid */}
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-8 text-white">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                  <SkillIcon
                    key={index}
                    Icon={skill.Icon}
                    name={skill.name}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-medium mb-4 text-white">
                Let's Connect
              </h3>
              <a
                href="mailto:mauro.alv290@gmail.com"
                className="text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/60"
              >
                Email Me
              </a>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/mauro-alvarado-480a9b16b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/60 inline-flex items-center"
                >
                  Explore My LinkedIn
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Details */}
          <div className="space-y-8">
            <p className="text-lg text-white/60">
              I started my software development journey in 2025, learning by
              doing and building projects. This portfolio showcases my early
              work. I'm excited about my career transition and have always been
              intrigued by technology's role in solving problems. Currently, I'm
              focused on software development and planning to launch multiple
              tech businesses.
            </p>

            <p className="text-md text-white/60">
              I am a tech junior, music producer, content creator, fitness
              enthusiast, and traveler. My goal is to embrace a digital nomad
              lifestyle, traveling the world while supporting myself
              financially. For now, I am focused on building my career and
              making a name in the tech industry.
            </p>

            <p className="text-md text-white/60">
              I am ambitious and always seeking new challenges. A quick learner
              with a positive attitude, I strive to improve my skills and help
              others. With my hospitality and customer service experience,
              leadership and team player I am confident I can contribute to your
              business's growth.
            </p>

            <p className="text-sm text-white/60">
              Based in Los Angeles, California. Fluent in English, and Spanish.
              Studying at CodeCademy.
            </p>
          </div>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-white/10 my-16"></div>
      </div>
    </section>
  );
};

export default About;
