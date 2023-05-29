import { TextSizeType } from '../types';

export const getFontWeight = (size: TextSizeType) =>
  size === 'header1'
    ? 600
    : size === 'header2'
    ? 600
    : size === 'header3'
    ? 600
    : size === 'header4'
    ? 600
    : size === 'body1'
    ? 500
    : 500;
