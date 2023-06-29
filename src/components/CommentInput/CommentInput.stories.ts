import type { Meta, StoryObj } from '@storybook/react';
import { CommentInput } from './CommentInput';

type Component = typeof CommentInput;
const meta: Meta<Component> = {
  title: 'rookies/CommentInput',
  component: CommentInput,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    placeholder: 'Lorem ipsum',
  },
};

export default meta;
