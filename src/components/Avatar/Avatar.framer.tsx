import type { ComponentProps } from 'react';
import { FramerProvider } from '../../common/framer';
import { Avatar as _Avatar } from './Avatar';

export function Avatar(props: ComponentProps<typeof _Avatar>) {
  return (
    <FramerProvider>
      <_Avatar {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Avatar, {});
