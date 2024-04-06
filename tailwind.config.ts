import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        bgPurple: '#DBB1BB',
        textPurple: '#8F264F',
        gradientPurple: '#DAB0BA',
        inputGrey: '#D9D9D9',
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      lineHeight: {
        '12': '3rem', // Custom leading value
        '14': '3.5rem', // Another custom leading value
        '16': '4rem',
        // Add more custom leading values as needed
      },
      height: {
        '100': '36rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    '.ring, .img': {
      width: '100%',
      height: '100%',
      transformStyle: 'preserve-3d',
      userSelect: 'none',
    },
    '.container': {
      perspective: '2000px',
      width: '300px',
      height: '400px',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
    },
  },
  plugins: [],
};

export default config;
