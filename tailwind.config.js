module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
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
