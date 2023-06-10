import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { AvatarText as _AvatarText } from './AvatarText';

export function AvatarText(props: ComponentProps<typeof _AvatarText>) {
  return (
    <FramerProvider>
      <_AvatarText {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(AvatarText, {
  // Add your custom property infos here
});
