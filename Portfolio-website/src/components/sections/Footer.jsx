import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/StrongAndMal", label: "GitHub" },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/mauro-alvarado-480a9b16b/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/strongandmal/",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@StrongAndMal",
      label: "YouTube",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@strongandmal_",
      label: "TikTok",
    },
  ];

  return (
    <footer className="text-white/60 relative">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group z-50"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
        </button>
      )}

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 max-w-7xl mx-auto">
          {/* Social Links - Left */}
          <div className="space-y-8">
            <h3 className="text-white text-2xl font-medium">Connect</h3>
            <div className="flex flex-wrap gap-6">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-7 h-7 text-white/60 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Middle */}
          <div className="space-y-8">
            <h3 className="text-white text-2xl font-medium">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-base hover:text-white transition-colors duration-300 inline-block py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-base hover:text-white transition-colors duration-300 inline-block py-2"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-base hover:text-white transition-colors duration-300 inline-block py-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-base hover:text-white transition-colors duration-300 inline-block py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Business Info - Right */}
          <div className="space-y-8">
            <h3 className="text-white text-2xl font-medium">DigitalMal LLC</h3>
            <p className="text-base leading-relaxed">
              A new digital company that specializes in creating innovative web
              applications and digital experiences in all niches.
            </p>
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} DigitalMal LLC. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="w-full h-px bg-white/10 mt-16"></div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm px-4">
          <p>Built by Mauro Alvarado</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
