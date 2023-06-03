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
    imageSrc: 'https://github.com/42-world/42world-Frontend/raw/dev/public/assets/42worldCharacterLogo.png',
    imageAlt: '42world',
    primary: '에베베손',
    secondary: '2023.04.32',
  },
};

export const PrimaryWithDetail: Story = {
  args: {
    imageSrc: 'https://github.com/42-world/42world-Frontend/raw/dev/public/assets/42worldCharacterLogo.png',
    imageAlt: '42world',
    primary: '에베베손',
    secondary: '2023.04.32',
    detail: '지최는 배가 고프고 내일은 닭가슴살 소세지 먹을 거고 스타벅스 가서 이거 하고',
  },
};

export const PrimaryNoPrimaryText: Story = {
  args: {
    imageSrc: 'https://github.com/42-world/42world-Frontend/raw/dev/public/assets/42worldCharacterLogo.png',
    imageAlt: '42world',
    secondary: '지최',
    detail: '지최는 배가 고프고 내일은 닭가슴살 소세지 먹을 거고 스타벅스 가서 이거 하고',
  },
};

export default meta;
