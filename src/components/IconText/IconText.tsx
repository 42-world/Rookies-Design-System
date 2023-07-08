import cx from 'classnames';
import { ReactElement } from 'react';
import { Icon } from '../Icon';
import { Text, TextSize } from '../Text';

type Size = 'medium' | 'small' | 'xsmall';

interface Props {
  /**
   * 출력할 아이콘 svg 컴포넌트입니다.
   */
  icon: ReactElement;
  /**
   * 아이콘 옆에 출력될 텍스트입니다.
   */
  text: string;
  /**
   * 아이콘의 크기입니다.
   */
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
      <Icon svg={icon} size={size} className="fill-text-secondary" />
      <Text text={text} size={textSize[size]} color="secondary" />
    </div>
  );
}
