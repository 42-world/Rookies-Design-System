import type { Meta, StoryObj } from '@storybook/react';
import { SideNavigation } from './SideNavigation';

type Component = typeof SideNavigation;
const meta: Meta<Component> = {
  title: '42world/SideNavigation',
  component: SideNavigation,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    hasIcon: true,
    focus: 0,
    list: [
      {
        icon: 'ChatIcon',
        text: '홈',
        link: '/',
      },
      {
        icon: 'SearchIcon',
        text: '검색',
        link: '/search',
      },
    ],
  },
};

export default meta;
