/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        sunset: '#E07A29',
        fadered: '#B23A2D',
        cream: '#F7EFE0',
        dusty: '#6B8AA8',
        brownv: '#5C4332',
        ink: '#2A1E16'
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(92,67,50,0.25)'
      }
    }
  },
  plugins: []
}
