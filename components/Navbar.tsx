'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'
import { Globe, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-100'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a href="#" className="flex items-center gap-2 group" aria-label="Uptime! — back to top">
          <Image
            src="/mint.png"
            alt="Mint the otter"
            width={28}
            height={28}
            className="transition-transform group-hover:scale-110"
          />
          <span className={`font-extrabold text-xl tracking-tight transition-colors ${scrolled ? 'text-teal-700' : 'text-white'}`}>
            Uptime!
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                scrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden sm:inline-flex bg-teal-500 hover:bg-teal-600 text-white shadow-md font-semibold"
            onClick={() => trackEvent('add_to_chrome_clicked', { location: 'navbar' })}
            aria-label="Add Uptime! to Chrome"
          >
            <Globe size={15} className="mr-1.5" aria-hidden="true" />
            Add to Chrome
          </Button>

          <button
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-teal-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-700 font-medium py-2 hover:text-teal-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button
              className="mt-2 bg-teal-500 hover:bg-teal-600 text-white w-full font-semibold"
              onClick={() => {
                setMobileOpen(false)
                trackEvent('add_to_chrome_clicked', { location: 'navbar_mobile' })
              }}
              aria-label="Add Uptime! to Chrome"
            >
              <Globe size={16} className="mr-2" aria-hidden="true" />
              Add to Chrome — Free
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
