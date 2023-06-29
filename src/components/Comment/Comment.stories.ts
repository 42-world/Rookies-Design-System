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
    avatarAlt: 'Lorem ipsum',
    username: '홍길동',
    time: '3시간 전',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    isMine: false,
    isAuthor: false,
    isLiked: false,
    likeCount: 0,
  },
};

export default meta;
