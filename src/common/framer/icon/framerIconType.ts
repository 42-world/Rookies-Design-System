import { ICONS } from './icons';

export type FramerIconType = {
  type: 'none' | 'filled' | 'outlined' | 'round' | 'two-tone' | 'sharp';
  name: typeof ICONS[number];
};
