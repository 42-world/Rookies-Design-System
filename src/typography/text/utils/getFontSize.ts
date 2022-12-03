import { Props } from '../Props';

export const getFontSize = (size: Props['size']) =>
  size === 'header1'
    ? '45px'
    : size === 'header2'
    ? '36px'
    : size === 'header3'
    ? '26px'
    : size === 'header4'
    ? '18px'
    : size === 'body1'
    ? '18px'
    : size === 'body2'
    ? '16px'
    : size === 'body3'
    ? '14px'
    : size === 'caption'
    ? '12px'
    : '16px';
