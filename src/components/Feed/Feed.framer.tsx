import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Feed as _Feed } from './Feed';

export function Feed(props: ComponentProps<typeof _Feed>) {
  return (
    <FramerProvider>
      <_Feed {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Feed, {
  username: {
    title: 'Username',
    type: ControlType.String,
    defaultValue: '홍길동',
  },
  timestamp: {
    title: 'Timestamp',
    type: ControlType.String,
    defaultValue: '4시간 전',
  },
  userProfileSrc: {
    title: 'UserProfileSrc',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  thumbnailSrc: {
    title: 'ThumbnailSrc',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  title: {
    title: 'Title',
    type: ControlType.String,
    defaultValue: 'Lorem Ipsum',
  },
  contents: {
    title: 'Contents',
    type: ControlType.String,
    defaultValue:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod.',
  },
  isLiked: {
    title: 'IsLiked',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  likeCount: {
    title: 'LikeCount',
    type: ControlType.Number,
    defaultValue: 30,
  },
  isCommentClicked: {
    title: 'IsCommentClicked',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  commentCount: {
    title: 'CommentCount',
    type: ControlType.Number,
    defaultValue: 30,
  },
});
