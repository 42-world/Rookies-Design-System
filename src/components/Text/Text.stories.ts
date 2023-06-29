import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

type Component = typeof Text;
const meta: Meta<Component> = {
  title: 'rookies/Text',
  component: Text,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    text: 'Lorem ipsum',
    size: 'body1',
    weight: 'medium',
  },
};

export const AlignRight: Story = {
  args: {
    ...Primary.args,
    align: 'right',
  },
};

export const AlignCenter: Story = {
  args: {
    ...Primary.args,
    align: 'center',
  },
};

export const ColorSecondary: Story = {
  args: {
    ...Primary.args,
    color: 'secondary',
  },
};

export default meta;
