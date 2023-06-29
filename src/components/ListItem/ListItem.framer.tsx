import { ControlType } from 'framer';
import type { ComponentProps, ReactElement } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { ListItem as _ListItem } from './ListItem';

export function ListItem({ rightAddon, ...props }: ComponentProps<typeof _ListItem> & { rightAddon: ReactElement[] }) {
  if (!rightAddon || !rightAddon.length) {
    return (
      <FramerProvider>
        <_ListItem {...props} />
      </FramerProvider>
    );
  }

  return (
    <FramerProvider>
      <_ListItem rightAddon={rightAddon} {...props}></_ListItem>
    </FramerProvider>
  );
}

applyFramerProperties(ListItem, {
  title: {
    title: 'Title',
    type: ControlType.String,
    defaultValue: 'Lorem ipsum',
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
    defaultValue: '홍길동',
  },
  hasBorder: {
    title: 'HasBorder',
    type: ControlType.Boolean,
    defaultValue: true,
  },
  rightAddon: {
    title: 'RightAddon',
    type: ControlType.ComponentInstance,
  },
  onClick: {
    title: 'OnClick',
    type: ControlType.EventHandler,
  },
});
