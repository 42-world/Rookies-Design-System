import { token } from '../../../common/token';
import { Theme } from '../../../common/type';
import { TextColorType } from '../types';

export function getThemeColor(theme: Theme, color: TextColorType) {
  return theme === 'light' ? getLightColor(color) : getDarkColor(color);
}

const getLightColor = (color: TextColorType): string =>
  color === 'grey_40'
    ? token.color.grey_40_light
    : color === 'grey_50'
    ? token.color.grey_50_light
    : color === 'grey_60'
    ? token.color.grey_60_light
    : color === 'grey_70'
    ? token.color.grey_70_light
    : color === 'main_green_10'
    ? token.color.main_green_10
    : color === 'red_10'
    ? token.color.red_10_light
    : token.color.grey_50_light;

const getDarkColor = (color: TextColorType): string =>
  color === 'grey_40'
    ? token.color.grey_40_dark
    : color === 'grey_50'
    ? token.color.grey_50_dark
    : color === 'grey_60'
    ? token.color.grey_60_dark
    : color === 'grey_70'
    ? token.color.grey_70_dark
    : color === 'main_green_10'
    ? token.color.main_green_10
    : color === 'red_10'
    ? token.color.red_10_light
    : token.color.grey_50_light;
