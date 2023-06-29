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
    title: 'ImageSrc',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  imageAlt: {
    title: 'ImageAlt',
    type: ControlType.String,
    defaultValue: 'Lorem Ipsum',
  },
  primary: {
    title: 'Primary',
    type: ControlType.String,
    defaultValue: 'Lorem Ipsum',
  },
  secondary: {
    title: 'Secondary',
    type: ControlType.String,
    defaultValue: '2023.04.32',
  },
  title: {
    title: 'Title',
    type: ControlType.String,
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
});
