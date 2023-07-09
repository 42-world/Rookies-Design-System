import cx from 'classnames';
import { twMerge } from 'tailwind-merge';

import { Text } from '../Text';

interface Props {
  /**
   * 뱃지의 배경색입니다.
   */
  color?: 'indigo' | 'yellow' | 'mint' | 'cyan' | 'blue' | 'pink' | 'brown' | 'outline' | 'mono';
  /**
   * 뱃지에 들어가는 텍스트입니다.
   */
  text: string;
  /**
   * 뱃지의 className입니다.
   */
  className?: string;
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

export function Badge({ color = 'outline', text, className }: Props) {
  return (
    <div
      className={twMerge(
        cx('w-fit rounded-lg px-2 py-[3px]', colorConfig[color], {
          'border border-border-secondary dark:border-border-secondary_dark': color === 'outline',
        }),
        className,
      )}
    >
      <Text
        text={text}
        size="small"
        className={cx({ 'text-text-primary_dark dark:text-text-primary': color === 'mono' })}
        color={color === 'outline' ? 'secondary' : 'white'}
      />
    </div>
  );
}
