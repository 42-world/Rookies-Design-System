import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

type Component = typeof Text;
const meta: Meta<Component> = {
  title: 'rookies/Text',
  component: Text,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    text: '테스트 텍스트입니다!',
    size: 'body1',
    weight: 'medium',
  },
};

export default meta;
