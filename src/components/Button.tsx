import { css } from '@emotion/css';
import * as React from 'react';
import { tokens } from '../tokens';

type Props = {
  theme: 'light' | 'dark';
  text: string;
  link: string;
  size: 'normal' | 'small';
  type: 'default' | 'danger' | 'primary';
};

export function Button({ theme, text, link, size, type }: Props) {
  const defaultStyle = css`
    padding: ${size === 'normal' ? '8px 24px 8px 24px' : '4px 24px 4px 24px'};
    border-radius: 8px;
    background-color: ${theme === 'light' ? tokens.color.grey_10_light : tokens.color.grey_10_dark};
    border: 1px solid ${theme === 'light' ? tokens.color.grey_30_light : tokens.color.grey_30_dark};
    color: ${theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark};
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    white-space: nowrap;
    vertical-align: baseline;
    line-height: 1.875;

    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

    @font-face {
      font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
    }
  `;

  const dangerStyle = css`
    padding: ${size === 'normal' ? '8px 24px 8px 24px' : '4px 24px 4px 24px'};
    border-radius: 8px;
    background-color: ${theme === 'light' ? tokens.color.grey_10_light : tokens.color.grey_10_dark};
    border: 1px solid ${theme === 'light' ? tokens.color.grey_30_light : tokens.color.grey_30_dark};
    color: ${theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark};
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    white-space: nowrap;
    vertical-align: baseline;
    line-height: 1.875;

    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

    @font-face {
      font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
    }
  `;

  const primaryStyle = css`
    padding: ${size === 'normal' ? '8px 24px 8px 24px' : '4px 24px 4px 24px'};
    border-radius: 8px;
    background-color: ${tokens.color.main_green_10};
    border: 1px solid ${tokens.color.grey_30_light};
    color: ${tokens.color.grey_5_light};
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    white-space: nowrap;
    vertical-align: baseline;
    line-height: 1.875;

    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

    @font-face {
      font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
    }
  `;

  return (
    <a
      type="button"
      className={
        type === 'default'
          ? defaultStyle
          : type === 'danger'
          ? dangerStyle
          : type === 'primary'
          ? primaryStyle
          : defaultStyle
      }
      href={link}
    >
      {text}
    </a>
  );
}
