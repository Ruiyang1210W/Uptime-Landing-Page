'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { trackEvent } from '@/lib/analytics'
import { CHROME_STORE_URL } from '@/lib/constants'
import { Globe, Sparkles, ArrowDown } from 'lucide-react'

/*
 * ─── A/B TEST SETUP: Hero Headline ──────────────────────────────────────────
 *
 * Variant A (control): "Your Body Deserves Better Than Your Chair"
 * Variant B  (test):   "Sit Less. Move More. Feel Human Again."
 *
 * HOW TO IMPLEMENT:
 *
 * 1. Add middleware.ts at project root to assign + persist variant:
 *
 *      import { NextResponse } from 'next/server'
 *      import type { NextRequest } from 'next/server'
 *      export function middleware(req: NextRequest) {
 *        const existing = req.cookies.get('hero_variant')?.value
 *        if (existing === 'A' || existing === 'B') return NextResponse.next()
 *        const variant = Math.random() < 0.5 ? 'A' : 'B'
 *        const res = NextResponse.next()
 *        res.cookies.set('hero_variant', variant, { maxAge: 60 * 60 * 24 * 7 })
 *        return res
 *      }
 *      export const config = { matcher: '/' }
 *
 * 2. Read variant in this component via cookies() (server) or a prop:
 *
 *      const variant = (await cookies()).get('hero_variant')?.value ?? 'A'
 *      const headline = variant === 'B'
 *        ? 'Sit Less. Move More. Feel Human Again.'
 *        : 'Your Body Deserves Better Than Your Chair'
 *
 * 3. Track impressions on mount in Hero:
 *
 *      useEffect(() => {
 *        trackEvent('hero_headline_impression', { variant })
 *      }, [variant])
 *
 * 4. Measure: In Vercel Analytics → Events, compare CTR on
 *    "add_to_chrome_clicked" filtered by cookie hero_variant = A vs B.
 *
 * ────────────────────────────────────────────────────────────────────────────
 */

const HEADLINE_A = 'Your Body Deserves Better Than Your Chair'
// const HEADLINE_B = 'Sit Less. Move More. Feel Human Again.'
const ACTIVE_HEADLINE = HEADLINE_A

export default function Hero() {
  return (
    <section
      aria-label="Hero — Uptime! Chrome extension"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-800 via-teal-600 to-cyan-600"
    >
      {/* Floating meme otter — appears once, drifts up, disappears */}
      <motion.div
        className="absolute bottom-24 left-10 sm:left-20 pointer-events-none z-0 select-none"
        aria-hidden="true"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: [0, 0.65, 0.65, 0], y: [60, 30, 0, -50] }}
        transition={{ duration: 7.5, delay: 1.8, ease: 'easeInOut', times: [0, 0.2, 0.7, 1] }}
      >
        <Image src="/mint_meme.png" alt="" width={140} height={140} />
      </motion.div>

      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal-300/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 pt-36 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text content */}
        <motion.div
          className="text-white"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge className="mb-5 bg-white/15 text-white border-white/25 backdrop-blur-sm hover:bg-white/25 cursor-default">
              <Sparkles size={11} className="mr-1.5" aria-hidden="true" />
              Powered by Gemini
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            {ACTIVE_HEADLINE}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-teal-50/90 mb-8 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            Uptime! is the AI-powered Chrome extension that catches you when you've been glued to your
            seat — then rewards you with fun facts, genuine compliments, and mini challenges for getting
            up.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
          >
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'xl' }),
                'bg-white text-teal-700 hover:bg-teal-50 font-bold shadow-2xl hover:shadow-teal-900/30 transition-all duration-200 animate-pulse-glow'
              )}
              onClick={() => trackEvent('add_to_chrome_clicked', { location: 'hero' })}
              aria-label="Add Uptime! extension to Chrome — free"
            >
              <Globe size={20} className="mr-2" aria-hidden="true" />
              Add to Chrome — It&apos;s Free
            </a>
            <Button
              size="xl"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all"
              onClick={() =>
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
              }
              aria-label="See how Uptime! works"
            >
              See How It Works
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-teal-200/80 flex flex-wrap items-center gap-x-4 gap-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="flex items-center gap-1.5"><span aria-hidden="true">✓</span> Free forever</span>
            <span className="flex items-center gap-1.5"><span aria-hidden="true">✓</span> No account needed</span>
            <span className="flex items-center gap-1.5"><span aria-hidden="true">✓</span> 2-minute setup</span>
          </motion.p>
        </motion.div>

        {/* Right: Otter mascot */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative animate-float">
            {/* Glow behind screenshot */}
            <div className="absolute inset-0 rounded-3xl bg-white/15 blur-3xl scale-105" aria-hidden="true" />
            <Image
              src="/Main screenshot.png"
              alt="Uptime! Chrome extension in action"
              width={520}
              height={360}
              className="relative drop-shadow-2xl rounded-2xl"
              priority
            />
            <motion.span
              className="absolute top-4 -right-4 text-yellow-300 text-2xl"
              animate={{ y: [0, -7, 0], rotate: [0, 12, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              ✨
            </motion.span>
            <motion.span
              className="absolute bottom-6 -left-4 text-yellow-200 text-base"
              animate={{ y: [0, -5, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              aria-hidden="true"
            >
              ⭐
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 cursor-default"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
