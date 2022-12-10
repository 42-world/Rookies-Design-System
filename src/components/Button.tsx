import { css } from '@emotion/css';
import * as React from 'react';
import { token } from '../common/token';

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
    background-color: ${theme === 'light' ? token.color.grey_10_light : token.color.grey_10_dark};
    border: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
    color: ${theme === 'light' ? token.color.grey_50_light : token.color.grey_50_dark};
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

    &:hover {
      background-color: ${theme === 'light' ? token.color.grey_20_light : token.color.grey_20_dark};
    }
  `;

  const dangerStyle = css`
    padding: ${size === 'normal' ? '8px 24px 8px 24px' : '4px 24px 4px 24px'};
    border-radius: 8px;
    background-color: ${theme === 'light' ? token.color.grey_10_light : token.color.grey_10_dark};
    border: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
    color: ${theme === 'light' ? token.color.grey_50_light : token.color.grey_50_dark};
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

    &:hover {
      background-color: ${theme === 'light' ? token.color.red_5_light : token.color.red_5_dark};
      color: ${token.color.red_10_light};
      border: 1px solid ${token.color.red_10_light};
    }
  `;

  const primaryStyle = css`
    padding: ${size === 'normal' ? '8px 24px 8px 24px' : '4px 24px 4px 24px'};
    border-radius: 8px;
    background-color: ${token.color.main_green_10};
    border: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
    color: ${token.color.grey_5_light};
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

    &:hover {
      background-color: ${token.color.main_green_20};
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
