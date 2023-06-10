import cx from 'classnames';
import { Text } from '..';

interface Props {
  color: 'indigo' | 'yellow' | 'mint' | 'cyan' | 'blue' | 'pink' | 'brown' | 'outline' | 'mono';
  text: string;
}

const colorConfig = {
  indigo: 'bg-color-indigo',
  yellow: 'bg-color-yellow',
  mint: 'bg-color-mint',
  cyan: 'bg-color-cyan',
  blue: 'bg-color-blue_200',
  pink: 'bg-color-pink',
  brown: 'bg-color-brown',
  mono: 'bg-bg-primary_dark dark:bg-bg-primary',
  outline: 'bg-none',
};

export function Badge({ color, text }: Props) {
  return (
    <div
      className={cx('px-2 py-[3px] w-fit rounded-lg', colorConfig[color], {
        'border border-border-secondary dark:border-border-secondary_dark': color === 'outline',
      })}
    >
      {color === 'mono' ? (
        <Text text={text} size="small" color="white" /> // TODO: mono일 때 색상 변경
      ) : (
        <Text text={text} size="small" />
      )}
    </div>
  );
}
