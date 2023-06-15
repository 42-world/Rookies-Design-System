import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Icon as _Icon } from './Icon';

export function Icon(props: ComponentProps<typeof _Icon>) {
  return (
    <FramerProvider>
      <_Icon {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Avatar, {});
