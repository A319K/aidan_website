/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#16163F',
          light: '#1E1E5A',
          dark: '#0D0D28',
        },
        purple: {
          DEFAULT: '#9E3FFD',
          light: '#B566FE',
          dark: '#7A1FD4',
          deep: '#6A0DAD',
        },
        lavender: {
          DEFAULT: '#DDBBFF',
          light: '#EDD9FF',
          soft: '#F0E5FF',
        },
        softbg: '#F5F3FF',
        forest: {
          DEFAULT: '#1B5E20',
          dark: '#0A3D0D',
          mid: '#2E7D32',
        },
        greenlight: '#E8F5E9',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(22, 22, 63, 0.08)',
        'card-hover': '0 12px 40px rgba(22, 22, 63, 0.16)',
        'purple-glow': '0 8px 32px rgba(158, 63, 253, 0.3)',
        'navy-glow': '0 8px 32px rgba(22, 22, 63, 0.4)',
        'green-glow': '0 8px 32px rgba(27, 94, 32, 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
