"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-28 px-6 bg-[#0B0D10]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 text-lg text-gray-400 leading-relaxed space-y-6"
        >
          <p>
            I’m a {" "}<span className="relative font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.25)] transition-all duration-300 hover:text-cyan-300">
            Backend Engineer{" "}</span>
            with experience building and maintaining enterprise-grade backend
            systems.
          </p>

          <p>
            I primarily work with{" "}
            <span className="text-gray-300">Python</span>,{" "}
            <span className="text-gray-300">Django</span>, and{" "}
            <span className="text-gray-300">Spring Boot</span> to design
            secure and scalable backend services and APIs. My experience
            includes developing robust APIs, architecting payment flows using{" "}
            <span className="text-gray-300">Stripe</span> and
            <span className="text-gray-300"> Moyasar</span>, handling
            webhook-based event processing, and managing end-to-end payment
            lifecycle. I’ve also built performance-critical systems and backend
            mechanisms that are actively used in production environments.
          </p>

          <p>
            Alongside, I’ve also integrating{" "}
            <span className="text-gray-300"> Generative AI</span> capabilities
            into applications — such as AI based product description and product
            image generation, also building intelligent search and
            recommendation features using short language models — while ensuring
            data security and system reliability.
          </p>

          <p>
            I focus on writing clean, maintainable backend code and solving real
            system-level challenges around scalability, security, reliability,
            and long-term maintainability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
