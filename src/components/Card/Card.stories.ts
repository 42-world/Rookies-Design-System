import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

type Component = typeof Card;
const meta: Meta<Component> = {
  title: 'rookies/Card',
  component: Card,
};

type Story = StoryObj<Component>;
export const Primary: Story = {
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: 'Lorem Ipsum',
    primary: 'Lorem Ipsum',
    secondary: '2023.04.32',
  },
};

export const PrimaryWithTitle: Story = {
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: 'Lorem Ipsum',
    primary: 'Lorem Ipsum',
    secondary: '2023.04.32',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
};

export const PrimaryNoPrimaryText: Story = {
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: 'Lorem Ipsum',
    secondary: 'Lorem Ipsum',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
};

export default meta;
