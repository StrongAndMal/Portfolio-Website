import React, { useState, useEffect, useRef } from "react";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const texts = [
    "Hey there!",
    "Welcome to my portfolio",
    "Take a look around",
    "I'm just 3 months into my journey",
    "But growing fast",
    "Hope you enjoy my work",
    "Thank you for visiting",
    "🤍",
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 1000);

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 7000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
  };

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#161616] z-50 cursor-pointer transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClick}
    >
      <div className="text-center px-4 w-full max-w-xs sm:max-w-md md:max-w-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white break-words">
          <span className="inline-block animate-fade-in-out overflow-hidden whitespace-normal">
            {texts[currentText]}
          </span>
        </h1>
        <p className="mt-4 text-white/60 text-xs sm:text-sm md:text-base transition-opacity duration-300 ease-in-out">
          Tap anywhere to skip
        </p>
      </div>
    </div>
  );
};
