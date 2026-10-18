/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  // hover-утилиты только для устройств с мышью: на телефоне состояние не «залипает» после тапа
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ink: '#2C2C2C',
        bronze: {
          DEFAULT: '#8C715B',
          dark: '#6E5844',
          soft: '#A48B74',
        },
        sand: '#E9E3DD',
        cream: '#FAF8F5',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1360px',
      },
      letterSpacing: {
        wider2: '0.14em',
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(44,44,44,.25)',
      },
    },
  },
  plugins: [],
};
