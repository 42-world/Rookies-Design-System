import { css } from '@emotion/css';
import { ChangeEvent, FocusEvent, forwardRef, InputHTMLAttributes, useCallback, useState } from 'react';
import '../../assets/styles/reset.css';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { useTheme } from '../../context';
import { Text } from '../../typography/Text';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style' | 'className'> {
  /**
   * onChangeless // TODO: 이름이 명확하지 않음
   *
   * @default false
   */
  onChangeless?: boolean;

  /**
   * 에러 메세지를 가지고 있는지 여부
   *
   * @default false
   */
  hasError?: boolean;

  /**
   * 에러 메세지
   */
  errorMessage?: string;
}

/**
 * Input
 *
 * @author hyeonkim
 */
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, hasError, errorMessage, onFocus, onBlur, onChange, value, onChangeless, children, ...rest }, ref) => {
    const theme = useTheme();
    const [isFocus, setIsFocus] = useState(false);
    const [input, setInput] = useState(value || '');

    const handleFocus = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);
        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        setIsFocus(false);
        if (onBlur) {
          onBlur(event);
        }
      },
      [onBlur],
    );

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event);
        setInput(event.target.value);
      },
      [onChange],
    );

    return (
      <div>
        <div className={containerStyle(theme, hasError)}>
          {placeholder && (
            <span className={placeholderStyle(theme, isFocus, !!input, hasError, onChangeless)}>{placeholder}</span>
          )}
          <div className={inputWrapperStyle(onChangeless)}>
            <input
              ref={ref}
              className={inputStyle(theme, hasError)}
              value={input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...rest}
            />
          </div>
        </div>
        {hasError && (
          <div className={errorWrapperStyle}>
            <Text size="caption" align="left" text={errorMessage ?? ''} color="red_10" />
          </div>
        )}
      </div>
    );
  },
);

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
  border: 1px solid ${theme === 'light' ? token.color.grey_40_light : token.color.grey_40_dark};
  &:focus-within {
    border-color: ${token.color.main_green_10};
  }
  transition: border-color 0.2s ease-in-out;
  ${isError &&
  css`
    color: ${token.color.red_20_light};
    border-color: ${token.color.red_10_light};
    &:focus-within {
      border-color: ${token.color.red_10_light};
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
  color: ${theme === 'light' ? token.color.grey_60_light : token.color.grey_60_dark};
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
    color: ${token.color.red_20_light};
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
    ? token.color.main_green_20
    : theme === 'light'
    ? token.color.grey_40_light
    : token.color.grey_40_dark};
  transform: ${isTyping ? 'none' : ' translateY(-50%)'};
  transform-origin: 50% 50% 0;
  font-size: ${isTyping ? '10px' : '14px'};
  line-height: ${isTyping ? '1.2' : '1.4'};
  transition-duration: 0.2s;
  transition-property: transform, color, top, line-height;
  ${isError &&
  css`
    color: ${token.color.red_20_light};
  `}
`;

const errorWrapperStyle = css`
  margin-top: 8px;
  margin-left: 15px;
`;
