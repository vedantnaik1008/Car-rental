import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        sm360: '360px',
        lg964: '964px',
        lgg: '826px'
      },
    },
    backgroundSize: {
      '100%': '100%',
    }
  },
  plugins: [],
}
export default config
