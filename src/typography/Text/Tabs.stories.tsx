import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from './Text';

export default {
  title: '42world/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  align: 'left',
  color: 'main_green_10',
  size: 'header1',
  text: 'Hello World',
  theme: 'light',
};
