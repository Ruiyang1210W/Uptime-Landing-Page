'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      "I've tried every productivity app out there, but Uptime! is the first one that actually makes me want to get up. Mint's little distressed face is too cute to ignore!",
    name: 'Sarah T.',
    role: 'Senior Software Engineer',
    avatar: '👩‍💻',
    rating: 5,
  },
  {
    quote:
      "After two weeks of using Uptime!, my chronic back pain is nearly gone. The AI compliments are genuinely funny — I actually look forward to break time now.",
    name: 'Marcus L.',
    role: 'UX Designer',
    avatar: '👨‍🎨',
    rating: 5,
  },
  {
    quote:
      "The mini challenges are wild. Yesterday I had to do 10 shoulder rolls and learn about deep-sea bioluminescence in the same 2-minute break. 10/10, would stand again.",
    name: 'Jamie K.',
    role: 'Product Manager',
    avatar: '🧑‍💼',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-base leading-none" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-teal-50 to-cyan-50"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What People Are Saying
          </span>
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 flex items-center justify-center gap-3"
          >
            Users love their otter
            <Image
              src="/mint.png"
              alt="Mint the otter"
              width={44}
              height={44}
              className="-mb-1"
            />
          </h2>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div
            className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium px-4 py-2 rounded-full"
            role="note"
            aria-label="These testimonials are fictional placeholders for layout purposes"
          >
            <span aria-hidden="true">⚠️</span>
            PLACEHOLDER — These testimonials are fictional and for layout purposes only
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
            >
              <article
                className="bg-white rounded-2xl p-6 shadow-sm border border-teal-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col"
                aria-label={`Placeholder testimonial from ${t.name}, ${t.role}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-2xl flex-shrink-0"
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm leading-tight">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>

                <Stars count={t.rating} />

                <blockquote className="mt-4 text-slate-700 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <p
                  className="mt-4 text-xs text-amber-600 font-semibold border-t border-amber-100 pt-3"
                  aria-hidden="true"
                >
                  [ PLACEHOLDER TESTIMONIAL ]
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
