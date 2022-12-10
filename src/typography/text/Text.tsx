import { css } from '@emotion/css';
import * as React from 'react';
import '../../common/style/reset.css';
import { Theme } from '../../common/type';
import { TextAlignType, TextColorType, TextSizeType } from './types';
import { getFontSize, getFontWeight, getThemeColor } from './utils';

export type Props = {
  theme: Theme;
  size: TextSizeType;
  color: TextColorType;
  align: TextAlignType;
  text: string;
};

export function Text({ theme, size, color, align, text }: Props) {
  return (
    <div className={textStyle(align, size)} style={{ color: getThemeColor(theme, color) }}>
      {size === 'header1' ? (
        <h1>{text}</h1>
      ) : size === 'header2' ? (
        <h2>{text}</h2>
      ) : size === 'header3' ? (
        <h3>{text}</h3>
      ) : size === 'header4' ? (
        <h4>{text}</h4>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}

const textStyle = (align: Props['align'], size: Props['size']) => css`
  display: flex;
  justify-content: ${align};

  & h1,
  h2,
  h3,
  h4,
  p {
    /* white-space: nowrap; */
    font-size: ${getFontSize(size)};
    font-weight: ${getFontWeight(size)}};
    width: 1fr;
    line-height: 1.25;
    margin: 0;
  }
`;
