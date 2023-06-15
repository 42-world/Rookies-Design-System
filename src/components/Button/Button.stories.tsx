import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import HolidayVillage from '@material-design-icons/svg/filled/holiday_village.svg';

type Component = typeof Button;
const meta: Meta<Component> = {
  title: 'rookies/Button',
  component: Button,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  render: (args) => <Button text="이거 누르면 지최 등장함" icon={HolidayVillage} {...args} />,
};

export default meta;
