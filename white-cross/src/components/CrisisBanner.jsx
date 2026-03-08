import { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CrisisBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
          style={{ zIndex: 9999 }}
        >
          <div
            className="flex items-center justify-center gap-3 px-4 py-2.5 text-white text-sm font-medium relative"
            style={{
              background: 'linear-gradient(90deg, #9E3FFD 0%, #6A0DAD 50%, #9E3FFD 100%)',
              backgroundSize: '200% 100%',
            }}
          >
            <Phone size={14} className="flex-shrink-0" />
            <span>
              Need immediate help?{' '}
              <a
                href="tel:988"
                className="font-bold underline underline-offset-2 hover:no-underline transition-all"
              >
                Call or text 988
              </a>{' '}
              — Free, confidential crisis support, 24/7
            </span>
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Dismiss banner"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
