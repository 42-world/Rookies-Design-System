import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

type Component = typeof SearchBar;
const meta: Meta<Component> = {
  title: 'rookies/SearchBar',
  component: SearchBar,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    placeholder: 'Yes, I am Gyudong',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    placeholder: 'Yes, I am Gyudon',
  },
};

export default meta;
