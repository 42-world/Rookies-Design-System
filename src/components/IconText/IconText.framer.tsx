import Face from '@material-design-icons/svg/filled/face.svg';

import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { IconText as _IconText } from './IconText';

export function IconText({ svg, ...props }: Omit<ComponentProps<typeof _IconText>, 'svg'> & { svg: JSX.Element[] }) {
  if (!svg.length) {
    return (
      <FramerProvider>
        <_IconText svg={Face} {...props} />
      </FramerProvider>
    );
  }
  const SvgComponent = () => svg[0];
  return (
    <FramerProvider>
      <_IconText svg={SvgComponent} {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(IconText, {
  svg: {
    title: 'SVG',
    type: ControlType.ComponentInstance,
  },
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'IconText',
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['xsmall', 'small', 'medium'],
  },
});
