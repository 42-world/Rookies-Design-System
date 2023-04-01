import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TopNavigation } from './TopNavigation';

export default {
  title: '42world/TopNavigation',
  component: TopNavigation,
} as ComponentMeta<typeof TopNavigation>;

const Template: ComponentStory<typeof TopNavigation> = (args) => <TopNavigation {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  theme: 'light',
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
};
