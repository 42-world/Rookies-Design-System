import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type Component = typeof Input;
const meta: Meta<Component> = {
  title: '42world/Input',
  component: Input,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    theme: 'light',
    placeholder: 'Input',
    value: '입력값',
  },
};

export default meta;
