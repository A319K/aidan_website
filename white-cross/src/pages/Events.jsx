import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarDays } from 'lucide-react';
import EventCard from '../components/EventCard';
import EventCalendar from '../components/EventCalendar';
import { events } from '../data/events';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function FadeSection({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const tabs = ['All Events', 'Upcoming Events'];

export default function Events() {
  const [activeTab, setActiveTab] = useState('All Events');

  const filtered =
    activeTab === 'All Events'
      ? events
      : events.filter((e) => e.category === 'upcoming');

  return (
    <PageWrapper>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #16163F 0%, #1E1E5A 60%, #0D0D28 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 60%, rgba(158,63,253,0.15) 0%, transparent 55%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(158,63,253,0.2)', color: '#DDBBFF', fontFamily: 'Inter, sans-serif' }}
          >
            Community
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg opacity-75 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Bringing awareness to communities across New Jersey — one event at a time.
          </motion.p>
        </div>
      </section>

      {/* ── TAB FILTER + CARDS ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <FadeSection className="flex gap-2 mb-10 p-1 rounded-xl w-fit" style={{ background: '#F5F3FF' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  background: activeTab === tab ? '#9E3FFD' : 'transparent',
                  color: activeTab === tab ? 'white' : '#6b7280',
                  fontFamily: 'Inter, sans-serif',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: activeTab === tab ? '0 4px 14px rgba(158,63,253,0.3)' : 'none',
                }}
              >
                {tab}
              </button>
            ))}
          </FadeSection>

          {/* Cards grid */}
          {filtered.length === 0 ? (
            <div
              className="py-16 text-center rounded-2xl"
              style={{ background: '#F5F3FF', border: '1px dashed rgba(158,63,253,0.2)' }}
            >
              <CalendarDays size={40} className="mx-auto mb-3 opacity-30" style={{ color: '#9E3FFD' }} />
              <p className="text-gray-500 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                No upcoming events scheduled yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event, i) => (
                <EventCard key={event.id} event={event} delay={i * 0.08} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CALENDAR ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: '#F5F3FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-10">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#9E3FFD', fontFamily: 'Inter, sans-serif' }}
            >
              Schedule
            </span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#16163F' }}
            >
              Upcoming Events Calendar
            </h2>
            <p
              className="text-gray-500 text-sm mt-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Highlighted dates have events — click to see details.
            </p>
          </FadeSection>
          <FadeSection delay={0.1}>
            <EventCalendar />
          </FadeSection>
        </div>
      </section>
    </PageWrapper>
  );
}
