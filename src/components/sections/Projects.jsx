import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold text-center mb-16 text-white">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">
                PlayList Finder
              </h3>
              <p className="text-white/60 mb-6">
                A web application that allows users to search for playlists and
                add them to their Spotify account. Fixing the problem of not
                being able to find the right playlist for the right mood.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "React",
                  "Tailwind CSS",
                  "TypeScript",
                  "Vite",
                  "Vercel",
                  "Spotify API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://myplaylistfinder.com"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors group"
              >
                View Project
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">
                FitFolio Ai
              </h3>
              <p className="text-white/60 mb-6">
                A web application that allows users to utilize AI to generate
                workout summaries / insights from their photos that they upload.
                A SaaS product for users to track their progress and get
                insights into their workouts than just a simple fit tracker.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "React",
                  "Tailwind CSS",
                  "TypeScript",
                  "Vite",
                  "shadcn/ui",
                  "Vercel",
                  "OpenAI API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/StrongAndMal/fit-folio-ai"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors group"
              >
                View Project
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">WeatherApp</h3>
              <p className="text-white/60 mb-6">
                A small weather app that allows users to search for the weather
                of a city and get the current weather and a 5 day forecast.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Google Maps API", "JavaScript", "CSS", "HTML"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://strongandmal.github.io/WeatherApp/"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors group"
              >
                View Project
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Card Game (Lower or Higher)
              </h3>
              <p className="text-white/60 mb-6">
                A simple card game that allows users to guess whether the next
                card is higher or lower than the current card. Finding the best
                strategy to win the game and beat the dealer.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["JavaScript", "CSS", "HTML"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://strongandmal.github.io/CardGame/"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors group"
              >
                View Project
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
