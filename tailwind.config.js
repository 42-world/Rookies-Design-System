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
        searchbar: '0px 0px 1px 0px #F3F4F6',
        searchbar_dark: '0px 0px 1px 0px #262626',
        searchbar_hover: '0px 0px 5px 1px #D1D5DB',
        searchbar_hover_dark: '0px 0px 5px 1px #525252',
        searchbar_solid_hover: '0px 0px 16px 4px #B5B5B5',
        searchbar_solid_hover_dark: '0px 0px 16px 4px #7A7A7A',
      },
      scale: {
        92: '0.92',
      },
      colors: {
        text: {
          primary: '#000000',
          primary_dark: '#FFFFFF',
          secondary: '#737373',
          secondary_dark: '#BABABA',
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
          black: '#000000',
          green: '#28CD41',
          yellow: '#FFCC00',
          cyan: '#32ADE6',
          indigo: '#5856D6',
          mint: '#00C7BE',
          blue_200: '#38BDF8',
          blue_300: '#0284C7',
          pink: '#FF2D55',
          brown: '#A2845E',
          red: '#FF3B30',
          system_100: '#BAE6FD',
          system_200: '#38BDF8',
          system_300: '#0284C7',
          green_100: '#BBF7D0',
          green_200: '#22C55E',
          green_300: '#16A34A',
          red_100: '#FECACA',
          red_200: '#FF3B30',
          red_300: '#DC2626',
          yellow_100: '#FEF08A',
          yellow_200: '#FACC15',
          yellow_300: '#CA8A04',
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
