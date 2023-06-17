import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

type Component = typeof Checkbox;
const meta: Meta<Component> = {
  title: '42world/Checkbox',
  component: Checkbox,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    text: 'Checkbox',
  },
};

export default meta;
