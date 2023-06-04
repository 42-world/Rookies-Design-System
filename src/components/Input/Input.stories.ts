import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type Component = typeof Input;
const meta: Meta<Component> = {
  title: 'rookies/Input',
  component: Input,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: { placeholder: '', maxLength: 10, variant: 'outline', hasError: false },
};

export default meta;
