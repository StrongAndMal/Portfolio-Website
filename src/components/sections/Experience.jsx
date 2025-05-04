import React, { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import confetti from "canvas-confetti";

// Utility to detect mobile devices
const isMobileDevice = () =>
  typeof window !== "undefined" &&
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );

export const Experience = () => {
  const [hasPlayedConfetti, setHasPlayedConfetti] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const currentJobNodeRef = useRef(null);

  const experiences = [
    {
      year: "2024 - Present",
      title: "Junior Full Stack Developer",
      company: "DigitalMal LLC",
      description:
        "A new company that I've created and working for, I am building modern web applications with a focus on user experience and performance. Implementing responsive designs and efficient backend solutions.",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
        "RESTful APIs",
      ],
      isCurrent: true,
    },
    {
      year: "Aug 2023 - Present",
      title: "Valet Attendant",
      company: "LAZ Parking",
      location: "Santa Monica",
      description:
        "Park and retrieve 35+ vehicles per shift, ensuring safety and reducing wait times by 20%. Manage keys with 100% accuracy and inspect vehicles to reduce liability claims by 25%. Deliver excellent service, boosting positive feedback by 15%, and handle up to $500 in daily transactions with zero discrepancies.",
      skills: [
        "Vehicle Management",
        "Customer Service",
        "Cash Handling",
        "Safety Protocols",
        "Time Management",
        "Attention to Detail",
      ],
      isCurrent: false,
    },
    {
      year: "Oct 2022 - Jul 2023",
      title: "Valet Attendant",
      company: "Towne Park",
      location: "Portland",
      description:
        "Park and retrieve vehicles for guests with excellent communication skills and multitasking abilities. Maintain a clean driving record while ensuring the safety of guests' vehicles and providing exceptional customer service.",
      skills: [
        "Vehicle Operations",
        "Customer Relations",
        "Safety Management",
        "Communication",
        "Multitasking",
      ],
      isCurrent: false,
    },
    {
      year: "Jul 2021 - Nov 2022",
      title: "Front Desk Supervisor",
      company: "Aimbridge Hospitality",
      location: "Beaverton",
      description:
        "Oversee daily operations, manage front-desk employees, and ensure exceptional customer service for hotel guests. Handle guest inquiries and issues, manage financial transactions, and oversee inventory. Ensure smooth front desk operation and enhance guest experience.",
      skills: [
        "Team Leadership",
        "Operations Management",
        "Customer Service",
        "Financial Management",
        "Inventory Control",
        "Problem Resolution",
      ],
      isCurrent: false,
    },
    {
      year: "Feb 2019 - Dec 2020",
      title: "Housekeeper",
      company: "Hilton Hotels & Resorts",
      location: "Los Angeles",
      description:
        "Maintain cleanliness and organization through dusting, vacuuming, mopping, laundry, bed-making, and supply restocking. Perform minor repairs and interact with guests to provide assistance and information. Ensure property cleanliness and comfort with attention to detail.",
      skills: [
        "Housekeeping",
        "Attention to Detail",
        "Customer Service",
        "Time Management",
        "Maintenance",
        "Organization",
      ],
      isCurrent: false,
    },
    {
      year: "Jan 2018 - Jan 2019",
      title: "Crew Member",
      company: "McDonald's",
      location: "Los Angeles",
      description:
        "Provide fast and friendly customer service, take orders, prepare food, operate cash registers, and maintain restaurant cleanliness. Restock supplies, assist with inventory management, and handle customer and team member communication.",
      skills: [
        "Customer Service",
        "Food Preparation",
        "Cash Handling",
        "Inventory Management",
        "Teamwork",
        "Communication",
      ],
      isCurrent: false,
    },
  ];

  const education = [
    {
      year: "Jan 2024 - Present",
      title: "Music Production & Business",
      school: "Musicians Institute",
      location: "Los Angeles",
      description:
        "Currently attending MI to pursue a career in music production and music business. Due to my love for music, I decided to attend LA's biggest music school to pursue something I love. I am a proud student of MI.",
      isCurrent: true,
    },
    {
      year: "Sep 2014 - Jun 2017",
      title: "High School Diploma",
      school: "Manual Arts Senior High",
      location: "Los Angeles",
      description: "Graduated with a GPA of 3.0",
      isCurrent: false,
    },
  ];

  // Track scroll position to update active timeline indicator
  useEffect(() => {
    const handleScroll = () => {
      const timelineNodes = document.querySelectorAll(".timeline-node");

      let closestIndex = null;
      let closestDistance = Infinity;

      timelineNodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const distanceToCenter = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );

        if (distanceToCenter < closestDistance) {
          closestDistance = distanceToCenter;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger confetti via IntersectionObserver on current job node (desktop only)
  useEffect(() => {
    if (hasPlayedConfetti) return;
    if (!currentJobNodeRef.current) return;
    if (isMobileDevice()) return; // Disable confetti on mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedConfetti) {
          setHasPlayedConfetti(true);
          const rect = entry.target.getBoundingClientRect();
          confetti({
            particleCount: 100,
            spread: 50,
            origin: {
              x: rect.left / window.innerWidth,
              y: rect.top / window.innerHeight,
            },
            colors: ["#ffffff", "#61DAFB", "#f0db4f", "#ff4081"],
            scalar: 0.7,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentJobNodeRef.current);
    return () => observer.disconnect();
  }, [hasPlayedConfetti]);

  // Clone and reverse the experiences array to show oldest first
  const chronologicalExperiences = [...experiences].reverse();

  return (
    <section
      id="experience"
      className="min-h-screen py-16 sm:py-24 relative overflow-x-hidden overflow-y-auto"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-16 text-white text-center">
          My Experience
        </h2>

        <div className="relative flex flex-col sm:flex-row">
          {/* Tree line path with glow effect */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-1 bg-white/10"></div>
          <div
            className="hidden sm:block absolute left-8 top-0 w-1 bg-white/30 z-10 timeline-progress-indicator transition-all duration-300"
            style={{
              height: `$ {
                activeIndex !== null
                  ? ((activeIndex + 1) / chronologicalExperiences.length) * 100
                  : 0
              }%`,
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.3)",
            }}
          ></div>

          <div className="flex flex-col gap-8 sm:gap-16 pl-0 sm:pl-16 w-full">
            {chronologicalExperiences.map((exp, index) => (
              <div
                key={index}
                className="relative group flex flex-col sm:flex-row"
                ref={exp.isCurrent ? currentJobNodeRef : null}
              >
                {/* Tree node with glow effect for active node */}
                <div
                  className={`timeline-node static sm:absolute sm:-left-16 left-1/2 sm:translate-x-0 -translate-x-1/2 top-6 sm:top-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full 
                    ${activeIndex === index ? "bg-white/30" : "bg-white/10"} 
                    transition-all duration-300 flex items-center justify-center
                    ${activeIndex === index ? "shadow-glow" : ""}
                    ${exp.isCurrent ? "current-job-node" : ""}`}
                  style={{
                    boxShadow:
                      activeIndex === index
                        ? "0 0 15px 5px rgba(255, 255, 255, 0.2)"
                        : "none",
                  }}
                >
                  <div
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full 
                      ${activeIndex === index ? "bg-white/70" : "bg-white/20"} 
                      transition-all duration-300`}
                  ></div>
                </div>

                {/* Content with animation */}
                <RevealOnScroll>
                  <div
                    className={`bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-lg border 
                    ${
                      activeIndex === index
                        ? "border-white/30"
                        : "border-white/10"
                    } 
                    group-hover:border-white/20 transition-all duration-300 
                    ${
                      exp.isCurrent
                        ? "ring-2 ring-white/30 ring-offset-2 ring-offset-[#161616]"
                        : ""
                    } w-full`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-2">
                      <span className="text-lg sm:text-xl font-bold text-white/60">
                        {exp.year}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-white/10 text-white rounded-full animate-pulse">
                          I am here!
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-white/60 mb-1">{exp.company}</p>
                    {exp.location && (
                      <p className="text-white/40 mb-2">{exp.location}</p>
                    )}

                    <p className="text-white/80 mb-3 text-xs sm:text-sm">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs bg-white/5 text-white/60 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mt-16 mb-8 sm:mb-16 text-white text-center">
          My Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl shadow-md p-4 sm:p-8 transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-lg group cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-2">
                <span className="text-lg sm:text-xl font-bold text-white/60">
                  {edu.year}
                </span>
                {edu.isCurrent && (
                  <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-white/10 text-white rounded-full animate-pulse">
                    Currently Studying
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {edu.title}
              </h3>
              <p className="text-white/60 mb-1">{edu.school}</p>
              {edu.location && (
                <p className="text-white/40 mb-2">{edu.location}</p>
              )}
              <p className="text-white/80 text-xs sm:text-sm">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
