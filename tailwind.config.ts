import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#fff',
        secondary: '#707070',
      },
      backgroundColor: {
        primary: '#0C0F13',
        secondary: '#0D1117',
        tertiary: '#131517',
        'c-primary': '#9D7827',
      },
      borderColor: {
        primary: '#0C0F13',
        secondary: '#0D1117',
        tertiary: '#131517',
        'c-primary': '#9D7827',
      },
      width: {
        primary: '1100px',
        secondary: '700px',
      },
      maxWidth: {
        primary: '90%',
      },
    },
  },
  plugins: [],
}
export default config
