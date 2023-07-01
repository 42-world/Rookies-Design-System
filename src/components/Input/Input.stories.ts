import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type Component = typeof Input;
const meta: Meta<Component> = {
  title: 'rookies/Input',
  component: Input,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: { label: '필수 항목', placeholder: '', maxLength: 10, variant: 'outlined', hasError: false },
};

export const DefaultValue: Story = {
  args: { ...Primary.args, defaultValue: '기본값' },
};

export const SubLabel: Story = {
  args: { ...Primary.args, subLabel: 'Sub Label' },
};

export default meta;
