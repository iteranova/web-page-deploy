/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /** primary: {
          DEFAULT: '#2D68C4',
          dark1: '#2D68C4',
          light1: '#8BADEA',
          dark2: '#C48B2D',
          light2: '#EAC590',
        },*/ 
        /** primary: {
          DEFAULT: '#4682B4',
          dark1: '#4682B4',
          light1: '#A1C8E4',
          dark2: '#B46246',
          light2: '#E4C8A1',
        },*/ 
        primary: {
          DEFAULT: '#353839',
          dark: '#2a2d2e',
          dark1: '#353839',
          light1: '#80838A',
          dark2: '#484A6E',
          light2: '#6E708F',
        },
      },
      fontFamily: {
        'brand': ['Orbitron', 'system-ui','sans-serif'],
        'brand-alt': ['Poppins', 'system-ui', 'sans-serif'],
        'brand-serif': ['Georgia', 'serif'],
      },
      backgroundImage: {
        'primary-multi': 'linear-gradient(to bottom right, #353839, #6E708F, #484A6E)'
      },
    },
  },
  plugins: [],
}
