import type { Meta, StoryObj } from '@storybook/react';
import { TopNavigation } from './TopNavigation';

type Component = typeof TopNavigation;
const meta: Meta<Component> = {
  title: '42world/TopNavigation',
  component: TopNavigation,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    links: {
      homeLink: 'https://github.com/Skyrich2000',
      themeLink: 'https://github.com/SeoJunHwan',
      searchLink: 'https://github.com/chichoon',
      createLink: 'https://github.com/asdf99245',
      alertLink: 'https://42world.kr',
    },
    user: {
      profileLink: 'https://github.com/chichoon',
      profileImg: 'https://avatars.githubusercontent.com/u/37893979?v=4',
    },
  },
};

export default meta;
