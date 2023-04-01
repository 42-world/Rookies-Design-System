import { ComponentMeta } from '@storybook/react';
import { SideNavigation } from './SideNavigation';

export default {
  title: '42world/SideNavigation',
  component: SideNavigation,
} as ComponentMeta<typeof SideNavigation>;

export const Light = () => {
  const props: Parameters<typeof SideNavigation>[0] = {
    theme: 'light',
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
  };

  return <SideNavigation {...props} />;
};

export const Dark = () => {
  const props: Parameters<typeof SideNavigation>[0] = {
    theme: 'dark',
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
  };

  return <SideNavigation {...props} />;
};
