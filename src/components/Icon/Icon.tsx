import { cloneElement, ReactElement, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  /**
   * 출력할 아이콘 svg 컴포넌트입니다.
   */
  svg: ReactElement;
  /**
   * 아이콘의 크기입니다.
   */
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
      className: className ?? `fill-text-primary dark:fill-text-primary_dark`,
      ...rest,
    },
    null,
  );
}
