module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
        screens: {
      'sm': '840px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
        'noto-sans':['Noto Sans','sans-serif'],
        "tangerine":["Tangerine","cursive"]
      },
      gridTemplateColumns:{
        "80rem":"repeat(3,minmax(80rem,1fr))"
      }
    },
  },
  plugins: [],
}
