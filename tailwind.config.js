/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        turquesa: {
          DEFAULT: '#40B9BF',
          escuro: '#1B6F75',
          hover: '#14565B',
          claro: '#8ED6D9',
        },
        coral: {
          DEFAULT: '#F47D50',
          escuro: '#C95A31',
        },
        terracota: '#D95735',
        creme: '#FFF0D9',
        marrom: {
          DEFAULT: '#603B32',
          escuro: '#3E1F19',
          claro: '#8A5A4C',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--rot, 0deg))' },
          '50%': { transform: 'translateY(-16px) rotate(var(--rot, 0deg))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--rot, 0deg))' },
          '50%': { transform: 'translateY(-26px) rotate(var(--rot, 0deg))' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        waveMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        bob: 'bob 5s ease-in-out infinite',
        spinSlow: 'spinSlow 26s linear infinite',
        pulseSoft: 'pulseSoft 3.4s ease-in-out infinite',
        waveMove: 'waveMove 22s linear infinite',
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(96, 59, 50, 0.45)',
        lift: '0 26px 50px -22px rgba(96, 59, 50, 0.5)',
        btn: '0 12px 24px -12px rgba(96, 59, 50, 0.55)',
      },
    },
  },
  plugins: [],
};
