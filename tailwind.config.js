/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0B0D',
          950: '#070809',
          900: '#0A0B0D',
          850: '#0F1114',
          800: '#14171B',
          700: '#1C2026',
          600: '#272C34',
        },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#E4C97A',
          dark: '#A37F30',
          50: '#F7EFD8',
        },
        deep: {
          green: '#0E2A24',
          blue: '#0C1B2A',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      spacing: {
        4.5: '1.125rem',
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        'gold-glow': '0 0 60px -15px rgba(201, 162, 75, 0.45)',
        'card': '0 20px 50px -20px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, #E4C97A 0%, #C9A24B 45%, #A37F30 100%)',
        'radial-fade': 'radial-gradient(60% 50% at 50% 0%, rgba(201,162,75,0.14) 0%, rgba(10,11,13,0) 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
