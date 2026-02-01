"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  CreditCard,
  Cloud,
  Boxes,
  Sparkles,
} from "lucide-react";

const stacks = [
  {
    title: "Backend",
    icon: Server,
    items: [
      "Python",
      "Django REST Framework",
      "Flask (REST APIs)",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    items: ["MySQL", "Memcached", "SQLite (Dev/Test)"],
  },
  {
    title: "Tools",
    icon: Boxes,
    items: ["Git/GitHub", "Postman", "Jira", "Agile / Scrum"],
  },
  {
    title: "Payments & Queuing",
    icon: CreditCard,
    items: ["Stripe", "Moyasar", "Webhooks", "RabbitMQ"],
  },
  {
    title: "Infrastructure",
    icon: Cloud,
    items: ["AWS", "Docker", "Linux", "CI/CD"],
  },
  {
    title: "Gen-AI",
    icon: Sparkles,
    items: ["SLM Integration", "Image generation", "OpenAI APIs"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-28 px-6 bg-[#0E1014]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center"
        >
          Skills & Tech Stack
        </motion.h2>
        <p className="mt-4 text-center text-gray-500 max-w-xl mx-auto">
            Technologies and skills I use to build secure, scalable backend systems.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {stacks.map((stack, index) => {
            const Icon = stack.icon
            return (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                className="group relative rounded-xl border border-white/10
                bg-[#0B0D10] p-6 transform-gpu
                hover:border-emerald-400/40
                hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
              >
                <div className="flex items-center gap-3 mb-4">
                <Icon size={20} className="text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-medium">{stack.title}</h3>
                </div>

                <ul className="space-y-2 text-gray-400">
                  {stack.items.map((item) => (
                    <li key={item} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
