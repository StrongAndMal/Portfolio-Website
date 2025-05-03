import React, { useState, useEffect } from "react";
import profileImage from "../../assets/images/IMG_9158_Original.JPG";
import secondImage from "../../assets/images/IMG_0646.jpg";
import image3 from "../../assets/images/IMG_3057.JPG";
import image4 from "../../assets/images/IMG_3739.JPG";
import { RevealOnScroll } from "../RevealOnScroll";

const images = [
  {
    src: profileImage,
    caption: "Selfie",
  },
  {
    src: secondImage,
    caption: "Creating Memories",
  },
  {
    src: image3,
    caption: "One Night in Bangkok",
  },
  {
    src: image4,
    caption: "Life's Journey",
  },
];

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center md:pr-12">
            {/* Name at the top */}

            {/* Subtitle/Role */}
            <div className="text-white/60 text-lg mb-2">
              Jr Full Stack Engineer
            </div>
            {/* Greeting */}
            <div className="text-4xl md:text-6xl font-bold text-white mb-2">
              Hello, I'm
            </div>
            {/* Name (original style) */}
            <div className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
              <p style={{ color: "#6b9080" }}>Mauro Alvarado</p>
            </div>
            {/* Short Description */}
            <div className="text-#ECEBE4 text-base md:text-lg mb-6 italic">
              Crafting solutions with code, driven by purpose and passion.
            </div>
            {/* Animated Ticker Stats - horizontal, below description */}
            <div className="w-full flex justify-center mt-10 mb-2">
              <div className="flex gap-16 ticker-stats">
                {[
                  { number: "26", label: "Age" },
                  { number: "3 Months", label: "Years of Experience" },
                  { number: "5", label: "Projects Worked On" },
                  { number: "3", label: "Projects Deployed" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`stat-card transition-all duration-300 text-center cursor-pointer`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      filter:
                        hovered === null
                          ? "none"
                          : hovered === idx
                          ? "none"
                          : "blur(8px)",
                      opacity: hovered === null ? 1 : hovered === idx ? 1 : 0.5,
                      transform: hovered === idx ? "scale(1.1)" : "scale(1)",
                      zIndex: hovered === idx ? 10 : 1,
                    }}
                  >
                    <div className="text-4xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-lg mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Download CV and Socials (original style) */}
          </div>
          {/* Right: Profile Image */}
          <div className="flex-1 flex flex-col items-center justify-center mt-12 md:mt-0">
            <div className="relative group">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].caption}
                className="w-64 h-80 object-cover bg-white border-8 border-white shadow-xl polaroid-img"
              />
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 text-white/70 hover:text-white transition-colors text-3xl opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 text-white/70 hover:text-white transition-colors text-3xl opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                →
              </button>
            </div>
            <div className="flex gap-3 mt-6">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
