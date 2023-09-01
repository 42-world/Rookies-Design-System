import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

type Component = typeof Checkbox;
const meta: Meta<Component> = {
  title: 'rookies/Checkbox',
  component: Checkbox,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    children: 'label',
    checked: false,
    disabled: false,
  },
};

export default meta;
