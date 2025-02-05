/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      small: "100px",
      regular: "1440px",
      extra: "1600px",
    },
    extend: {
      divideOpacity: {
        30: '0.3',
        50: '0.5',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'Courier New', 'monospace'],
      },
      colors: {
        background: "var(--background)", // Ensure variable is defined
        foreground: "var(--foreground)", // Ensure variable is defined
      },
    },
  },
  plugins: [],
};