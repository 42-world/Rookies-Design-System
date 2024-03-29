import AddCard from '@material-design-icons/svg/filled/power.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

type Component = typeof Icon;
const meta: Meta<Component> = {
  title: 'rookies/Icon',
  component: Icon,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    svg: <AddCard />,
    size: 'medium',
  },
};

export default meta;
