import type { Meta, StoryObj } from '@storybook/react';
import { Feed } from './Feed';

type Component = typeof Feed;
const meta: Meta<Component> = {
  title: '42world/Feed',
  component: Feed,
};

type Story = StoryObj<Component>;
export const Light: Story = {
  args: {
    theme: 'light',
    writerName: 'junseo',
    writerImg: 'https://avatars.githubusercontent.com/u/72878284?s=400&u=e764cc0b15861e9b0e3e447157b4c7fa67513bca&v=4',
    title: 'hello',
    contents: 'hello world',
    isLike: false,
    likeCount: 0,
    commentCount: 0,
    createdAt: '2023-04-02 12:00:00',
  },
};

export default meta;
