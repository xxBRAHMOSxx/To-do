/** @type {import('tailwindcss').Config} */
module.exports = {
important: true,
  content: ['./src/**/*.{html,js}'],
  theme: {
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors:{
        'primary': 'Ff0000',
        'secondary': '#e5e7eb',
        'accent': '#d1d5db',
        'dark': '#111827',
        'light': '#f9fafb',
        'info': '#2563eb',
        'success': '#16a34a',
        'warning': '#f59e0b',
        'error': '#dc2626',
      }
      }
    },
    backgroundColor:{
        'primary': '#f3f4f6',
        'secondary': '#e5e7eb',
        'accent': '#d1d5db',
  },
}