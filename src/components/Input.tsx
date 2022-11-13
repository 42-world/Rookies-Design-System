import { css } from '@emotion/css';
import * as React from 'react';
import { tokens } from '../tokens';
import { Text } from '../typography/Text';

type Theme = 'light' | 'dark';

type CustomProps = {
  value: string;
  theme: Theme;
  onChangeless: boolean;
  isError?: boolean;
  errorMessage?: string;
};

type Props = React.InputHTMLAttributes<HTMLInputElement> & CustomProps;

export function Input({
  theme,
  value,
  placeholder,
  isError,
  errorMessage,
  onFocus,
  onBlur,
  onChangeless,
  ...rest
}: Props) {
  const [isFocus, setIsFocus] = React.useState(false);

  const handleFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    if (onFocus) {
      onFocus(event);
    }
  }, []);

  const handleBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    if (onBlur) {
      onBlur(event);
    }
  }, []);

  return (
    <div className={containerStyle(theme, isError)}>
      <span className={placeholderStyle(theme, isFocus, value.length > 0, isError, onChangeless)}>{placeholder}</span>
      <div className={inputWrapperStyle(onChangeless)}>
        <input
          className={inputStyle(theme, isError)}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </div>
      <div className={errorWrapperStyle}>
        {isError && <Text theme={theme} size="Caption" align="left" text={errorMessage ?? ''} color="red_10" />}
      </div>
    </div>
  );
}

const containerStyle = (theme: Theme, isError?: boolean) => css`
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
  border: 1px solid ${theme === 'light' ? tokens.color.grey_40_light : tokens.color.grey_40_dark};
  &:focus-within {
    border-color: ${tokens.color.main_green_10};
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
  ${isError &&
  css`
    color: ${tokens.color.red_20_light};
    border-color: ${tokens.color.red_10_light};
    &:focus-within {
      border-color: ${tokens.color.red_10_light};
    }
  `}
`;

const inputWrapperStyle = (onChangeless?: boolean) => css`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex: 0 0 auto;
  height: ${onChangeless ? '100%' : '34px'};
  z-index: 2;
`;

const inputStyle = (theme: Theme, isError?: boolean) => css`
  color: ${theme === 'light' ? tokens.color.grey_60_light : tokens.color.grey_60_dark};
  font-size: 16px;
  caret-color: rgb(255, 255, 255);
  font-family: 'Pretendard Medium', serif;
  font-weight: 100;
  appearance: none;
  border: none;
  border-radius: unset;
  margin: unset;
  outline: unset;
  box-sizing: border-box;
  background: unset;
  width: 100%;
  height: 100%;
  padding: 15px;
  ${isError &&
  css`
    color: ${tokens.color.red_20_light};
  `};
`;

const placeholderStyle = (
  theme: Theme,
  isFocus: boolean,
  isTyping: boolean,
  isError?: boolean,
  onChangeless?: boolean,
) => css`
  display: ${onChangeless && isTyping ? 'none' : 'block'};
  position: absolute;
  top: ${isTyping ? '8px' : '50%'};
  left: 15px;
  flex-shrink: 0;
  width: auto;
  height: auto;
  white-space: pre;
  z-index: 1;
  font-family: 'Pretendard Regular', serif;
  color: ${isFocus && isTyping
    ? tokens.color.main_green_20
    : theme === 'light'
    ? tokens.color.grey_40_light
    : tokens.color.grey_40_dark};
  transform: ${isTyping ? 'none' : ' translateY(-50%)'};
  transform-origin: 50% 50% 0;
  font-size: ${isTyping ? '10px' : '14px'};
  line-height: ${isTyping ? '1.2' : '1.4'};
  transition-duration: 0.2s;
  transition-property: transform, color, top, line-height;
  ${isError &&
  css`
    color: ${tokens.color.red_20_light};
  `}
`;

const errorWrapperStyle = css`
  position: absolute;
  top: 60px;
  left: 15px;
`;
