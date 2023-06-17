import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { ListItem as _ListItem } from './ListItem';

export function ListItem({ children, ...props }: ComponentProps<typeof _ListItem> & { children: JSX.Element[] }) {
  if (!children.length) {
    return (
      <FramerProvider>
        <_ListItem {...props} />
      </FramerProvider>
    );
  }

  return (
    <FramerProvider>
      <_ListItem {...props}>
        <_ListItem.MetadataItems>{children}</_ListItem.MetadataItems>
      </_ListItem>
    </FramerProvider>
  );
}

applyFramerProperties(ListItem, {
  title: {
    title: 'Title',
    type: ControlType.String,
    defaultValue: '지최 is Babo',
  },
  thumbnailSrc: {
    title: 'ThumbnailSrc',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  secondaryTextFirst: {
    title: 'SecondaryTextFirst',
    type: ControlType.String,
    defaultValue: '2021.10.20',
  },
  secondaryTextSecond: {
    title: 'SecondaryTextSecond',
    type: ControlType.String,
    defaultValue: '지최',
  },
  hasBorder: {
    title: 'HasBorder',
    type: ControlType.Boolean,
    defaultValue: true,
  },
  children: {
    title: 'Children',
    type: ControlType.ComponentInstance,
  },
});
