import { css } from '@emotion/css';
import React from 'react';
import '../../assets/styles/reset.css';
import { Theme } from '../../common/type';
import { TextAlignType, TextColorType, TextSizeType } from './types';
import { getFontSize, getFontWeight, getThemeColor } from './utils';
React;

export type Props = {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 텍스트
   */
  text: string;

  /**
   * 텍스트 사이즈
   */
  size: TextSizeType;

  /**
   * 텍스트 색상
   */
  color: TextColorType;

  /**
   * 텍스트 정렬
   */
  align: TextAlignType;
};

/**
 * 텍스트 컴포넌트
 *
 * @author ycha
 */
export function Text({ theme, size, color, align, text }: Props) {
  return (
    <div className={textStyle(align, size)} style={{ color: getThemeColor(theme, color) }}>
      {size === 'header1' ? (
        <h1 className={removeMargin}>{text}</h1>
      ) : size === 'header2' ? (
        <h2 className={removeMargin}>{text}</h2>
      ) : size === 'header3' ? (
        <h3 className={removeMargin}>{text}</h3>
      ) : size === 'header4' ? (
        <h4 className={removeMargin}>{text}</h4>
      ) : (
        <p className={removeMargin}>{text}</p>
      )}
    </div>
  );
}

const textStyle = (align: Props['align'], size: Props['size']) => css`
  display: flex;
  justify-content: ${align};

  & h1, h2, h3, h4, p {
    /* white-space: nowrap; */
    font-size: ${getFontSize(size)};
    font-weight: ${getFontWeight(size)}};
    width: 1fr;
    line-height: 1.5;
  }
`;

const removeMargin = css`
  margin: 0;
`;
