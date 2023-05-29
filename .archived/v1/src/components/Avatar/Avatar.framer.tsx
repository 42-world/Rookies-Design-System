import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';

import { Avatar as _Avatar } from './Avatar';

export function Avatar(props: ComponentProps<typeof _Avatar>) {
  return (
    <FramerProvider>
      <_Avatar {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Avatar, {
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
