'use client'

import { motion } from 'framer-motion'

/* ---- Stream Contents (Separated by Backend Concern) ---- */

const paymentStream = [
  'POST /api/v1/payments/subscribe',
  'StripeWebhook → payment_intent.succeeded',
  'PaymentIntent confirmed',
  'Subscription activated',
  'Message queued (RabbitMQ)',
  'Retrying failed message',
  'Consumer acknowledged event',
  'Subscription lifecycle completed',
]

const authStream = [
  'JWTAuthentication → Request validated',
  'Access token verified',
  'Role-based access granted',
  'Secure session established',
  'Optimizing query execution (25ms)',
  'Using DB index for lookup',
  'Caching response (Memcached)',
  'Cache hit → response served',
]

const performanceStream = [
  'Optimizing query execution (25ms)',
  'Using DB index for lookup',
  'Caching response (Memcached)',
  'Cache hit → response served',
  'POST /api/v1/payments/subscribe',
  'StripeWebhook → payment_intent.succeeded',
  'PaymentIntent confirmed',
  'Subscription activated',
]

const messagingStream = [
  'Message queued (RabbitMQ)',
  'Retrying failed message',
  'Consumer acknowledged event',
  'Subscription lifecycle completed',
  'JWTAuthentication → Request validated',
  'Access token verified',
  'Role-based access granted',
  'Secure session established',
]

/* ---- Reusable Stream Component ---- */

function CodeStream({
  lines,
  className,
  direction = 'up',
  duration = 20,
}: {
  lines: string[]
  className: string
  direction?: 'up' | 'down'
  duration?: number
}) {
  return (
    <motion.div
      initial={{ y: direction === 'up' ? 0 : -160 }}
      animate={{ y: direction === 'up' ? -160 : 0 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className={`absolute opacity-15 font-mono text-green-400 text-sm leading-8 ${className}`}
    >
      {lines.map((line, i) => (
        <div key={i} className="whitespace-nowrap">
          {line}
        </div>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* ---- Code Streams (ALIGNMENT UNCHANGED) ---- */}
      <CodeStream
        lines={paymentStream}
        className="top-12 left-6"
      />

      <CodeStream
        lines={authStream}
        className="top-1/4 left-[26%]"
        direction="down"
        duration={28}
      />

      <CodeStream
        lines={performanceStream}
        className="top-1/4 right-[26%]"
        duration={26}
      />

      <CodeStream
        lines={messagingStream}
        className="top-12 right-6"
        direction="down"
        duration={32}
      />

      {/* ---- Main Content ---- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Abubakar Mulla
        </h1>

        <p className="mt-4 text-xl text-gray-200">
          Backend Engineer building scalable, secure, and production-ready backend systems.
        </p>

        <p className="mt-6 text-lg text-gray-400">
          Experience across payments, subscriptions, API design,
          security hardening, and AI-powered backend integrations —
          focused on real-world, production-grade systems.
        </p>
      </motion.div>
    </section>
  )
}
