import type { Meta, StoryObj } from '@storybook/react';
import { Sample } from './Sample';

type Component = typeof Sample;
const meta: Meta<Component> = {
  title: 'rookies/Sample',
  component: Sample,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    text: 'Sample',
  },
};

export default meta;
