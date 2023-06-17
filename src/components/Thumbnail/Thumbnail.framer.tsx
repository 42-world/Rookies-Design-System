import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Thumbnail as _Thumbnail } from './Thumbnail';

export function Thumbnail(props: ComponentProps<typeof _Thumbnail>) {
  return (
    <FramerProvider>
      <_Thumbnail {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Thumbnail, {
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
  width: {
    title: 'width',
    type: ControlType.Number,
    defaultValue: 480,
  },
  ratio: {
    title: 'ratio',
    type: ControlType.Enum,
    options: ['16:9', '16:10', '1:1'],
  },
});
