/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ef',
          100: '#cce1df',
          200: '#b3d2cf',
          300: '#99c4bf',
          400: '#85b6af',
          500: '#71AFAA', // Primary brand color
          600: '#5d8c88',
          700: '#486a66',
          800: '#344744',
          900: '#1f2322',
        },
        secondary: {
          50: '#f8f8f8',
          100: '#e6e6e6',
          200: '#cdcdcd',
          300: '#b4b4b4',
          400: '#9b9b9b',
          500: '#818181',
          600: '#676767',
          700: '#4e4e4e',
          800: '#353535',
          900: '#050506', // Secondary brand color (almost black)
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};