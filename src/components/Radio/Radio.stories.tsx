import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

type Component = typeof Radio;
const meta: Meta<Component> = {
  title: 'rookies/Radio',
  component: Radio,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    label: '라디오',
  },
};

export const Selected: Story = {
  args: {
    label: '라디오',
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '라디오',
    disabled: true,
  },
};

export default meta;
