import type { Meta, StoryObj } from '@storybook/react';
import { Jiychoi } from './Jiychoi';

type Component = typeof Jiychoi;
const meta: Meta<Component> = {
  title: 'rookies/Jiychoi',
  component: Jiychoi,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {},
};

export default meta;
