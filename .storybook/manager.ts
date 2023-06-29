// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import RookiesLight from './RookiesLight';

addons.setConfig({
  theme: RookiesLight,
});
