import cx from 'classnames';
import { FunctionComponent, SVGProps } from 'react';
import { Icon, Text } from '..';
import { TextSize } from '../Text';

type Size = 'medium' | 'small' | 'xsmall';

interface Props {
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: string;
  size?: Size;
}

export function IconText({ svg, size = 'medium', text }: Props) {
  const textSize: Record<Size, TextSize> = {
    medium: 'body1',
    small: 'body2',
    xsmall: 'small',
  };

  return (
    <div className={cx('flex flex-row items-center', { 'gap-2': size !== 'xsmall', 'gap-1': size === 'xsmall' })}>
      <Icon svg={svg} size={size} className="fill-text-secondary dark:fill-text-secondary_dark" />
      <Text text={text} size={textSize[size]} color="secondary" />
    </div>
  );
}
