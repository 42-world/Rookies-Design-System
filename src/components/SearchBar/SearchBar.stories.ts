import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

type Component = typeof SearchBar;
const meta: Meta<Component> = {
  title: 'rookies/SearchBar',
  component: SearchBar,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    placeholder: '검색어를 입력하세요',
  },
};

export default meta;
