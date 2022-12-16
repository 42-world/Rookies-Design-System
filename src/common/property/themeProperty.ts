import { ControlDescription, ControlType } from 'framer';
import { Theme } from '../type';

export const themeProperty: ControlDescription<{ theme: Theme }> & {
  title: string;
} = {
  title: 'Theme',
  type: ControlType.Enum,
  options: ['light', 'dark'],
  defaultValue: 'light',
  displaySegmentedControl: true,
};
