import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from './Checkbox';

type Component = typeof CheckboxGroup;
const meta: Meta<Component> = {
  title: 'rookies/CheckboxGroup',
  component: CheckboxGroup,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    selectedValue: ['label1', 'label3'],
    children: (
      <>
        <Checkbox value="label1">children</Checkbox>
        <Checkbox value="label2">children</Checkbox>
        <Checkbox value="label3">children</Checkbox>
      </>
    ),
  },
};

export const WithDisabled: Story = {
  args: {
    selectedValue: ['label1', 'label3'],
    children: (
      <>
        <Checkbox value="label1">children</Checkbox>
        <Checkbox value="label2">children</Checkbox>
        <Checkbox value="label3" disabled>
          children
        </Checkbox>
      </>
    ),
  },
};

export default meta;
