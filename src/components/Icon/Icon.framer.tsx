import Face from '@material-design-icons/svg/filled/face.svg';
import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import {
  applyFramerProperties,
  createFramerIconProperties,
  FramerIconType,
  FramerProvider,
  useFramerIcon,
} from '../../common/framer';
import { Icon as _Icon } from './Icon';

export function Icon({ svg, ...props }: Omit<ComponentProps<typeof _Icon>, 'svg'> & { svg: FramerIconType }) {
  const svgElement = useFramerIcon({ icon: svg });

  return (
    <FramerProvider>
      <_Icon svg={svgElement ?? <Face />} {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Icon, {
  svg: createFramerIconProperties({
    title: 'Icon',
  }),
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    defaultValue: 'medium',
  },
});
