import type { Meta, StoryObj } from '@storybook/react';
import { Feed } from './Feed';

type Component = typeof Feed;
const meta: Meta<Component> = {
  title: 'rookies/Feed',
  component: Feed,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    username: 'Lorem Ipsum',
    timestamp: '4시간 전',
    userProfileSrc: 'https://picsum.photos/536/354',
    thumbnailSrc: 'https://picsum.photos/536/354',
    title: 'Lorem Ipsum',
    contents:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. ',
    isLiked: false,
    likeCount: 30,
    isCommentClicked: false,
    commentCount: 30,
  },
};

export const Liked: Story = {
  // Add your story args here
  args: {
    ...Primary.args,
    isLiked: true,
  },
};

export const CommentClicked: Story = {
  // Add your story args here
  args: {
    ...Primary.args,
    isCommentClicked: true,
  },
};

export default meta;
