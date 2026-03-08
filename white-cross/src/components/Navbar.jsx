import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'RxDispose', to: '/rxdispose' },
  { label: 'Postvention', to: '/postvention' },
  { label: 'Team', to: '/team' },
  { label: 'Join Us', to: '/join' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            to="/"
            className="font-poppins font-bold text-xl tracking-tight text-navy"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#16163F' }}
          >
            White<span style={{ color: '#9E3FFD' }}>Cross</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(link.to)
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
                style={{
                  color: isActive(link.to) ? '#9E3FFD' : undefined,
                  backgroundColor: isActive(link.to) ? '#F5F3FF' : undefined,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:988"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #9E3FFD, #6A0DAD)',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 14px rgba(158, 63, 253, 0.35)',
              }}
            >
              <Phone size={14} />
              Get Help Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-purple-50 text-purple-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{
                    color: isActive(link.to) ? '#9E3FFD' : undefined,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:988"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, #9E3FFD, #6A0DAD)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <Phone size={14} />
                Get Help Now — Call 988
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
