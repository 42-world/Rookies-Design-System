import { css } from '@emotion/css';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { tokens } from '../tokens';

interface CustomProps {
  isError?: boolean;
  errorMessage?: string;
}

type Props = React.InputHTMLAttributes<HTMLInputElement> & CustomProps;

export function Input({ placeholder, isError, errorMessage }: Props) {
  const [value, setValue] = React.useState('');
  const [isFocus, setIsFocus] = React.useState(false);

  const handleFocus = React.useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleBlur = React.useCallback(() => {
    setIsFocus(false);
  }, []);

  const handleChangeValue = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className={containerStyle}>
      <span className={placeholderStyle(isFocus, value.length > 0)}>{placeholder}</span>
      <div className={inputWrapperStyle}>
        <input
          className={inputStyle}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChangeValue}
        />
      </div>
      {isError && <span>{errorMessage}</span>}
    </div>
  );
}

const containerStyle = css`
  box-sizing: border-box;
  display: flex;
  flex: 1 0 0;
  height: 48px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px 0 15px;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0;
  border-radius: 8px;
  border: 1px solid ${tokens.color.grey_40_light}; // TODO: light, dark 테마에 따라 다르게 설정
  &:focus-within {
    border-color: ${tokens.color.main_green_10}; // TODO: light, dark 테마에 따라 다르게 설정
  }
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', sans-serif;
  @font-face {
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
  }
  transition: border-color 0.2s ease-in-out;
`;

const inputWrapperStyle = css`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex: 0 0 auto;
  height: 34px;
`;

const inputStyle = css`
  color: ${tokens.color.grey_60_light};
  font-size: 16px;
  caret-color: rgb(255, 255, 255);
  font-family: 'Pretendard Regular', serif;
  appearance: none;
  border: none;
  border-radius: unset;
  margin: unset;
  outline: unset;
  box-sizing: border-box;
  background: unset;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const placeholderStyle = (isFocus: boolean, isTyping: boolean) => css`
  position: absolute;
  left: 15px;
  top: ${isTyping ? '8px' : '50%'};
  transform-origin: 50% 50% 0;
  flex-shrink: 0;
  width: auto;
  height: auto;
  white-space: pre;
  z-index: 1;
  font-family: 'Pretendard Regular', serif;
  color: ${isFocus && isTyping ? tokens.color.main_green_20 : tokens.color.grey_40_light};
  transform: ${isTyping ? 'none' : ' translateY(-50%)'};
  font-size: ${isTyping ? '10px' : '14px'};
  line-height: ${isTyping ? '1.2' : '1.4'};
  transition: all 0.2s ease-in-out;
`;
