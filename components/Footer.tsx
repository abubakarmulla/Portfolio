"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#000000]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name + Role */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">Abubakar Mulla</p>
            <p className="flex items-center gap-1 text-sm text-gray-400">
              <Mail size={18}/>contact.abubakarmulla@gmail.com
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <motion.a
              whileHover={{ y: -2, color: "#10B981" }}
              transition={{ duration: 0.2 }}
              href="https://github.com/abubakarmulla"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ y: -2, color: "#10B981" }}
              transition={{ duration: 0.2 }}
              href="https://www.linkedin.com/in/abubakarmulla23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ y: -2, color: "#10B981" }}
              transition={{ duration: 0.2 }}
              href="https://www.instagram.com/abubakarmulla23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </motion.a>

            <motion.a
              whileHover={{ y: -2, color: "#10B981" }}
              transition={{ duration: 0.2 }}
              href="https://www.youtube.com/@abustackstudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </motion.a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Abubakar Mulla. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
