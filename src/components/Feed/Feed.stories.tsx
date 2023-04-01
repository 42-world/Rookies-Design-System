import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Feed } from './Feed';

export default {
  title: '42world/Feed',
  component: Feed,
} as ComponentMeta<typeof Feed>;

const Template: ComponentStory<typeof Feed> = (args) => <Feed {...args} />;

export const Light = Template.bind({});

Light.args = {
  theme: 'light',
  writerName: 'junseo',
  writerImg: 'https://avatars.githubusercontent.com/u/72878284?s=400&u=e764cc0b15861e9b0e3e447157b4c7fa67513bca&v=4',
  title: 'hello',
  contents: 'hello world',
  isLike: false,
  likeCount: 0,
  commentCount: 0,
  createdAt: '2023-04-02 12:00:00',
};
