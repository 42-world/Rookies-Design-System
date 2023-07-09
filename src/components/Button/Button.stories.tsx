import HolidayVillage from '@material-design-icons/svg/filled/holiday_village.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

type Component = typeof Button;
const meta: Meta<Component> = {
  title: 'rookies/Button',
  component: Button,
  argTypes: {
    activated: {
      if: {
        arg: 'variant',
        eq: 'text',
      },
    },
    disabled: {
      description: '버튼을 비활성화합니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
  },
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    text: 'Lorem Ipsum',
    icon: <HolidayVillage />,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

export const Text: Story = {
  args: {
    ...Primary.args,
    variant: 'text',
  },
};

export const TextActivated: Story = {
  args: {
    ...Primary.args,
    variant: 'text',
    activated: true,
  },
};

export const OnlyIcon: Story = {
  args: {
    icon: <HolidayVillage />,
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Lorem Ipsum',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Lorem Ipsum',
    disabled: true,
  },
};

export default meta;
