'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="relative py-28 px-6 bg-[#0B0D10]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Let’s Build Something Solid
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          I’m open to backend engineering roles where I can contribute to building 
          scalable, reliable systems and production-grade backend solutions.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Resume */}
          <a
            href="https://raw.githubusercontent.com/abubakarmulla/resume/refs/heads/master/AbubakarM_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3
                       rounded-lg bg-emerald-500 text-black font-medium
                       hover:bg-emerald-400 transition"
          >
            <Download size={18} />
            Download Resume
          </a>

          {/* Email */}
          <a
            href="mailto:contact.abubakarmulla@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3
                       rounded-lg border border-white/15 text-white
                       hover:border-emerald-400/50 hover:text-emerald-300 transition"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center gap-6 text-gray-400"
        >
          <a
            href="https://www.linkedin.com/in/abubakarmulla23/"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/abubakarmulla"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
