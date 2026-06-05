'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'
import { Globe } from 'lucide-react'

const perks = [
  'Free forever',
  'No account required',
  'Privacy-first design',
  'Your otter awaits',
]

export default function FinalCTA() {
  return (
    <section
      className="py-32 bg-gradient-to-br from-teal-800 via-teal-600 to-cyan-600 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 right-10 w-80 h-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute bottom-0 -left-10 w-64 h-64 rounded-full bg-cyan-300/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 180, delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/mint.png"
            alt="Mint the otter"
            width={88}
            height={88}
          />
        </motion.div>

        <motion.h2
          id="cta-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Take your first break today.
        </motion.h2>

        <motion.p
          className="text-xl text-teal-100/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          Your body has been waiting for this. Install Uptime! in 30 seconds and let Mint
          your otter friend take care of the rest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.3 }}
        >
          <Button
            size="xl"
            className="bg-white text-teal-700 hover:bg-teal-50 font-bold shadow-2xl text-lg px-12 h-16 animate-pulse-glow"
            onClick={() => trackEvent('add_to_chrome_clicked', { location: 'final_cta' })}
            aria-label="Add Uptime! to Chrome — free, 30-second install"
          >
            <Globe size={22} className="mr-2.5" aria-hidden="true" />
            Add to Chrome — Free
          </Button>
        </motion.div>

        <motion.ul
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-teal-200 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          aria-label="Extension benefits"
        >
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-1.5">
              <span aria-hidden="true" className="text-teal-300">✓</span>
              {perk}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
