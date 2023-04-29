import type { Meta, StoryObj } from '@storybook/react';
import { Fab } from './Fab';

type Component = typeof Fab;
const meta: Meta<Component> = {
  title: '42world/Fab',
  component: Fab,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {},
};

export const Actived: Story = {
  args: {
    isActived: true,
  },
};

export default meta;
