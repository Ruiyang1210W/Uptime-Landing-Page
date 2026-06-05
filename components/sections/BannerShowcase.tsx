'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BannerShowcase() {
  return (
    <section
      className="bg-slate-900 py-16"
      aria-label="Uptime! product banner"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        >
          <Image
            src="/Uptime banner.jpg"
            alt="Uptime! extension — AI-powered sitting reminder with the Mint otter mascot"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
          {/* Subtle overlay gradient at bottom for blending */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  )
}
