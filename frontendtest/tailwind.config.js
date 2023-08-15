/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      fontSize: {
        paragraph: '2.25rem',
        sm: '1.125rem',
        md: '1.625rem',
        lg: '4.5rem'
      },
      borderRadius: {
        sm: '5px'
      },
      colors: {
        graphite: '#25303B',
        blue: '#148FCF',
        sky: '#63C1FF',
        lightGray: 'rgba(66, 87, 101, 0.2)'
      }
    }
  },
  plugins: []
}
