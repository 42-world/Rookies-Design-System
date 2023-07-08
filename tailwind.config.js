/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        m8: '-8px',
      },
      width: {
        411: '411px',
      },
      fontFamily: {
        /**
         * @warning
         * fontFamily는 tailwind.css 에 별도로 정의되어 있으므로 여기에 추가하지 마세요
         */
      },
      aspectRatio: {
        '16/10': '16 / 10',
      },
      transitionProperty: {
        spacing: 'margin, padding',
        gap: 'gap',
      },
      boxShadow: {
        searchbar: 'var(--shadow-searchbar)',
        searchbar_hover: 'var(--shadow-searchbar-hover)',
        searchbar_solid_hover: 'var(--shadow-searchbar-solid-hover)',
      },
      scale: {
        92: '0.92',
      },
      colors: {
        text: {
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--color-text-tertiary) / <alpha-value>)',
        },
        bg: {
          primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          primary_alpha_0: 'rgb(var(--color-bg-alpha-base) / 0)',
          secondary: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--color-bg-tertiary) / <alpha-value>)',
          tertiary_alpha_0: 'rgb(var(--color-bg-tertiary) / 0)',
          tertiary_alpha_0_dark: 'rgb(var(--color-bg-tertiary) / 0)',
          alpha_60: 'rgb(var(--color-bg-alpha-base) / 0.99)',
        },
        border: {
          primary: 'rgb(var(--color-border-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-border-secondary) / <alpha-value>)',
        },
        button: {
          secondary_bg: 'rgb(var(--color-button-secondary-bg) / <alpha-value>)',
        },
        color: {
          white: 'rgb(var(--color-white) / <alpha-value>)',
          black: 'rgb(var(--color-black) / <alpha-value>)',
          green: 'rgb(var(--color-green) / <alpha-value>)',
          yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
          cyan: 'rgb(var(--color-cyan) / <alpha-value>)',
          indigo: 'rgb(var(--color-indigo) / <alpha-value>)',
          mint: 'rgb(var(--color-mint) / <alpha-value>)',
          pink: 'rgb(var(--color-pink) / <alpha-value>)',
          brown: 'rgb(var(--color-brown) / <alpha-value>)',
          red: 'rgb(var(--color-red) / <alpha-value>)',
          system_100: 'rgb(var(--color-system-100) / <alpha-value>)',
          system_200: 'rgb(var(--color-system-200) / <alpha-value>)',
          system_300: 'rgb(var(--color-system-300) / <alpha-value>)',
          blue_200: 'rgb(var(--color-blue-200) / <alpha-value>)',
          blue_300: 'rgb(var(--color-blue-300) / <alpha-value>)',
          green_100: 'rgb(var(--color-green-100) / <alpha-value>)',
          green_200: 'rgb(var(--color-green-200) / <alpha-value>)',
          green_300: 'rgb(var(--color-green-300) / <alpha-value>)',
          red_100: 'rgb(var(--color-red-100) / <alpha-value>)',
          red_200: 'rgb(var(--color-red-200) / <alpha-value>)',
          red_300: 'rgb(var(--color-red-300) / <alpha-value>)',
          yellow_100: 'rgb(var(--color-yellow-100) / <alpha-value>)',
          yellow_200: 'rgb(var(--color-yellow-200) / <alpha-value>)',
          yellow_300: 'rgb(var(--color-yellow-300) / <alpha-value>)',
          overlay: 'rgb(var(--color-black) / 0.52)',
        },
      },
    },
  },
  plugins: [require('autoprefixer')],
};
