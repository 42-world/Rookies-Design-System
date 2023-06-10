import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

type Component = typeof Badge;
const meta: Meta<Component> = {
  title: 'rookies/Badge',
  component: Badge,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    color: 'mono',
    text: '내댓글',
  },
};

export default meta;
