/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FBF9F5',
          200: '#F5F2EB',
          300: '#ECE6D9',
        },
        brand: {
          50: '#EBF7EE',
          100: '#D2F0D8',
          500: '#15803D',
          600: '#166534',
          700: '#14532D',
          800: '#0F4323',
          900: '#0B331A',
        },
        dark: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        'elevated': '0 4px 20px -2px rgba(0,0,0,0.06), 0 2px 6px -1px rgba(0,0,0,0.02)',
        'modal': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
      }
    },
  },
  plugins: [],
}
