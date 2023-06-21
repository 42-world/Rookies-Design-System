import type { Meta, StoryObj } from '@storybook/react';
import { Feed } from './Feed';

type Component = typeof Feed;
const meta: Meta<Component> = {
  title: 'rookies/Feed',
  component: Feed,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    userProfileSrc: 'https://picsum.photos/536/354',
    username: '에베베손',
    timestamp: '4시간 전',
    thumbnailSrc: 'https://picsum.photos/536/354',
    title: 'Lorem Ipsum',
    contents:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. ',
  },
};

export default meta;
