import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

type Component = typeof Button;
const meta: Meta<Component> = {
  title: '42world/Button',
  component: Button,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    type: 'text',
    text: 'Button',
    size: 'normal',
    style: 'primary',
  },
};

export default meta;
