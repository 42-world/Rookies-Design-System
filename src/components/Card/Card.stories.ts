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
    imageAlt: '42world',
    primary: '에베베손',
    secondary: '2023.04.32',
  },
};

export const PrimaryWithTitle: Story = {
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: '42world',
    primary: '에베베손',
    secondary: '2023.04.32',
    title: '지최는 배가 고프고 내일은 닭가슴살 소세지 먹을 거고 스타벅스 가서 이거 하고',
  },
};

export const PrimaryNoPrimaryText: Story = {
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: '42world',
    secondary: '지최',
    title: '지최는 배가 고프고 내일은 닭가슴살 소세지 먹을 거고 스타벅스 가서 이거 하고',
  },
};

export default meta;
