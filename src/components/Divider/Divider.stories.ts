import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

type Component = typeof Divider;
const meta: Meta<Component> = {
  title: 'rookies/Divder',
  component: Divider,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export default meta;
