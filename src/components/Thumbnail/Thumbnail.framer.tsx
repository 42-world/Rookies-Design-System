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
    defaultValue: 'Lorem Ipsum',
  },
  width: {
    title: 'Width',
    type: ControlType.Number,
    defaultValue: 269,
  },
  rounded: {
    title: 'Rounded',
    type: ControlType.Enum,
    options: ['8px', '16px'],
    defaultValue: '16px',
  },
  ratio: {
    title: 'Ratio',
    type: ControlType.Enum,
    options: ['16:9', '16:10', '1:1'],
    defaultValue: '16:9',
  },
});
