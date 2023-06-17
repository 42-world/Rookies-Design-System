import type { ComponentProps } from 'react';
import { ControlType } from 'framer';

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
    title: 'avatarSrc',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  avatarAlt: {
    title: 'avatarAlt',
    type: ControlType.String,
    defaultValue: '지최',
  },
  username: {
    title: 'username',
    type: ControlType.String,
    defaultValue: '지최',
  },
  time: {
    title: 'time',
    type: ControlType.String,
    defaultValue: '2021-10-20',
  },
  content: {
    title: 'content',
    type: ControlType.String,
    defaultValue: '지최 is Babo',
  },
  isMine: {
    title: 'isMine',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  isAuthor: {
    title: 'isAuthor',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  isLiked: {
    title: 'isLiked',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  numOfLikes: {
    title: 'numOfLikes',
    type: ControlType.Number,
    defaultValue: 16,
  },
});
