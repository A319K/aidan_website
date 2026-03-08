import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, ShieldCheck, Users, ArrowRight, Phone } from 'lucide-react';
import StatCounter from '../components/StatCounter';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Fade-up section
function FadeSection({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// SVG wave graphic for hero
function HeroWave() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 480 480" className="w-full max-w-md opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle cx="240" cy="240" r="200" fill="rgba(158, 63, 253, 0.08)" />
        {/* Wave layer 1 */}
        <path d="M80 280 Q160 180 240 240 Q320 300 400 200 Q440 160 460 180 L460 400 Q440 420 400 420 Q320 420 240 420 Q160 420 80 420 Z"
          fill="rgba(158, 63, 253, 0.18)" />
        {/* Wave layer 2 */}
        <path d="M60 300 Q140 220 240 270 Q340 320 420 240 L420 420 Q340 440 240 440 Q140 440 60 420 Z"
          fill="rgba(158, 63, 253, 0.28)" />
        {/* Wave layer 3 */}
        <path d="M40 320 Q120 260 240 300 Q360 340 440 280 L440 460 L40 460 Z"
          fill="rgba(106, 13, 173, 0.35)" />
        {/* Central cross icon */}
        <rect x="220" y="180" width="40" height="120" rx="8" fill="rgba(255,255,255,0.9)" />
        <rect x="180" y="220" width="120" height="40" rx="8" fill="rgba(255,255,255,0.9)" />
        {/* Floating dots */}
        <circle cx="120" cy="160" r="8" fill="rgba(221, 187, 255, 0.6)" />
        <circle cx="380" cy="140" r="12" fill="rgba(158, 63, 253, 0.4)" />
        <circle cx="400" cy="340" r="6" fill="rgba(221, 187, 255, 0.5)" />
        <circle cx="90" cy="380" r="10" fill="rgba(106, 13, 173, 0.3)" />
        {/* Tagline arc decoration */}
        <path d="M140 400 Q240 360 340 400" stroke="rgba(221, 187, 255, 0.5)" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

export default function Home() {
  const previewEvents = events.slice(0, 2);
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  return (
    <PageWrapper>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #ffffff 50%, #EDD9FF 100%)' }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(158,63,253,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
            {/* Left content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                  style={{ background: 'rgba(158, 63, 253, 0.1)', color: '#9E3FFD', fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  Drug Abuse Prevention
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#16163F' }}
              >
                Where
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, #9E3FFD, #6A0DAD)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Hope Meets
                </span>
                Action.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                White Cross is a student-led nonprofit dedicated to drug abuse prevention, education,
                and recovery support across New Jersey. We believe a future free from addiction is possible.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="tel:988"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #9E3FFD, #6A0DAD)',
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 8px 24px rgba(158,63,253,0.35)',
                  }}
                >
                  <Phone size={16} />
                  Get Help Now
                </a>
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all hover:bg-purple-50 border-2"
                  style={{
                    color: '#9E3FFD',
                    borderColor: '#9E3FFD',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Learn About Us
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right wave */}
            <motion.div
              className="lg:col-span-2 h-64 lg:h-[480px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroWave />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ background: '#16163F' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <StatCounter
              display="1 in 6"
              label="Teenagers Misuse Prescription Drugs"
              sublabel="NIDA, 2023"
            />
            <StatCounter
              value={60}
              suffix="%+"
              label="Don't Receive Treatment They Need"
              sublabel="SAMHSA National Survey"
            />
            <StatCounter
              value={106699}
              label="Overdose Deaths in 2021"
              sublabel="CDC, National Center for Health Statistics"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: '#F5F3FF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#9E3FFD', fontFamily: 'Inter, sans-serif' }}
            >
              Our Mission
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold mt-2"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#16163F' }}
            >
              What We Do
            </h2>
          </FadeSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Educate',
                desc: 'We deliver assemblies, classes, and campaigns that bring real drug abuse awareness directly to schools and communities.',
                delay: 0,
              },
              {
                icon: ShieldCheck,
                title: 'Prevent',
                desc: 'Through early intervention, tools like RxDispose, and community partnerships, we stop problems before they start.',
                delay: 0.1,
              },
              {
                icon: Users,
                title: 'Empower',
                desc: 'We equip individuals with knowledge, resources, and peer support so they can make informed decisions and help others.',
                delay: 0.2,
              },
            ].map(({ icon: Icon, title, desc, delay }) => (
              <FadeSection key={title} delay={delay}>
                <div
                  className="p-8 rounded-2xl h-full group hover:-translate-y-1 transition-transform duration-200"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(158, 63, 253, 0.1)',
                    boxShadow: '0 4px 24px rgba(22, 22, 63, 0.06)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(158, 63, 253, 0.1)' }}
                  >
                    <Icon size={22} style={{ color: '#9E3FFD' }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#16163F' }}
                  >
                    {title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRISIS CALLOUT ────────────────────────────────────────────────────── */}
      <section
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #9E3FFD 0%, #6A0DAD 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <FadeSection>
            <span className="text-5xl mb-4 block">💜</span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              In crisis? You are not alone.
            </h2>
            <p
              className="text-lg opacity-85 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Call or text{' '}
              <strong>988</strong> to reach a trained counselor immediately, 24/7.
              Free and confidential.
            </p>
            <a
              href="tel:988"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl"
              style={{ color: '#9E3FFD', fontFamily: 'Poppins, sans-serif' }}
            >
              <Phone size={20} />
              Call or Text 988
            </a>
          </FadeSection>
        </div>
      </section>

      {/* ── EVENTS PREVIEW ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="flex items-end justify-between mb-10">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#9E3FFD', fontFamily: 'Inter, sans-serif' }}
              >
                Community
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold mt-2"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#16163F' }}
              >
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="hidden sm:flex items-center gap-2 font-semibold text-sm transition-colors hover:underline"
              style={{ color: '#9E3FFD', fontFamily: 'Inter, sans-serif' }}
            >
              View All Events <ArrowRight size={14} />
            </Link>
          </FadeSection>

          <div className="grid md:grid-cols-2 gap-6">
            {previewEvents.map((event, i) => (
              <EventCard key={event.id} event={event} delay={i * 0.1} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-semibold text-sm"
              style={{ color: '#9E3FFD', fontFamily: 'Inter, sans-serif' }}
            >
              View All Events <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ background: '#16163F' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeSection>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Join Our Mission
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'rgba(221, 187, 255, 0.8)', fontFamily: 'Inter, sans-serif' }}
            >
              Stay updated on events, resources, and ways to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              {joined ? (
                <div
                  className="flex-1 px-6 py-3.5 rounded-full text-center font-semibold"
                  style={{ background: 'rgba(158,63,253,0.2)', color: '#DDBBFF', fontFamily: 'Inter, sans-serif' }}
                >
                  ✓ You're on the list!
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'white',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                  <button
                    onClick={() => email && setJoined(true)}
                    className="px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                    style={{
                      background: 'linear-gradient(135deg, #9E3FFD, #6A0DAD)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
            <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
              Or{' '}
              <Link to="/join" className="underline hover:text-purple-300" style={{ color: 'rgba(221,187,255,0.6)' }}>
                apply to join the team →
              </Link>
            </p>
          </FadeSection>
        </div>
      </section>
    </PageWrapper>
  );
}
