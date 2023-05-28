import type { Meta, StoryObj } from '@storybook/react';
import { BellIcon } from '../../assets/icons';
import { Chip } from './Chip';

type Component = typeof Chip;
const meta: Meta<Component> = {
  title: 'rookies/Chip',
  component: Chip,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    children: BellIcon({ color: 'main_green_5' }),
    text: 'Sample',
    selected: false,
  },
};

export const PrimaryNoIcon: Story = {
  args: {
    text: 'Sample',
    selected: false,
  },
};

export default meta;
