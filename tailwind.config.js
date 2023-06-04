/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
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
      colors: {
        text: {
          primary: '#000000',
          primary_dark: '#FFFFFF',
          secondary: '#707070',
          secondary_dark: '#292929',
          tertiary: '#B5B5B5',
          tertiary_dark: '#7A7A7A',
        },
        bg: {
          primary: '#FFFFFF',
          primary_dark: '#0A0A0A',
          primary_alpha_0: '#FFFFFF00',
          primary_alpha_0_dark: '#00000000',
          secondary: '#F4F5F6',
          secondary_dark: '#141414',
          tertiary: '#E3E3E3',
          tertiary_dark: '#333333',
          tertiary_alpha_0: '#E3E3E300',
          tertiary_alpha_0_dark: '#33333300',
          alpha_60: '#FFFFFF99',
          alpha_60_dark: '#00000099',
        },
        border: {
          primary: '#D1D5DB',
          primary_dark: '#525252',
          secondary: '#F3F4F6',
          secondary_dark: '#262626',
        },
        button: {
          secondary_bg: '#EBEBEB',
          secondary_bg_dark: '#2E2E2E',
        },
        color: {
          white: '#FFFFFF',
          green: '#28CD41',
          yellow: '#FFCC00',
          cyan: '#32ADE6',
          indigo: '#5856D6',
          mint: '#00C7BE',
          blue_200: '#007AFF',
          blue_300: '#0056B3',
          pink: '#FF2D55',
          brown: '#A2845E',
          red: '#FF3B30',
          system_200: '#007AFF',
          overlay: '#00000052',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'), //
    require('autoprefixer'),
  ],
};
