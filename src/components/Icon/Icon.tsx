import { createElement } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function Icon({ svg, ...rest }: Props) {
  return createElement(svg, rest);
}
