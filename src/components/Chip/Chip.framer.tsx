import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Chip as _Chip } from './Chip';

export function Chip({ icon, ...props }: Omit<ComponentProps<typeof _Chip>, 'icon'> & { icon: JSX.Element[] }) {
  if (!icon.length) {
    return (
      <FramerProvider>
        <_Chip {...props} />
      </FramerProvider>
    );
  }

  const IconComponent = () => icon[0];
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
    defaultValue: 'Chip',
  },
  isSelected: {
    title: 'IsSelected',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  icon: {
    title: 'Icon',
    type: ControlType.ComponentInstance,
  },
});
