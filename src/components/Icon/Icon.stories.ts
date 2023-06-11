import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { BellIcon } from '../../assets/icons';

type Component = typeof Icon;
const meta: Meta<Component> = {
  title: 'rookies/Icon',
  component: Icon,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    children: BellIcon({ color: 'main_green_5' }),
    size: 'xsmall',
  },
};

export default meta;
