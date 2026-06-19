'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    emoji: '👁️',
    title: 'Detects',
    description:
      'Uptime! quietly monitors your active tab time in Chrome. Smart, local detection — no invasive tracking, no cloud sync, just awareness.',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-cyan-400',
    delay: 0,
  },
  {
    number: '02',
    emoji: '🔔',
    title: 'Reminds',
    description:
      "When you've been sitting too long, your green otter friend pops up with a distressed expression and a friendly nudge to move.",
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-sky-400',
    delay: 0.15,
  },
  {
    number: '03',
    emoji: '🎁',
    title: 'Rewards',
    description:
      'Stand up and get rewarded! Gemini AI generates a personalized little-known fun fact across various topics, and...a special surprise if you complete 3 breaks. 👀',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-cyan-400',
    delay: 0.3,
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Dead Simple
          </span>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900"
          >
            Three steps to a healthier you
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            No habits to build. No willpower required. Just install and let Uptime! do the work.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-teal-200 via-cyan-200 to-sky-200"
            aria-hidden="true"
          />

          <ol className="grid md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step) => (
              <li key={step.number} className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} flex items-center justify-center mb-6 shadow-xl`}
                    aria-hidden="true"
                  >
                    <span className="text-5xl">{step.emoji}</span>
                  </div>
                  <span className="text-xs font-black text-slate-400 tracking-widest uppercase mb-2">
                    Step {step.number}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>

        <motion.div
          className="mt-16 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-100 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Image
            src="/mint.png"
            alt="Mint the otter"
            width={48}
            height={48}
            className="flex-shrink-0"
          />
          <div>
            <p className="font-bold text-slate-900">Your otter gets happier every time you move.</p>
            <p className="text-slate-600 text-sm mt-0.5">
              Complete enough breaks and watch your mascot transform from anxious wreck to pure joy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
