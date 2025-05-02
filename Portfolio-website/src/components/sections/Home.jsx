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
      className="min-h-screen pt-24 flex items-center justify-center bg-[#161616] relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="container mx-auto px-4 text-center relative">
          <div className="mb-16 relative">
            {/* Polaroid Container */}
            <div className="relative inline-block transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div
                className="bg-white p-2 shadow-2xl rounded-sm"
                style={{
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  transform: "rotateX(10deg)",
                }}
              >
                <div className="relative">
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].caption}
                    className="w-64 h-64 object-cover filter brightness-100 contrast-100"
                  />
                  <div className="absolute inset-0 shadow-inner"></div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2 px-4">
              <button
                onClick={prevImage}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors duration-300"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors duration-300"
              >
                →
              </button>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            Mauro Alvarado.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
            Junior Full Stack Developer | Fitness Enthusiast | Content Creator
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
