/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/bg1.jpg')",
        'bg2': "url('/bg2.jpg')",
      },
      fontFamily: {
        'satoshi' : ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

