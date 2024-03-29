import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

type Component = typeof Chip;
const meta: Meta<Component> = {
  title: '42world/Chip',
  component: Chip,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    text: 'Chip',
    isSelected: false,
  },
};

export default meta;
