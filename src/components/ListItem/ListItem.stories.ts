import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';

type Component = typeof ListItem;
const meta: Meta<Component> = {
  title: 'rookies/ListItem',
  component: ListItem,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    thumbnailSrc: 'https://picsum.photos/536/354',
    title: '지바: 지최는 바보라는 뜻',
    secondaryTextFirst: '지최',
    secondaryTextSecond: '2021-10-20',
    commentCnt: 16,
    likeCnt: 32,
  },
};

export const WithoutThumbnail: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    secondaryTextFirst: '지최',
    secondaryTextSecond: '2021-10-20',
    commentCnt: 16,
    likeCnt: 32,
  },
};

export const OnlyOneSecondaryText: Story = {
  args: {
    title: '지바 -> 지최는 바보라는 뜻',
    secondaryTextFirst: '지최',
    commentCnt: 16,
    likeCnt: 32,
  },
};

export const WithoutSecondaryText: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    commentCnt: 16,
    likeCnt: 32,
  },
};

export const WithoutCommentMeta: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    likeCnt: 32,
  },
};

export const WithoutMetaData: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
  },
};

export const WithoutBorder: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    hasBorder: false,
  },
};

export default meta;
