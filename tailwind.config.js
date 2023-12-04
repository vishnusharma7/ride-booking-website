/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      fontSize: {
        sm: '12px',
        base: '14px',
        'base-l':'16px',
        lg:'18px',
        xl: '20px',
        '2xl': '28px',
        '2xxl': '34px',
        '3xl': '1.953rem',
        '4xl': '40px',
        '5xl': '3.052rem',
      },
      colors:{
        'primary':'#FDB813',
        'secondary':'#2A2A2A',
        'main':'#202020',
      }
    },
  },
  plugins: [],
}