import type { Meta, StoryObj } from '@storybook/react';
import ChatBubble from '@material-design-icons/svg/filled/chat_bubble.svg';
import Favorite from '@material-design-icons/svg/filled/favorite.svg';
import { ListItem } from './ListItem';
import { IconText } from '../IconText';

type Component = typeof ListItem;
const meta: Meta<Component> = {
  title: 'rookies/ListItem',
  component: ListItem,
};

type Story = StoryObj<Component>;

export const Primary: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    thumbnailSrc: 'https://picsum.photos/536/354',
    secondaryTextFirst: '2021.10.20',
    secondaryTextSecond: '지최',
    children: (
      <ListItem.MetadataItems>
        <IconText svg={ChatBubble} text="0" />
        <IconText svg={Favorite} text="0" />
      </ListItem.MetadataItems>
    ),
  },
};

export const WithoutThumbnail: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    secondaryTextFirst: '2021.10.20',
    secondaryTextSecond: '지최',
    children: (
      <ListItem.MetadataItems>
        <IconText svg={ChatBubble} text="16" />
        <IconText svg={Favorite} text="32" />
      </ListItem.MetadataItems>
    ),
  },
};

export const OnlyOneSecondaryText: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    secondaryTextFirst: '지최게시판',
    children: (
      <ListItem.MetadataItems>
        <IconText svg={ChatBubble} text="16" />
        <IconText svg={Favorite} text="32" />
      </ListItem.MetadataItems>
    ),
  },
};

export const WithoutSecondaryText: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    children: (
      <ListItem.MetadataItems>
        <IconText svg={ChatBubble} text="32" />
        <IconText svg={Favorite} text="16" />
      </ListItem.MetadataItems>
    ),
  },
};

export const SingleMetadata: Story = {
  args: {
    title: '지바: 지최는 바보라는 뜻',
    children: (
      <ListItem.MetadataItems>
        <IconText svg={Favorite} text="16" />
      </ListItem.MetadataItems>
    ),
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
