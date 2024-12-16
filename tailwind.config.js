/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Include your source files here
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      animation: {
        'move-vertically': 'moveVertically 2s ease-in-out infinite',
      },
      keyframes: {
        moveVertically: {
          '0%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [
    //require('tailwind-scrollbar')
    ],
}
