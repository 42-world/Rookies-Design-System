import type { Meta, StoryObj } from '@storybook/react';
import { SortSelector } from './SortSelector';

type Component = typeof SortSelector;
const meta: Meta<Component> = {
  title: '42world/SortSelector',
  component: SortSelector,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    list: [
      {
        link: 'https://42world.com',
        text: '최신순',
      },
      {
        link: 'https://42world.com',
        text: '인기순',
      },
    ],
    selectedIndex: 0,
  },
};

export default meta;
