// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Huitside': ['Huitside', 'sans-serif'], // Ensure this font is properly imported/loaded
        'Roboto Mono': ['"Roboto Mono"', 'monospace'],
      },
      // New background pattern (optional, you can define it as an SVG or image)
      backgroundImage: {
        'grid-pattern': "url('/path/to/your/grid-pattern.svg')", // Replace with your grid pattern asset
      },
      keyframes: {
        // Existing and enhanced keyframes
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left-bounce': {
          '0%': { opacity: '0', transform: 'translateX(-50px) scale(0.9)' },
          '60%': { opacity: '1', transform: 'translateX(10px) scale(1.05)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'fade-in-right-bounce': {
          '0%': { opacity: '0', transform: 'translateX(50px) scale(0.9)' },
          '60%': { opacity: '1', transform: 'translateX(-10px) scale(1.05)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-loop': { // More continuous and noticeable bounce
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '25%': { transform: 'translateY(-8px) scale(1.02)' },
          '50%': { transform: 'translateY(0) scale(1)' },
          '75%': { transform: 'translateY(-4px) scale(1.01)' },
        },
        'scroll-indicator': {
          '0%': { transform: 'translateY(-5px)', opacity: '0' },
          '50%': { transform: 'translateY(5px)', opacity: '1' },
          '100%': { transform: 'translateY(-5px)', opacity: '0' },
        },
        'scroll-dot': { // More defined scroll indicator movement
          '0%, 100%': { transform: 'translateY(-6px)', opacity: '0' },
          '25%': { transform: 'translateY(0px)', opacity: '1' },
          '75%': { transform: 'translateY(6px)', opacity: '0' },
        },
        'pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-8px) translateX(8px)' },
        },
        'scale-pulse': { // More impactful pulse with scale
          '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.2' },
        },
        'float-subtle': { // Less aggressive float for background
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-3px) translateX(3px) rotate(0.5deg)' },
          '66%': { transform: 'translateY(3px) translateX(-3px) rotate(-0.5deg)' },
        },
        'gradient-shift': { // New animation for background gradient
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'scale-in': { // New initial animation for the image
          '0%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-in-up-reveal': { // New animation for the name
          '0%': { transform: 'translateY(20px) skewX(5deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) skewX(0deg)', opacity: '1' },
        },
        'cursor-blink': { // Enhanced cursor blink
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'text-reveal': { // New animation for the paragraph text
          '0%': { opacity: '0', transform: 'translateY(10px) scaleY(0.8)' },
          '100%': { opacity: '1', transform: 'translateY(0) scaleY(1)' },
        },
        'skew-bg': { // New subtle animation for the "RE-SUME" background
          '0%, 100%': { transform: 'skewX(0deg) scale(1)' },
          '50%': { transform: 'skewX(-2deg) scale(1.02)' },
        }
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in-left-bounce': 'fade-in-left-bounce 1s ease-out forwards',
        'fade-in-right-bounce': 'fade-in-right-bounce 1s ease-out forwards',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'bounce-loop': 'bounce-loop 2s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scale-pulse': 'scale-pulse 4s ease-in-out infinite',
        'float-subtle': 'float-subtle 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'scale-in': 'scale-in 0.8s ease-out forwards',
        'slide-in-up-reveal': 'slide-in-up-reveal 0.8s ease-out forwards',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'text-reveal': 'text-reveal 0.6s ease-out forwards',
        'skew-bg': 'skew-bg 8s ease-in-out infinite',
        'scroll-dot': 'scroll-dot 1.8s infinite ease-in-out', // More distinct
        'scale-pulse': 'scale-pulse 3s ease-in-out infinite', // Apply new pulse
        'float-subtle': 'float-subtle 6s ease-in-out infinite', // Apply new float
        'gradient-shift': 'gradient-shift 10s ease-in-out infinite alternate', // Apply new gradient animation
        'scale-in': 'scale-in 1.2s ease-out forwards', // Apply new image animation
        'slide-in-up-reveal': 'slide-in-up-reveal 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards', // Apply new name animation
        'cursor-blink': 'cursor-blink 0.8s steps(1, end) infinite', // Apply new cursor animation
        'text-reveal': 'text-reveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards', // Apply new text animation
        'skew-bg': 'skew-bg 5s ease-in-out infinite alternate', // Apply new skew animation
      },
    },
  },
  plugins: [],
};