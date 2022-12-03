import { css } from '@emotion/css';
import * as React from 'react';
import { useState } from 'react';
import { token } from '../common/token';

type CheckboxProps = {
  text: string;
  isChecked: boolean;
};

type Props = {
  theme: 'light' | 'dark';
  direction: 'row' | 'column';
  list: CheckboxProps[];
};

export function Checkbox({ theme, direction, list }: Props) {
  const containerStyle = css`
    display: flex;
    flex-direction: ${direction};
    gap: 22px;
    justify-content: 'start';
    align-items: 'start';
    white-space: nowrap;
  `;

  const checkboxStyle = css`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${theme === 'light' ? token.color.grey_60_light : token.color.grey_60_dark};
    font-size: 14px;

    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

    @font-face {
      font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
    }

    & input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }

    & .checkmark {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 26px;
      width: 26px;
      border: 2px solid ${theme === 'light' ? token.color.grey_40_light : token.color.grey_40_dark};
      border-radius: 4px;
    }

    & .checkmarkSvg {
      width: 16px;
      height: 16px;
      opacity: 0;
    }

    & input:checked ~ .checkmark {
      border: 2px solid ${theme === 'light' ? token.color.grey_60_light : token.color.grey_60_dark};

      & svg {
        opacity: 1;
      }
    }
  `;

  return (
    <div className={containerStyle}>
      {list.map((item) => {
        const [checked, setChecked] = useState(item.isChecked);
        const handleCheck = () => {
          setChecked(!checked);
        };
        return (
          <label className={checkboxStyle}>
            <input type="checkbox" className="checked" checked={checked} />
            <span className="checkmark" onClick={handleCheck}>
              <svg
                className="checkmarkSvg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="24"
                height="24"
                color={theme === 'light' ? token.color.grey_60_light : token.color.grey_60_dark}
                // style="width: 100%; height: 100%; cursor: auto;"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <p onClick={handleCheck}>{item.text}</p>
          </label>
        );
      })}
    </div>
  );
}
