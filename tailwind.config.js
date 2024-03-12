/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fc8c41",
        
"secondary": "#f4ab01",
        
"accent": "#f9e84d",
        
"neutral": "#fff",
        
"base-100": "#0A0C10",
        
"info": "#106b9f",
        
"success": "#84c43b",
        
"warning": "#fc7420",
        
"error": "#ff0000",
        },
      },
    ],
  },
};
