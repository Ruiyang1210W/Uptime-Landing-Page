'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Rewards',
    description:
      'Gemini AI generates unique, personalized content every single time — tailored fun facts, genuine compliments, and creative mini challenges.',
    badge: 'Powered by Gemini',
    highlight: true,
    otterIcon: false,
  },
  {
    icon: '🧠',
    title: 'Smart Detection',
    description:
      'Intelligently monitors your active browsing time and auto-pauses during meetings or when you step away — zero false alarms.',
    badge: 'Context-Aware',
    highlight: false,
    otterIcon: false,
  },
  {
    icon: '⏱️',
    title: 'Customizable Intervals',
    description:
      'Set your ideal sitting and break durations. Pomodoro, 90-minute deep work, or your own rhythm — Uptime! adapts to you.',
    badge: 'Fully Flexible',
    highlight: false,
    otterIcon: false,
  },
  {
    icon: '',
    title: 'Cute Otter Mascot',
    description:
      'Meet Mint, your green otter companion. She shows genuine distress when you sit too long and pure joy when you take a break.',
    badge: 'Your Buddy',
    highlight: false,
    otterIcon: true,
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description:
      'All detection runs entirely locally in your browser. No data leaves your device. Your browsing habits stay yours.',
    badge: '100% Private',
    highlight: false,
    otterIcon: false,
  },
  {
    icon: '⚡',
    title: 'Zero Friction Setup',
    description:
      "Install, pin to your toolbar, done. No account creation, no subscriptions, no configuration required to get your first reminder.",
    badge: '2-Min Setup',
    highlight: false,
    otterIcon: false,
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="features-heading"
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
            Everything You Need
          </span>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Packed with features,{' '}
            <span className="text-teal-600">light as a feather</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Built for real people with real sitting problems. No bloat, no complexity — just what
            actually moves you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={`relative p-6 rounded-2xl h-full border transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl ${
                  feature.highlight
                    ? 'bg-gradient-to-br from-teal-600 to-cyan-500 text-white border-teal-500 shadow-lg shadow-teal-200'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-teal-200'
                }`}
              >
                {feature.highlight && (
                  <div className="absolute -top-3 left-5">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      ⭐ Star Feature
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  {feature.otterIcon ? (
                    <Image src="/mint.png" alt="Mint the otter" width={44} height={44} />
                  ) : (
                    <span className="text-4xl" aria-hidden="true">{feature.icon}</span>
                  )}
                </div>

                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${
                    feature.highlight ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-700'
                  }`}
                >
                  {feature.badge}
                </span>

                <h3
                  className={`text-lg font-bold mb-2 ${
                    feature.highlight ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    feature.highlight ? 'text-teal-50' : 'text-slate-600'
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
