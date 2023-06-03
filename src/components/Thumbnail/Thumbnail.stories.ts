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
    src: 'https://github.com/42-world/42world-Frontend/raw/dev/public/assets/42worldCharacterLogo.png',
    alt: '42world',
    width: 269,
    ratio: '16:9',
  },
};

export default meta;
