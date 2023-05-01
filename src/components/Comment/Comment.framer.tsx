import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Comment as _Comment } from './Comment';

export function Comment(props: ComponentProps<typeof _Comment>) {
  return (
    <FramerProvider>
      <_Comment {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Comment, {
  writerName: {
    title: 'Writer Name',
    type: ControlType.String,
    defaultValue: 'beson',
  },
  writerImg: {
    title: 'Writer Image',
    type: ControlType.Image,
  },
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: '저도 마찬가지에요! 항상 군대에서 뭘 준비해야할지 모르겠어요 ㅠㅠㅜㅜㅜㅜ',
  },
  isLike: {
    title: 'Like',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  likeCount: {
    title: 'Like Count',
    type: ControlType.Number,
    defaultValue: 0,
    min: 0,
    displayStepper: true,
  },
  createdAt: {
    title: 'Created At',
    type: ControlType.String,
    defaultValue: '1분 전',
  },
});
