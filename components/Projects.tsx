'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X, GitPullRequestArrow, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'Torry Harris Marketplace',
    description:
      'Enterprise marketplace platform backend supporting vendor subscriptions, payments, notifications, and AI-powered product features.',
    highlights: [
      'Developed and integrated REST APIs using Django, DRF, and Flask-based micro-utilities',
      'Designed subscription lifecycle management using cron jobs and automated invoice generation',
      'Implemented email notifications via DRF and SMS notifications using AWS SNS',
      'Sanitized 130+ APIs using Bleach to mitigate XSS vulnerabilities',
      'Integrated Gen-AI for product description and image generation using OpenAI',
    ],
    pocs: [
      'RabbitMQ for notifications & Stripe webhooks',
      'ClamAV antivirus for media uploads',
      'Short Language Model for product search',
    ],
    tech: [
      'Python',
      'Django',
      'Django REST Framework',
      'Flask',
      'MySQL',
      'Memcached',
      'OpenAI',
    ],
    links: {
      github: null,
      demo: 'https://www.torryharris.com/products/digital-ecosystem-platform/marketplace',
    },
  },
  {
    title: 'THM-Pay: Payment Engine',
    description:
      'Centralized payment middleware designed to abstract multiple payment gateways and manage payment, subscription, and invoicing workflows.',
    highlights: [
      'Built a reusable payment engine used by Torry Harris Marketplace',
      'Integrated Stripe and Moyasar using official Python SDKs',
      'Implemented subscription billing, invoice generation, and payment status tracking',
      'Designed webhook handling and validation mechanisms for payment events',
      'Developed DRF-based APIs backed by MySQL for payment operations',
    ],
    pocs: [
      'Moyasar integration with crons for custom subscription mechanism'
    ],
    tech: [
      'Python',
      'Django REST Framework',
      'Stripe',
      'Moyasar',
      'MySQL',
      'Webhooks',
    ],
    links: {
      github: null,
      demo: 'https://www.torryharris.com/products/digital-ecosystem-platform/marketplace',
    },
  },
  {
    title: 'Order Orbit',
    description:
      'Order and inventory management platform that streamlines interactions between restaurants and customers.',
    highlights: [
      'Built scalable backend services using Spring Boot and REST APIs',
      'Implemented JWT-based authentication for secure access by restaurants and customers',
      'Designed order, menu, and customer management workflows using MySQL',
      'Improved backend communication efficiency and system reliability',
      'Integrated SMTP-based email notifications for order updates',
    ],
    pocs: [],
    tech: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'JWT',
      'MySQL',
      'SMTP',
    ],
    links: {
      github: "https://github.com/Order-Orbit/OrderOrbit-Backend",
      demo: null,
    },
  },
]


export default function Projects() {
  const [activeProject, setActiveProject] = useState<any | null>(null)
  useEffect(() => {
    if (!activeProject) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape')  {
        setActiveProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject])

  return (
    <section className="relative py-28 px-6 bg-[#0B0D10]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center"
        >
          Projects
        </motion.h2>

        <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
          Enterprise-grade backend systems featuring payment engines, scalable architectures,
          security-focused APIs, and production-level integrations with real-world impact.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              className="group relative rounded-xl border border-white/10
                bg-[#0E1014] p-6 transform-gpu
                hover:border-emerald-400/40
                hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            >
              <h3 className="text-lg font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md
                      bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                  >
                    <GitPullRequestArrow size={16} /> GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                  >
                    <ExternalLink size={16} /> Link
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveProject(project)}
                className="mt-5 text-sm text-emerald-400 hover:underline"
              >
                View case study →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)} // outside click/touch to close
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // prevent inside close
              className="relative max-w-3xl w-full bg-[#0B0D10]
              border border-white/10 rounded-xl p-8"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-semibold mb-4">
                {activeProject.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {activeProject.description}
              </p>

              <h4 className="font-medium mb-2">Key Contributions</h4>
              <ul className="space-y-2 text-gray-400 mb-6">
                {activeProject.highlights.map((item: string) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {activeProject.pocs?.length > 0 && (
                <>
                  <h4 className="font-medium mb-2">Proof of Concepts</h4>
                  <ul className="space-y-2 text-gray-400 mb-6">
                    {activeProject.pocs.map((poc: string) => (
                      <li key={poc}>• {poc}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md
                    bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
