import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Badge as _Badge } from './Badge';

export function Badge(props: ComponentProps<typeof _Badge>) {
  return (
    <FramerProvider>
      <_Badge {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Badge, {
  // Add your custom property infos here
});
