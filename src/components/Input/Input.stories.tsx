import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';

export default {
  title: '42world/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  theme: 'light',
  placeholder: 'Input',
  value: '입력값',
};
