import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "", "sending", "ok", "err"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS Configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // EmailJS Template Parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Mauro Alvarado",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setStatus("ok");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setStatus("err");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 flex items-center justify-center text-white/80"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-7xl font-bold mb-16 text-white text-center">
          Let's Connect
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none text-white placeholder-white/40"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none text-white placeholder-white/40"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none text-white placeholder-white/40"
          ></textarea>

          {status === "ok" && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {status === "err" && (
            <p className="text-red-500">
              Failed to send message. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors duration-300 ${
              status === "sending" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
