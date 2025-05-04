import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleDownloadCV = async () => {
    try {
      const fileUrl = "/Mauro_Alvarado_CV.pdf";
      const response = await fetch(fileUrl);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch CV: ${response.status} ${response.statusText}`
        );
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Mauro_Alvarado_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
      setMenuOpen(false);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download CV. Please try again later.");
    }
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
    { id: "cv", label: "CV", isDownload: true },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm
        transform transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
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

      <div className="flex flex-col items-center space-y-6 w-full max-w-xs px-4">
        {menuItems.map((item, index) =>
          item.isDownload ? (
            <button
              key={item.id}
              onClick={handleDownloadCV}
              className="text-2xl font-medium text-white/80 hover:text-white transition-all duration-300
                transform hover:scale-105 w-full text-center py-3 border-b border-white/10 last:border-0"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {item.label}
            </button>
          ) : (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-2xl font-medium text-white/80 hover:text-white transition-all duration-300
                transform hover:scale-105 w-full text-center py-3 border-b border-white/10 last:border-0"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {item.label}
            </button>
          )
        )}
      </div>
    </div>
  );
};
