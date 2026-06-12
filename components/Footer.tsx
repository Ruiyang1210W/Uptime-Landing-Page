import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/mint.png"
              alt="Mint the otter"
              width={40}
              height={40}
            />
            <div>
              <p className="text-white font-bold text-lg leading-none">Uptime!</p>
              <p className="text-sm text-slate-500 mt-0.5">AI-powered sitting reminders for Chrome</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="https://github.com/OniKiely/Uptime-_BroncoHack2026Project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              aria-label="View Uptime! source code on GitHub (opens in new tab)"
            >
              <ExternalLink
                size={18}
                aria-hidden="true"
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium">View on GitHub</span>
            </a>
            <p className="text-xs text-slate-600">
              Built with ❤️ at BroncoHack 2026 · Powered by Gemini
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-700">
          <p>© {new Date().getFullYear()} Uptime! All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <p className="flex items-center gap-1.5">
              Your body will thank you
              <Image src="/mint.png" alt="Mint" width={16} height={16} className="inline-block" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
