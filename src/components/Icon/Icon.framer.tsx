import Face from '@material-design-icons/svg/filled/face.svg';
import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Icon as _Icon } from './Icon';

export function Icon({ svg, ...props }: Omit<ComponentProps<typeof _Icon>, 'svg'> & { svg: JSX.Element[] }) {
  if (!svg.length) {
    return (
      <FramerProvider>
        <_Icon svg={Face} {...props} />
      </FramerProvider>
    );
  }

  const SvgComponent = () => svg[0];
  return (
    <FramerProvider>
      <_Icon svg={SvgComponent} {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Icon, {
  svg: {
    title: 'SVG',
    type: ControlType.ComponentInstance,
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    defaultValue: 'medium',
  },
});
