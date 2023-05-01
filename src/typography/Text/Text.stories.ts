import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

type Component = typeof Text;
const meta: Meta<Component> = {
  title: '42world/Text',
  component: Text,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    align: 'left',
    color: 'main_green_10',
    size: 'header1',
    text: 'Hello World',
  },
};

export default meta;
