import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type Component = typeof Input;
const meta: Meta<Component> = {
  title: 'rookies/Input',
  component: Input,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: { value: '', placeholder: '', maxLength: 10 },
};

export default meta;
