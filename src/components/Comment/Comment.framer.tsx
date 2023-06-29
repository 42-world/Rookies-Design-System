import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Comment as _Comment } from './Comment';

export function Comment(props: ComponentProps<typeof _Comment>) {
  return (
    <FramerProvider>
      <_Comment {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Comment, {
  avatarSrc: {
    title: 'AvatarSrc',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  avatarAlt: {
    title: 'AvatarAlt',
    type: ControlType.String,
    defaultValue: 'Lorem ipsum',
  },
  username: {
    title: 'Username',
    type: ControlType.String,
    defaultValue: '홍길동',
  },
  time: {
    title: 'Time',
    type: ControlType.String,
    defaultValue: '3시간 전',
  },
  content: {
    title: 'Content',
    type: ControlType.String,
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  isMine: {
    title: 'IsMine',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  isAuthor: {
    title: 'IsAuthor',
    type: ControlType.Boolean,
    defaultValue: false,
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
});
