import AddCard from '@material-design-icons/svg/filled/power.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { IconText } from './IconText';

type Component = typeof IconText;
const meta: Meta<Component> = {
  title: 'rookies/IconText',
  component: IconText,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: { svg: AddCard, text: 'xsmall' },
};

export default meta;
