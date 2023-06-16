import type { ComponentProps } from 'react';
import { FramerProvider } from '../../common/framer';
import { Badge as _Badge } from './Badge';

export function Badge(props: ComponentProps<typeof _Badge>) {
  return (
    <FramerProvider>
      <_Badge {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Badge, {});
