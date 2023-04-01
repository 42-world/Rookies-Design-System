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
  name: 'junseo',
  img: 'https://avatars.githubusercontent.com/u/72878284?s=400&u=e764cc0b15861e9b0e3e447157b4c7fa67513bca&v=4',
};

Dark.args = {
  theme: 'dark',
  secondaryText: 'hello',
  name: 'junseo',
  img: 'https://avatars.githubusercontent.com/u/72878284?s=400&u=e764cc0b15861e9b0e3e447157b4c7fa67513bca&v=4',
};
