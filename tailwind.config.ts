import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        quando: ['Quando']
      },
      colors: {
        epiffaniaGreen: '#113836'
      },
      dropShadow: {
        epiff: '5px -2px 3px rgba(0, 0, 0, 0.478)'
      },
      boxShadow: {
        epiff: '3px 3px 8px rgba(0, 0, 0, 0.2)',
        epiffania: '10px 10px 3px rgba(255, 255, 255, 1)'
      },
      gridAutoColumns: {
        fill: 'repeat(auto-fill, minmax(100px, 1fr))'
      }
    }
  },
  plugins: []
}
export default config
