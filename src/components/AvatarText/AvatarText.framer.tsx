import { ControlType } from 'framer';
import { ComponentProps } from 'react';
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
  img: {
    title: 'Profile Image',
    type: ControlType.String,
    defaultValue: 'https://avatars.githubusercontent.com/u/123423',
  },
  name: {
    title: 'Name',
    type: ControlType.String,
    defaultValue: 'junseo',
  },
  secondaryText: {
    title: 'Secondary Text',
    type: ControlType.String,
    defaultValue: 'hello world!',
  },
});
