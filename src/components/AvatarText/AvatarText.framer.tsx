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
    title: 'Src',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  alt: {
    title: 'Alt',
    type: ControlType.String,
    defaultValue: '지최 is Babo',
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['40px', '64px'],
  },
  mainText: {
    title: 'MainText',
    type: ControlType.String,
    defaultValue: '지최',
  },
});
