import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

type Component = typeof Footer;
const meta: Meta<Component> = {
  title: 'rookies/Footer',
  component: Footer,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  // Add your story args here
  args: {
    githubLink: 'https://github.com',
    mailLink: 'mailto:asdf@naver.com',
    text: '@ 2022. Team ROOK!ES',
  },
};

export default meta;
