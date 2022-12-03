import { Theme } from '../../common/type';

export type Props = {
  theme: Theme;
  size: 'Header1' | 'Header2' | 'Header3' | 'Header4' | 'Body1' | 'Body2' | 'Body3' | 'Caption';
  color: 'grey_40' | 'grey_50' | 'grey_60' | 'grey_70' | 'main_green_10' | 'red_10';
  align: 'left' | 'center' | 'right';
  text: string;
};
