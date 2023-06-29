import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import {
  applyFramerProperties,
  createFramerIconProperties,
  FramerIconType,
  FramerProvider,
  useFramerIcon,
} from '../../common/framer';
import { Chip as _Chip } from './Chip';

export function Chip({ icon, ...props }: Omit<ComponentProps<typeof _Chip>, 'icon'> & { icon: FramerIconType }) {
  const IconComponent = useFramerIcon({ icon });

  return (
    <FramerProvider>
      <_Chip icon={IconComponent} {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Chip, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Sample',
  },
  isSelected: {
    title: 'IsSelected',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  icon: createFramerIconProperties({
    title: 'Icon',
    optional: true,
  }),
});
