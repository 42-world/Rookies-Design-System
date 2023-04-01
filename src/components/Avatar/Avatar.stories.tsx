import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: '42world/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Light.args = {
  theme: 'light',
  secondaryText: 'hello',
  name: 'ycha',
  img: 'https://avatars.githubusercontent.com/u/22424891?v=4',
};

Dark.args = {
  theme: 'dark',
  secondaryText: 'hello',
  name: 'ycha',
  img: 'https://avatars.githubusercontent.com/u/22424891?v=4',
};
