import { cloneElement, ReactElement, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  svg: ReactElement;
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

  return cloneElement(
    SvgComponent,
    {
      viewBox: '0 0 24 24',
      width: wh.width,
      height: wh.height,
      className: className ?? `fill-black dark:fill-white`,
      ...rest,
    },
    null,
  );
}
