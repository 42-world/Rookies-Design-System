import cx from 'classnames';
import { ReactElement } from 'react';
import { Icon } from '../Icon';
import { Text, TextSize } from '../Text';

type Size = 'medium' | 'small' | 'xsmall';

interface Props {
  icon: ReactElement;
  text: string;
  size?: Size;
}

const textSize: Record<Size, TextSize> = {
  medium: 'body1',
  small: 'body2',
  xsmall: 'small',
};

export function IconText({ icon, size = 'medium', text }: Props) {
  return (
    <div className={cx('flex flex-row items-center', { 'gap-2': size !== 'xsmall', 'gap-1': size === 'xsmall' })}>
      <Icon svg={icon} size={size} className="fill-text-secondary dark:fill-text-secondary_dark" />
      <Text text={text} size={textSize[size]} color="secondary" />
    </div>
  );
}
