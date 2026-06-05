'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    number: '86%',
    label: 'of Americans sit for 9+ hours per day',
    source: 'American Heart Association',
    icon: '🪑',
    color: 'from-teal-500 to-cyan-400',
  },
  {
    number: '2×',
    label: 'increased cardiovascular disease risk from prolonged sitting',
    source: 'European Heart Journal',
    icon: '❤️',
    color: 'from-cyan-500 to-sky-400',
  },
  {
    number: '54%',
    label: 'of desk workers suffer from chronic back pain',
    source: 'National Institutes of Health',
    icon: '🩺',
    color: 'from-sky-500 to-cyan-400',
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      className="py-24 bg-slate-900 text-white"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <motion.span
            className="block text-5xl mb-6"
            aria-hidden="true"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          >
            😰
          </motion.span>
          <h2
            id="problem-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            We sit too much.
            <br />
            <span className="text-teal-400">Our bodies know it.</span>
            <br />
            Our brains ignore it.
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            You open Chrome to check one quick thing, and three hours later you're still in your
            chair. Your otter is not happy about this.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
            >
              <div className="group relative p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  aria-hidden="true"
                />
                <div
                  className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  aria-hidden="true"
                />
                <div className="text-4xl mb-4" aria-hidden="true">{stat.icon}</div>
                <div
                  className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                  aria-label={`Statistic: ${stat.number}`}
                >
                  {stat.number}
                </div>
                <p className="text-slate-200 font-semibold mb-3 leading-snug">{stat.label}</p>
                <p className="text-xs text-slate-600">Source: {stat.source}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-500 text-lg">
            The good news? Breaking this cycle only takes{' '}
            <span className="text-teal-400 font-semibold">a few minutes at a time.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
