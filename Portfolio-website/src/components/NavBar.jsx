import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MobileMenu } from "./MobileMenu";

export const NavBar = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef(null);
  const fullText = "StrongAndMal.™";
  const typingSpeed = 100;
  const pauseDuration = 3000;
  const deleteSpeed = 50;
  const emptyPause = 1000;

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Mauro_Alvarado_CV.pdf";
    link.download = "Mauro_Alvarado_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "cv", label: "CV", onClick: handleDownloadCV },
  ];

  // Debounced resize handler
  useEffect(() => {
    let timeoutId = null;
    const checkMobile = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        const newIsMobile = window.innerWidth < 768;
        setIsMobile(newIsMobile);
        if (newIsMobile) {
          setText(fullText);
        }
      }, 100);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Typewriter effect only for desktop
  useEffect(() => {
    if (isMobile) {
      setText(fullText);
      return;
    }

    let index = 0;
    let direction = 1;

    const typeText = () => {
      if (direction === 1) {
        if (index < fullText.length) {
          setText(fullText.substring(0, index + 1));
          index++;
          animationRef.current = setTimeout(typeText, typingSpeed);
        } else {
          animationRef.current = setTimeout(() => {
            direction = -1;
            typeText();
          }, pauseDuration);
        }
      } else {
        if (index > 0) {
          setText(fullText.substring(0, index - 1));
          index--;
          animationRef.current = setTimeout(typeText, deleteSpeed);
        } else {
          animationRef.current = setTimeout(() => {
            direction = 1;
            typeText();
          }, emptyPause);
        }
      }
    };

    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    typeText();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      setIsTyping(false);
    };
  }, [isMobile]);

  return (
    <>
      <nav className="bg-[#161616]/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Username */}
            <div className="w-48">
              <a
                href="#"
                className="text-xl font-bold text-white whitespace-nowrap"
              >
                {text}
                {!isMobile && (
                  <span className="inline-block animate-blink h-5 w-0.5 ml-1 bg-white"></span>
                )}
              </a>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex-1 flex justify-center">
                <div className="flex items-center space-x-12">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.onClick ? undefined : `#${item.id}`}
                      onClick={
                        item.onClick || ((e) => handleNavClick(e, item.id))
                      }
                      className="text-white/60 hover:text-white transition-colors duration-300 relative group cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="relative inline-block">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Button / Mobile Menu Toggle */}
            <div className="w-48 flex justify-end">
              {isMobile ? (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-white/60 hover:text-white transition-colors duration-300"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-6 h-6" />
                  ) : (
                    <FaBars className="w-6 h-6" />
                  )}
                </button>
              ) : (
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="px-6 py-2 text-white/80 border border-white/20 rounded-md hover:bg-white/10 transition-colors duration-300"
                >
                  Contact
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={isMobileMenuOpen}
        setMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
};

export default NavBar;
