import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

type Component = typeof Avatar;
const meta: Meta<Component> = {
  title: '42world/Avatar',
  component: Avatar,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    secondaryText: 'hello',
    name: 'junseo',
    img: 'https://avatars.githubusercontent.com/u/72878284?s=400&u=e764cc0b15861e9b0e3e447157b4c7fa67513bca&v=4',
  },
};

export default meta;
