import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

type Component = typeof Tabs;
const meta: Meta<Component> = {
  title: '42world/Tabs',
  component: Tabs,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    theme: 'light',
    label: ['ycha 바보', 'junseo 바보', '규동 말고 부타동'],
    children: [
      <p style={{ color: '#777777', padding: '10px 20px' }}>ycha 바보</p>,
      <p style={{ color: '#777777', padding: '10px 20px' }}>junseo 컨테이너 언제해</p>,
      <p style={{ color: '#777777', padding: '10px 20px' }}>죄수번호 186</p>,
    ],
    align: 'left',
  },
};

export default meta;
