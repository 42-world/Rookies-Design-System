import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Feed as _Feed } from './Feed';

export function Feed(props: ComponentProps<typeof _Feed>) {
  return (
    <FramerProvider>
      <_Feed {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Feed, {
  writerName: {
    title: 'Writer Name',
    type: ControlType.String,
    defaultValue: 'beson',
  },
  writerImg: {
    title: 'Writer Image',
    type: ControlType.Image,
  },
  title: {
    title: 'Title',
    type: ControlType.String,
    defaultValue: '제목',
  },
  contents: {
    title: 'Contents',
    type: ControlType.String,
    defaultValue:
      '나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄 이런 젼차로 어린 백셩이 니르고져 홀 배 이셔도 마참내 제 뜨들 시러펴디 몯 할 노미 하니라',
  },
  isLike: {
    title: 'Like',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  likeCount: {
    title: 'Like Count',
    type: ControlType.Number,
    defaultValue: 1,
  },
  commentCount: {
    title: 'Comment Count',
    type: ControlType.Number,
    defaultValue: 1,
  },
  createdAt: {
    title: 'Created At',
    type: ControlType.Number,
    defaultValue: 1,
    min: 0,
    displayStepper: true,
  },
  onLikeClick: {
    title: 'onLikeClick',
    type: ControlType.EventHandler,
  },
});
