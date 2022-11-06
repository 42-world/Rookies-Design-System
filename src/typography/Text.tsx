import { css } from '@emotion/css';
import * as React from 'react';
import { tokens } from '../tokens';

type Props = {
  theme: 'light' | 'dark';
  size: 'Header1' | 'Header2' | 'Header3' | 'Header4' | 'Body1' | 'Body2' | 'Body3' | 'Caption';
  color: 'grey_40' | 'grey_50' | 'grey_60' | 'grey_70' | 'main_green_10' | 'red_10';
  align: 'left' | 'center' | 'right';
  text: string;
};

export function Text({ theme, size, color, align, text }: Props) {
  const textStyle = css`
    display: flex;
    justify-content: ${align};

    & h1,
    h2,
    h3,
    h4,
    p {
      /* white-space: nowrap; */
      font-size: ${size === 'Header1'
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
        : '16px'};
      font-weight: ${size === 'Header1'
        ? 600
        : size === 'Header2'
        ? 600
        : size === 'Header3'
        ? 600
        : size === 'Header4'
        ? 600
        : size === 'Body1'
        ? 500
        : 500};
      width: 1fr;
      line-height: 1.25;
      margin: 0;
      font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

      @font-face {
        font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
          'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
      }
    }
  `;

  const COLOR_LIGHT =
    color === 'grey_40'
      ? tokens.color.grey_40_light
      : color === 'grey_50'
      ? tokens.color.grey_50_light
      : color === 'grey_60'
      ? tokens.color.grey_60_light
      : color === 'grey_70'
      ? tokens.color.grey_70_light
      : color === 'main_green_10'
      ? tokens.color.main_green_10
      : color === 'red_10'
      ? tokens.color.grey_50_light
      : tokens.color.grey_50_light;

  const COLOR_DARK =
    color === 'grey_40'
      ? tokens.color.grey_40_dark
      : color === 'grey_50'
      ? tokens.color.grey_50_dark
      : color === 'grey_60'
      ? tokens.color.grey_60_dark
      : color === 'grey_70'
      ? tokens.color.grey_70_dark
      : color === 'main_green_10'
      ? tokens.color.main_green_10
      : color === 'red_10'
      ? tokens.color.grey_50_dark
      : tokens.color.grey_50_light;

  return (
    <div className={textStyle} style={{ color: theme === 'light' ? COLOR_LIGHT : COLOR_DARK }}>
      {size === 'Header1' ? (
        <h1>{text}</h1>
      ) : size === 'Header2' ? (
        <h2>{text}</h2>
      ) : size === 'Header3' ? (
        <h3>{text}</h3>
      ) : size === 'Header4' ? (
        <h4>{text}</h4>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}
