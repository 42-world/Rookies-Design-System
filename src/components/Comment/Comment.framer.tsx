import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
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
    defaultValue: 'image',
  },
  username: {
    title: 'Username',
    type: ControlType.String,
    defaultValue: '에베베손',
  },
  time: {
    title: 'Time',
    type: ControlType.String,
    defaultValue: '1시간 전',
  },
  content: {
    title: 'Content',
    type: ControlType.String,
    defaultValue: '42world design system',
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
  numOfLikes: {
    title: 'NumOfLikes',
    type: ControlType.Number,
    defaultValue: 0,
  },
});
