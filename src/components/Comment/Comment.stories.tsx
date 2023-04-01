import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Comment } from './Comment';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '42world/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  writerName: 'ycha',
  writerImg: 'https://avatars.githubusercontent.com/u/8',
  theme: 'light',
  text: '댓글 내용 입니다',
  isLike: true,
  likeCount: 10,
};
