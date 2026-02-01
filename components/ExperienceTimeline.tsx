"use client";

import { motion } from "framer-motion";
import { experience } from "./data/experience";

export default function Experience() {
  return (
    <section className="relative py-28 px-6 bg-[#0E1014]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center"
        >
          Experience
        </motion.h2>

        <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
          Professional experience building production-grade backend systems with
          a focus on payments, scalability, and security.
        </p>

        <div className="mt-16 space-y-14">
          {experience.map((item, index) => {
            const isIntern = item.role.toLowerCase().includes("intern");
            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                {/* Timeline Dot */}
                <span className="absolute left-[-7px] top-1.5 h-3 w-3 rounded-full bg-emerald-400" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {item.role}
                    <span
                      className={`ml-3 text-xs px-2 py-0.5 rounded border ${
                        isIntern
                          ? "bg-blue-400/10 border-blue-400/20 text-blue-300"
                          : "bg-emerald-400/10 border-emerald-400/20 text-zinc-300"
                      }`}
                    >
                      {isIntern ? "Internship" : "Full-time"}
                    </span>
                  </h3>
                  <span className="text-sm text-gray-400">{item.duration}</span>
                </div>

                <p className="mt-1 text-sm text-emerald-400">
                  {item.company} • {item.location}
                </p>

                <p className="mt-4 text-gray-400 text-sm">{item.description}</p>

                {/* Responsibilities */}
                <ul className="mt-6 space-y-2 text-sm text-gray-300">
                  {item.responsibilities.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md
                               bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
