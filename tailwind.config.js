/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#111111',
        primary: {
          DEFAULT: '#7E74F1',
          100: '#EAE8FE',
          200: '#C3BEFA',
          300: '#A196F4',
          400: '#7E74F1',
          500: '#5D50ED',
          600: '#3A2CE5',
          700: '#271AC4',
          800: '#1D1493',
          900: '#140E62',
        },
        secondary: {
          DEFAULT: '#FC7613',
          100: '#FFF0E5',
          200: '#FFCFB3',
          300: '#FFAE80',
          400: '#FD8E4D',
          500: '#FC7613',
          600: '#E05F02',
          700: '#AE4A01',
          800: '#7C3501',
          900: '#4A2000',
        },
        accent: {
          DEFAULT: '#00D4FF',
          100: '#E5F9FF',
          200: '#B3EFFF',
          300: '#80E5FF',
          400: '#4DDBFF',
          500: '#00D4FF',
          600: '#00AACC',
          700: '#007F99',
          800: '#005566',
          900: '#002A33',
        },
        success: '#18D16F',
        warning: '#FFB800',
        error: '#FF4757',
        text: {
          primary: '#FFFFFF',
          secondary: '#AAAAAA',
          tertiary: '#666666',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        myfont: ['MyFont'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};