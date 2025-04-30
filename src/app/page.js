import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          I'm a full-stack developer passionate about creating amazing web
          experiences.
        </p>
      </section>

      {/* Projects section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Project description goes here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
