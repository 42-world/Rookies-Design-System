import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SortSelector } from './SortSelector';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '42world/SortSelector',
  component: SortSelector,
} as ComponentMeta<typeof SortSelector>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SortSelector> = (args) => <SortSelector {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  list: [
    {
      link: 'https://42world.com',
      text: '최신순',
    },
    {
      link: 'https://42world.com',
      text: '인기순',
    },
  ],
  selectedIndex: 0,
  theme: 'light',
};
