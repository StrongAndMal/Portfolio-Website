import { useRef, useEffect } from "react";

// Utility to detect mobile devices
const isMobileDevice = () =>
  typeof window !== "undefined" &&
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    // On mobile, reveal immediately as fallback
    if (isMobileDevice() && ref.current) {
      ref.current.classList.add("visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ref.current.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05, // lower threshold for mobile
        rootMargin: "0px 0px 0px 0px", // larger margin for mobile
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ touchAction: "manipulation", willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
};
