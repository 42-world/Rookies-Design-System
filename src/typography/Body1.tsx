import { css } from '@emotion/css';
import * as React from 'react';
import { tokens } from '../tokens';

type Props = {
  theme: 'light' | 'dark';
  color: any;
  text: string;
};

export function Body1({ theme, text }: Props) {
  const textStyle = css`
    display: flex;

    & p {
      /* white-space: nowrap; */
      font-size: 18px;
      font-weight: 500;
      width: 1fr;
      line-height: 1.25rem;
      color: ${theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark};
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

  return (
    <div className={textStyle}>
      <p>{text}</p>
    </div>
  );
}
