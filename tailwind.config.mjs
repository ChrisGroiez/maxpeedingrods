/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5A623',
          'yellow-light': '#FDB940',
          'yellow-dark': '#E09000',
          black: '#1A1A1A',
          'black-light': '#2D2D2D',
        },
        ui: {
          dark: '#111827',
          'dark-alt': '#1F2937',
          light: '#F9FAFB',
          white: '#FFFFFF',
          border: '#E5E7EB',
          'border-dark': '#374151',
        },
        cta: {
          DEFAULT: '#F5A623',
          hover: '#E09000',
          active: '#C97E00',
          text: '#1A1A1A',
        },
        text: {
          primary: '#111827',
          secondary: '#4B5563',
          muted: '#9CA3AF',
          inverse: '#FFFFFF',
        },
        status: {
          success: '#059669',
          warning: '#D97706',
          error: '#DC2626',
          info: '#2563EB',
        },
        star: {
          filled: '#F59E0B',
          empty: '#D1D5DB',
        },
      },
      fontFamily: {
        heading: ['Barlow', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
