import type { Meta, StoryObj } from '@storybook/react';
import { Thumbnail } from './Thumbnail';

type Component = typeof Thumbnail;
const meta: Meta<Component> = {
  title: 'rookies/Thumbnail',
  component: Thumbnail,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    src: 'https://picsum.photos/536/354',
    alt: 'Lorem Ipsum',
    width: 269,
    rounded: '16px',
    ratio: '16:9',
  },
};

export default meta;
