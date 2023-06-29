import type { Meta, StoryObj } from '@storybook/react';
import { AvatarText } from './AvatarText';

type Component = typeof AvatarText;
const meta: Meta<Component> = {
  title: 'rookies/AvatarText',
  component: AvatarText,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    src: 'https://picsum.photos/536/354',
    alt: 'Lorem Ipsum',
    size: '40px',
    mainText: 'Lorem Ipsum',
  },
};

export default meta;
