import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { AvatarText as _AvatarText } from './AvatarText';

export function AvatarText(props: ComponentProps<typeof _AvatarText>) {
  return (
    <FramerProvider>
      <_AvatarText {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(AvatarText, {
  src: {
    title: 'src',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  alt: {
    title: 'alt',
    type: ControlType.String,
    defaultValue: '지최 is Babo',
  },
  size: {
    title: 'size',
    type: ControlType.Number,
    defaultValue: 16,
  },
  mainText: {
    title: 'mainText',
    type: ControlType.String,
    defaultValue: '지최',
  },
});
