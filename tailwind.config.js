/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: {
          100: 'rgba(247, 206, 205, 1)',
          70: 'rgba(247, 206, 205, 0.7)',
          50: 'rgba(247, 206, 205, 0.5)',
          30: 'rgba(247, 206, 205, 0.3)',
        },
        interactive: {
          100: 'rgba(118, 190, 219, 1)',
          70: 'rgba(118, 190, 219, 0.7)',
          50: 'rgba(118, 190, 219, 0.5)',
          30: 'rgba(118, 190, 219, 0.3)',
        },
        negative: {
          100: 'rgba(234, 51, 34, 1)',
          70: 'rgba(234, 51, 34, 0.7)',
          50: 'rgba(234, 51, 34, 0.5)',
          30: 'rgba(234, 51, 34, 0.3)',
        },
        alternateBackground: {
          100: 'rgba(236, 237, 241, 1)',
          70: 'rgba(236, 237, 241, 0.7)',
          50: 'rgba(236, 237, 241, 0.5)',
          30: 'rgba(236, 237, 241, 0.3)',
        },
        green: {
          solid: 'rgba(0, 255, 0, 1)',
          solid50: 'rgba(0, 255, 0, 0.5)',
          300: '#6EE7B7',
          500: '#10B981',
          600: '#059669',
        },
        cu: {
          pink: '#DE5C8E',
          pinkLd: '#F0D2DE',
          pinkLight: '#F8E1EA',
          grey: '#58595B',
          copper: '#AB5814',
          gold: '#E9C869',
        },
        yellow: '#EED202',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#808080',
      },
      fontSize: {
        homeMenu: '55px',
        h1: '34px',
        h2: '20px',
        h3: '14px',
        body: '13px',
      },
      fontWeight: {
        homeMenu: '700',
        h1: '700',
        h2: '700',
        h3: '700',
        body: '400',
      },
    },
  },
  plugins: [],
}
