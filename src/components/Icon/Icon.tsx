import { createElement, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  svg: React.FC<React.SVGAttributes<SVGElement>>;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

export function Icon({ svg: SvgComponent, size = 'medium', className, ...rest }: Props) {
  const wh = {
    xsmall: { width: 12, height: 12 },
    small: { width: 16, height: 16 },
    medium: { width: 20, height: 20 },
    large: { width: 24, height: 24 },
    xlarge: { width: 32, height: 32 },
  }[size] || { width: 24, height: 24 };

  const origin = SvgComponent({});
  return createElement(
    'svg',
    {
      ...origin?.props,
      viewBox: '0 0 24 24',
      width: wh.width,
      height: wh.height,
      className: `fill-black dark:fill-white ${className}`,
      ...rest,
    },
    origin?.props.children,
  );
}
