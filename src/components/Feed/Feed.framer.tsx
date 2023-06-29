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
    defaultValue: '에베베손',
  },
  timestamp: {
    title: 'Timestamp',
    type: ControlType.String,
    defaultValue: '1시간 전',
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
    defaultValue: '42world design system',
  },
  contents: {
    title: 'Contents',
    type: ControlType.String,
    defaultValue: '42world design system',
  },
  isLiked: {
    title: 'IsLiked',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  likeCount: {
    title: 'LikeCount',
    type: ControlType.Number,
    defaultValue: 0,
  },
  isCommentClicked: {
    title: 'IsCommentClicked',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  commentCount: {
    title: 'CommentCount',
    type: ControlType.Number,
    defaultValue: 0,
  },
});
