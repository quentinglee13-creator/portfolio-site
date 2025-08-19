import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Brand Identity Design",
    description: "Minimalist brand design focusing on timeless typography and modern layouts.",
  },
  {
    title: "Digital Collage Series",
    description: "Experimental artwork combining photography, textures, and surreal design elements.",
  },
  {
    title: "Fitness & Lifestyle Posters",
    description: "Clean graphic posters promoting wellness, balance, and performance.",
  },
];

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <header className="mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-gray-900"
        >
          Quentin Lee
        </motion.h1>
        <p className="text-gray-600 mt-2">Graphic Designer | Creative Thinker | Visual Storyteller</p>
      </header>

      {/* Projects */}
      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p className="text-gray-600 mt-2">{proj.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Quentin Lee — All Rights Reserved
      </footer>
    </div>
  );
}
