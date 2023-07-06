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
    placeholder: 'Lorem Ipsum',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    placeholder: 'Lorem Ipsum',
  },
};

export default meta;
