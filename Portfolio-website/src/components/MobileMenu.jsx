import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Mauro_Alvarado_CV.pdf";
    link.download = "Mauro_Alvarado_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "cv", label: "CV", onClick: handleDownloadCV },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#161616]/95 backdrop-blur-sm
        transform transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Close menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center space-y-8 w-full max-w-xs">
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href={item.onClick ? undefined : `#${item.id}`}
            onClick={item.onClick || ((e) => handleNavClick(e, item.id))}
            className="text-3xl font-medium text-white/80 hover:text-white transition-all duration-300 
              transform hover:scale-105 w-full text-center py-3 border-b border-white/10 last:border-0"
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
