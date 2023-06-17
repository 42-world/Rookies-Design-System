import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Avatar as _Avatar } from './Avatar';

export function Avatar(props: ComponentProps<typeof _Avatar>) {
  return (
    <FramerProvider>
      <_Avatar {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Avatar, {
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
});
