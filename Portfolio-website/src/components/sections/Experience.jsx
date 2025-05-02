import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Junior Full Stack Developer",
      company: "DigitalMal LLC",
      description:
        "Building modern web applications with a focus on user experience and performance. Implementing responsive designs and efficient backend solutions.",
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

  return (
    <section
      id="experience"
      className="min-h-screen py-24 bg-[#161616] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold mb-16 text-white">Experience</h2>

        <div className="relative">
          {/* Tree line path */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/10"></div>

          <div className="space-y-16 pl-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Tree node */}
                <div className="absolute -left-16 top-6 w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xl font-bold text-white/60">
                      {exp.year}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full">
                        I am here!
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-white/60 mb-1">{exp.company}</p>
                  {exp.location && (
                    <p className="text-white/40 mb-2">{exp.location}</p>
                  )}

                  <p className="text-white/80 mb-3 text-sm">
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
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-7xl font-bold mt-24 mb-16 text-white">Education</h2>

        <div className="relative">
          {/* Tree line path */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/10"></div>

          <div className="space-y-16 pl-16">
            {education.map((edu, index) => (
              <div key={index} className="relative group">
                {/* Tree node */}
                <div className="absolute -left-16 top-6 w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xl font-bold text-white/60">
                      {edu.year}
                    </span>
                    {edu.isCurrent && (
                      <span className="px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full">
                        Currently Studying
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-white/60 mb-1">{edu.school}</p>
                  {edu.location && (
                    <p className="text-white/40 mb-2">{edu.location}</p>
                  )}

                  <p className="text-white/80 text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
