/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1876CF',
          navy: '#002649',
          light: '#E3EFFB',
          muted: '#81909D',
        },
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
