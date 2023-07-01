import Power from '@material-design-icons/svg/filled/power.svg';
import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import {
  applyFramerProperties,
  createFramerIconProperties,
  FramerIconType,
  FramerProvider,
  useFramerIcon,
} from '../../common/framer';
import { IconText as _IconText } from './IconText';

export function IconText({
  icon,
  ...props
}: Omit<ComponentProps<typeof _IconText>, 'icon'> & { icon: FramerIconType }) {
  const SvgComponent = useFramerIcon({ icon });

  return (
    <FramerProvider>
      <_IconText icon={SvgComponent ?? <Power />} {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(IconText, {
  icon: createFramerIconProperties({
    title: 'Icon',
  }),
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'xsmall',
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['xsmall', 'small', 'medium'],
    defaultValue: 'xsmall',
  },
});
