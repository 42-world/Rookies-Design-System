import ChatBubble from '@material-design-icons/svg/filled/chat_bubble.svg';
import Favorite from '@material-design-icons/svg/filled/favorite.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { IconText } from '../IconText';
import { ListItem } from './ListItem';

type Component = typeof ListItem;
const meta: Meta<Component> = {
  title: 'rookies/ListItem',
  component: ListItem,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    title: 'Lorem ipsum',
    thumbnailSrc: 'https://picsum.photos/536/354',
    secondaryTextFirst: '2021.10.20',
    secondaryTextSecond: '홍길동',
    rightAddon: (
      <>
        <IconText icon={<ChatBubble />} text="16" />
        <IconText icon={<Favorite />} text="32" />
      </>
    ),
  },
};

export const WithoutThumbnail: Story = {
  args: {
    title: 'Lorem ipsum',
    secondaryTextFirst: '2021.10.20',
    secondaryTextSecond: '홍길동',
    rightAddon: (
      <>
        <IconText icon={<ChatBubble />} text="16" />
        <IconText icon={<Favorite />} text="32" />
      </>
    ),
  },
};

export const OnlyOneSecondaryText: Story = {
  args: {
    title: 'Lorem ipsum',
    secondaryTextFirst: '게시판 1',
    rightAddon: (
      <>
        <IconText icon={<ChatBubble />} text="16" />
        <IconText icon={<Favorite />} text="32" />
      </>
    ),
  },
};

export const WithoutSecondaryText: Story = {
  args: {
    title: 'Lorem ipsum',
    rightAddon: (
      <>
        <IconText icon={<ChatBubble />} text="16" />
        <IconText icon={<Favorite />} text="32" />
      </>
    ),
  },
};

export const SingleMetadata: Story = {
  args: {
    title: 'Lorem ipsum',
    rightAddon: (
      <>
        <IconText icon={<ChatBubble />} text="16" />
      </>
    ),
  },
};

export const WithoutMetaData: Story = {
  args: {
    title: 'Lorem ipsum',
  },
};

export const WithoutBorder: Story = {
  args: {
    title: 'Lorem ipsum',
    hasBorder: false,
  },
};

export default meta;
