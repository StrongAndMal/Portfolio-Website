import React, { useState, useEffect } from "react";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    "Greetings",
    "I am Mauro",
    "A Jr. Full Stack Developer",
    "A Fitness Influencer",
    "A Musician / DJ",
    "A Content Creator",
    "And a Traveler & Entrepreneur",
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 1000);

    const loadingTimer = setTimeout(() => {
      // Start fade out animation
      setIsVisible(false);
      // Remove component after animation completes
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Match this with the CSS transition duration
    }, 7000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Match this with the CSS transition duration
  };

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#161616] z-50 cursor-pointer transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClick}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          <span className="inline-block animate-fade-in-out overflow-hidden whitespace-nowrap">
            {texts[currentText]}
          </span>
        </h1>
        <p className="mt-4 text-white/60 text-sm transition-opacity duration-300 ease-in-out">
          Click anywhere to skip
        </p>
      </div>
    </div>
  );
};
