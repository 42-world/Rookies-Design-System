import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

type Component = typeof Avatar;
const meta: Meta<Component> = {
  title: 'rookies/Avatar',
  component: Avatar,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    src: 'https://picsum.photos/536/354',
    alt: 'Lorem Ipsum',
    size: '40px',
  },
};
s;

export default meta;
