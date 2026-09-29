/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        navy: '#0f172a',
        primary: '#2563eb',
        accent: '#0f766e',
        slatebg: '#f8fafc',
      },
    },
  },
  plugins: [],
}

