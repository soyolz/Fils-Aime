/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{ 
    divideOpacity: {
        30:  '0.35', 
        50: '0.5'
      },
    fontFamily: {
      mono: ['var(--font-jetbrains-mono)', 'monospace'], // Ensure this matches your font
      },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
