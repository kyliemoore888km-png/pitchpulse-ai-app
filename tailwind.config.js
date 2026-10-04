module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.25), 0 0 40px rgba(34,211,238,0.15)',
      },
      colors: {
        ink: '#020817',
      },
    },
  },
  plugins: [],
};
