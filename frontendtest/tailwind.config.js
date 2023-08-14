/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      fontSize: {
        title: '4.5rem',
        subtitle: '1.6rem',
        paragraph: '2.25rem',
        sm: '1.125rem',
        md: '1.625rem'
      },
      borderRadius: {
        sm: '5px'
      },
      colors: {
        graphite: '#25303B',
        blue: '#148FCF',
        sky: '#63C1FF',
        lightGray: '#425765'
      }
    }
  },
  plugins: []
}
