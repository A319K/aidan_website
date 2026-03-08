import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';

// Consistent image placeholder — swap image prop for a real photo when available
function ImagePlaceholder() {
  return (
    <div
      className="w-full h-52 flex flex-col items-center justify-center gap-2 rounded-t-2xl"
      style={{
        background: 'linear-gradient(135deg, #1E1E5A 0%, #9E3FFD 60%, #DDBBFF 100%)',
      }}
    >
      <Camera size={28} className="text-white/60" />
      <span
        className="text-xs font-medium text-white/50 uppercase tracking-widest"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Photo Coming Soon
      </span>
    </div>
  );
}

export default function EventCard({ event, delay = 0 }) {
  const { title, date, endDate, category, image, description, location } = event;

  const formattedDate = (() => {
    try {
      const start = format(parseISO(date), 'MMM d, yyyy');
      if (endDate) {
        const end = format(parseISO(endDate), 'MMM d, yyyy');
        return `${start} – ${end}`;
      }
      return start;
    } catch {
      return date;
    }
  })();

  const isPast = category === 'past';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="rounded-2xl overflow-hidden flex flex-col group"
      style={{
        background: 'white',
        boxShadow: '0 4px 24px rgba(22, 22, 63, 0.08)',
        border: '1px solid rgba(22, 22, 63, 0.06)',
      }}
    >
      {/* Image area */}
      {image ? (
        <img src={image} alt={title} className="w-full h-52 object-cover rounded-t-2xl" />
      ) : (
        <ImagePlaceholder />
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span
          className="inline-flex items-center self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
          style={{
            background: isPast ? 'rgba(107, 114, 128, 0.1)' : 'rgba(158, 63, 253, 0.1)',
            color: isPast ? '#6b7280' : '#9E3FFD',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {isPast ? 'Past Event' : 'Upcoming'}
        </span>

        <h3
          className="font-semibold text-base mb-2 leading-snug"
          style={{ fontFamily: 'Poppins, sans-serif', color: '#16163F' }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-gray-500 leading-relaxed flex-1 mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description.length > 120 ? description.slice(0, 117) + '…' : description}
        </p>

        {/* Date & location */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Calendar size={12} style={{ color: '#9E3FFD' }} />
            {formattedDate}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            <MapPin size={12} style={{ color: '#9E3FFD' }} />
            {location}
          </div>
        </div>

        <button
          className="flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
          style={{ color: '#9E3FFD', fontFamily: 'Inter, sans-serif', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          Learn More
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
