import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from './Comment';

type Component = typeof Comment;
const meta: Meta<Component> = {
  title: '42world/Comment',
  component: Comment,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    writerName: 'ycha',
    writerImg: 'https://avatars.githubusercontent.com/u/8',
    theme: 'light',
    text: '댓글 내용 입니다',
    isLike: true,
    likeCount: 10,
  },
};

export default meta;
