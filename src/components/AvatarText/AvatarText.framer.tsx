import type { ComponentProps } from 'react';
import { FramerProvider } from '../../common/framer';
import { AvatarText as _AvatarText } from './AvatarText';

export function AvatarText(props: ComponentProps<typeof _AvatarText>) {
  return (
    <FramerProvider>
      <_AvatarText {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(AvatarText, {});
