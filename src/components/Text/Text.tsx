import cx from 'classnames';

type TextSize = 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body2' | 'small';
type TextWeight = 'regular' | 'medium' | 'semibold';
type TextAlign = 'left' | 'right' | 'center';
type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'white'
  | 'green'
  | 'yellow'
  | 'cyan'
  | 'indigo'
  | 'mint'
  | 'blue_200'
  | 'blue_300'
  | 'pink'
  | 'brown'
  | 'red'
  | 'system_200'
  | 'overlay';

type Props = {
  text: string;
  size: TextSize;
  weight: TextWeight;
  align: TextAlign;
  color: Color;
};

const colorName = (color: Color) => {
  return `text-text-${color}`;
};

export function Text({ text, size, weight, align, color }: Props) {
  return (
    <p
      className={cx({
        display: true,
        [size === 'heading1'
          ? 'text-4xl'
          : size === 'heading2'
          ? 'text-2xl'
          : size === 'heading3'
          ? 'text-lg'
          : size === 'body1'
          ? 'text-base'
          : size === 'body2'
          ? 'text-sm'
          : size === 'small'
          ? 'text-xs'
          : 'text-base']: true,
        [weight === 'regular'
          ? 'font-light'
          : weight === 'medium'
          ? 'font-normal'
          : weight === 'semibold'
          ? 'font-semibold'
          : 'font-normal']: true,
        [colorName(color)]: true,
      })}
    >
      {text}
    </p>
  );
}
