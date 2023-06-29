import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'ROOK!ES',
  brandUrl: 'https://github.com/42-world/rookies-Design-System',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#62BAF3',
  appBorderRadius: 4,

  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#737373',
  barSelectedColor: '#62BAF3',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#62BAF3',
  inputTextColor: '#000000',
  inputBorderRadius: 2,
});
