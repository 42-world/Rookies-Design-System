import { useTheme } from '../../context';

type TextSize = 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body2' | 'small';
type TextWeight = 'regular' | 'medium' | 'semibold';
type TextAlign = 'left' | 'right' | 'center';
type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'white'
  | 'black'
  | 'red_100'
  | 'red_200'
  | 'red_300'
  | 'orange_100'
  | 'orange_200'
  | 'orange_300'
  | 'yellow_100'
  | 'yellow_200'
  | 'yellow_300'
  | 'lime_100'
  | 'lime_200'
  | 'lime_300'
  | 'green_100'
  | 'green_200'
  | 'green_300'
  | 'sky_100'
  | 'sky_200'
  | 'sky_300'
  | 'blue_100'
  | 'blue_200'
  | 'blue_300'
  | 'indigo_100'
  | 'indigo_200'
  | 'indigo_300';

type Props = {
  text: string;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  color?: Color;
};

export const textSizeConfig: Record<TextSize, string> = {
  heading1: 'text-4xl',
  heading2: 'text-2xl',
  heading3: 'text-lg',
  body1: 'text-base',
  body2: 'text-sm',
  small: 'text-xs',
};

export const textWeightConfig: Record<TextWeight, string> = {
  regular: 'font-light',
  medium: 'font-normal',
  semibold: 'font-semibold',
};

export const textAlignConfig: Record<TextAlign, string> = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

export const textColorConfig = {
  light: {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    tertiary: 'text-text-tertiary',
    white: 'text-white',
    black: 'text-black',
    red_100: 'text-red-300',
    red_200: 'text-red-500',
    red_300: 'text-red-700',
    orange_100: 'text-orange-300',
    orange_200: 'text-orange-500',
    orange_300: 'text-orange-700',
    yellow_100: 'text-yellow-300',
    yellow_200: 'text-yellow-500',
    yellow_300: 'text-yellow-700',
    lime_100: 'text-lime-300',
    lime_200: 'text-lime-500',
    lime_300: 'text-lime-700',
    green_100: 'text-green-300',
    green_200: 'text-green-500',
    green_300: 'text-green-700',
    sky_100: 'text-sky-300',
    sky_200: 'text-sky-500',
    sky_300: 'text-sky-700',
    blue_100: 'text-blue-300',
    blue_200: 'text-blue-500',
    blue_300: 'text-blue-700',
    indigo_100: 'text-indigo-300',
    indigo_200: 'text-indigo-500',
    indigo_300: 'text-indigo-700',
  },

  dark: {
    primary: 'text-text-primary_dark',
    secondary: 'text-text-secondary_dark',
    tertiary: 'text-text-tertiary_dark',
    white: 'text-white',
    black: 'text-black',
    red_100: 'text-red-300',
    red_200: 'text-red-500',
    red_300: 'text-red-700',
    orange_100: 'text-orange-300',
    orange_200: 'text-orange-500',
    orange_300: 'text-orange-700',
    yellow_100: 'text-yellow-300',
    yellow_200: 'text-yellow-500',
    yellow_300: 'text-yellow-700',
    lime_100: 'text-lime-300',
    lime_200: 'text-lime-500',
    lime_300: 'text-lime-700',
    green_100: 'text-green-300',
    green_200: 'text-green-500',
    green_300: 'text-green-700',
    sky_100: 'text-sky-300',
    sky_200: 'text-sky-500',
    sky_300: 'text-sky-700',
    blue_100: 'text-blue-300',
    blue_200: 'text-blue-500',
    blue_300: 'text-blue-700',
    indigo_100: 'text-indigo-300',
    indigo_200: 'text-indigo-500',
    indigo_300: 'text-indigo-700',
  },
};

export function Text({ text, size = 'body1', weight = 'regular', align = 'left', color = 'primary' }: Props) {
  const theme = useTheme();
  return (
    <p
      className={`display
        ${textSizeConfig[size]}
        ${textWeightConfig[weight]}
        ${textAlignConfig[align]}
        ${textColorConfig[theme][color]}
        `}
    >
      {text}
    </p>
  );
}
