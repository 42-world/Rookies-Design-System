import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from './Comment';

type Component = typeof Comment;
const meta: Meta<Component> = {
  title: 'rookies/Comment',
  component: Comment,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    avatarSrc: 'https://picsum.photos/536/354',
    avatarAlt: 'WeL0ve42World',
    username: '에베베손',
    time: '3시간 전',
    content:
      '오늘 저녁은 맛있는 떡갈비에 열무김치에 명이나물을 먹었고 동물의숲 하고싶고 돈벌고싶고 어쩌구저쩌구 아쉽게도 transition은 아직 리액트 18에서도 개발중인 기능 중 하나이기에...',
    isMine: false,
    isAuthor: false,
    isLiked: false,
    numOfLikes: 0,
  },
};

export default meta;
