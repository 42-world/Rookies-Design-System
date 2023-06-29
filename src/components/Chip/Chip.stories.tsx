import Face from '@material-design-icons/svg/filled/face.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

type Component = typeof Chip;
const meta: Meta<Component> = {
  title: 'rookies/Chip',
  component: Chip,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    icon: <Face />,
    text: 'Sample',
    isSelected: false,
  },
};

export const PrimaryNoIcon: Story = {
  args: {
    text: 'Sample',
    isSelected: false,
  },
};

export default meta;
