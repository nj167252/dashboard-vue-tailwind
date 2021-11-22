module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cw-blue-d': '#304269',
        'cw-blue-m': '#91BED4',
        'cw-blue-l': '#D9E8F5',
        'cw-orange': '#F26100',
      },
      minWidth: {
        '56': '14rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
