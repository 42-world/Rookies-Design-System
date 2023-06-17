import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Card as _Card } from './Card';

export function Card(props: ComponentProps<typeof _Card>) {
  return (
    <FramerProvider>
      <_Card {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Card, {
  imageSrc: {
    title: 'imageSrc',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  imageAlt: {
    title: 'imageAlt',
    type: ControlType.String,
    defaultValue: '지최 is Babo',
  },
  primary: {
    title: 'primary',
    type: ControlType.String,
    defaultValue: '지최',
  },
  secondary: {
    title: 'secondary',
    type: ControlType.String,
    defaultValue: '지최',
  },
  detail: {
    title: 'detail',
    type: ControlType.String,
    defaultValue: '지최',
  },
});
