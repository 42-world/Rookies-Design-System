import Power from '@material-design-icons/svg/filled/power.svg';
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
  args: { icon: <Power />, text: 'xsmall', size: 'xsmall' },
};

export const Small: Story = {
  // Add your story args here
  args: { ...Primary.args, text: 'small', size: 'small' },
};

export const Medium: Story = {
  // Add your story args here
  args: { ...Primary.args, text: 'medium', size: 'medium' },
};

export default meta;
