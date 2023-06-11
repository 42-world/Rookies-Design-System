import cx from 'classnames';
import { FunctionComponent, SVGProps } from 'react';
import { Icon, Text } from '..';

type TextSize = 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body2' | 'small';
interface Props {
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: string;
  size?: 'medium' | 'small' | 'xsmall';
}

export function IconText({ svg, size = 'medium', text }: Props) {
  const textSize = {
    medium: 'body1',
    small: 'body2',
    xsmall: 'small',
  }[size];

  return (
    <div className={cx('flex flex-row items-center', { 'gap-2': size !== 'xsmall', 'gap-1': size === 'xsmall' })}>
      <Icon svg={svg} size={size} className="fill-text-secondary dark:fill-text-secondary_dark" />
      <Text text={text} size={textSize as TextSize} color="secondary" />
    </div>
  );
}
