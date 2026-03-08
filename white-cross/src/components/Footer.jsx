import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: '#0D0D28', borderTop: '1px solid rgba(221, 187, 255, 0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1 — Logo & tagline */}
          <div className="space-y-4">
            <div
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              White<span style={{ color: '#9E3FFD' }}>Cross</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(221, 187, 255, 0.75)', fontFamily: 'Inter, sans-serif' }}>
              Educate, Prevent, and Empower.
              <br />
              A Future Free From Addiction.
            </p>
            <div
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(158, 63, 253, 0.15)', color: '#DDBBFF', fontFamily: 'Inter, sans-serif' }}
            >
              <Heart size={11} />
              Made with purpose
            </div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
              © 2025 White Cross. All rights reserved.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div className="space-y-4">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#DDBBFF', fontFamily: 'Inter, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Events', to: '/events' },
                { label: 'RxDispose', to: '/rxdispose' },
                { label: 'Postvention Support', to: '/postvention' },
                { label: 'Our Team', to: '/team' },
                { label: 'Join Us', to: '/join' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-purple-300"
                    style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-4">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#DDBBFF', fontFamily: 'Inter, sans-serif' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:988"
                className="flex items-center gap-3 text-sm transition-colors hover:text-purple-300 group"
                style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
              >
                <span
                  className="p-2 rounded-lg group-hover:bg-purple-900/40 transition-colors"
                  style={{ background: 'rgba(158, 63, 253, 0.1)' }}
                >
                  <Phone size={14} style={{ color: '#9E3FFD' }} />
                </span>
                Crisis Line: Call or Text 988
              </a>
              <a
                href="mailto:whitecrossorg@gmail.com"
                className="flex items-center gap-3 text-sm transition-colors hover:text-purple-300 group"
                style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
              >
                <span
                  className="p-2 rounded-lg group-hover:bg-purple-900/40 transition-colors"
                  style={{ background: 'rgba(158, 63, 253, 0.1)' }}
                >
                  <Mail size={14} style={{ color: '#9E3FFD' }} />
                </span>
                whitecrossorg@gmail.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-purple-300 group"
                style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
              >
                <span
                  className="p-2 rounded-lg group-hover:bg-purple-900/40 transition-colors"
                  style={{ background: 'rgba(158, 63, 253, 0.1)' }}
                >
                  <Instagram size={14} style={{ color: '#9E3FFD' }} />
                </span>
                @whitecrossorg
              </a>
            </div>

            {/* Crisis callout */}
            <div
              className="mt-6 p-4 rounded-xl border"
              style={{
                background: 'rgba(158, 63, 253, 0.08)',
                borderColor: 'rgba(158, 63, 253, 0.2)',
              }}
            >
              <p
                className="text-xs font-medium mb-1"
                style={{ color: '#DDBBFF', fontFamily: 'Inter, sans-serif' }}
              >
                In crisis? You're not alone.
              </p>
              <a
                href="tel:988"
                className="text-sm font-bold"
                style={{ color: '#9E3FFD', fontFamily: 'Poppins, sans-serif' }}
              >
                Call or text 988 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
