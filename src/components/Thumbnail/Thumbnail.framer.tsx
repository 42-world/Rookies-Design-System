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
    title: 'Src',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  alt: {
    title: 'Alt',
    type: ControlType.String,
    defaultValue: '지최 is Babo',
  },
  width: {
    title: 'Width',
    type: ControlType.Number,
    defaultValue: 480,
  },
  rounded: {
    title: 'Rounded',
    type: ControlType.Enum,
    options: ['8px', '16px'],
  },
  ratio: {
    title: 'Ratio',
    type: ControlType.Enum,
    options: ['16:9', '16:10', '1:1'],
  },
});
