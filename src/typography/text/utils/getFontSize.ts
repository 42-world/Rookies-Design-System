import { Props } from '../Props';

export const getFontSize = (size: Props['size']) =>
  size === 'Header1'
    ? '45px'
    : size === 'Header2'
    ? '36px'
    : size === 'Header3'
    ? '26px'
    : size === 'Header4'
    ? '18px'
    : size === 'Body1'
    ? '18px'
    : size === 'Body2'
    ? '16px'
    : size === 'Body3'
    ? '14px'
    : size === 'Caption'
    ? '12px'
    : '16px';
