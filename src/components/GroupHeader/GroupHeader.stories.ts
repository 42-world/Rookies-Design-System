import type { Meta, StoryObj } from '@storybook/react';
import { GroupHeader } from './GroupHeader';

type Component = typeof GroupHeader;
const meta: Meta<Component> = {
  title: 'rookies/GroupHeader',
  component: GroupHeader,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    text: 'Lorem ipsum',
    href: 'https://github.com',
  },
};

export default meta;
