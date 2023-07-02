import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

type Component = typeof RadioGroup;
const meta: Meta<Component> = {
  title: 'rookies/RadioGroup',
  component: RadioGroup,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    selectedLabel: '라디오1',
    children: (
      <>
        <Radio label="라디오1" />
        <Radio label="라디오2" />
        <Radio label="라디오3" />
      </>
    ),
  },
};

export const WithDisabled: Story = {
  args: {
    selectedLabel: '라디오1',
    children: (
      <>
        <Radio label="라디오1" />
        <Radio label="라디오2" />
        <Radio label="라디오3" disabled />
      </>
    ),
  },
};

export default meta;
