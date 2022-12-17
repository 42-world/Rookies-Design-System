import { css } from '@emotion/css';
import React, { MouseEventHandler } from 'react';
import { CheckMarkIcon } from '../../assets/icons';
import { token } from '../../common/token';
import { Theme } from '../../common/type/theme';
React;

type Props = {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 체크박스 텍스트
   */
  text: string;

  /**
   * 이미 체크되어있는지 여부
   *
   * @default false
   */
  isChecked?: boolean;

  /**
   * 체크박스 클릭 이벤트
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * 체크박스 컴포넌트
 *
 * @author jiychoi
 */
export function Checkbox({ theme, text, isChecked = false, onClick }: Props) {
  return (
    <label className={checkboxWrapperStyle(theme)}>
      <button className={checkboxMarkStyle(theme)} onClick={onClick}>
        <CheckMarkIcon color={theme === 'light' ? 'grey_60_light' : 'grey_60_dark'} />
      </button>
      <span>{text}</span>
    </label>
  );
}

const checkboxWrapperStyle = (theme: Theme) => css`
  display: flex;
  justify-content: flex-start;
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
  }
`;

const checkboxButtonStyle = (theme: Theme) => css`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &:checked > div {
    border: 2px solid ${theme === 'light' ? token.color.grey_60_light : token.color.grey_60_dark};

    & svg {
      opacity: 1;
    }
  }
`;

const checkboxMarkStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 26px;
  border: 2px solid ${theme === 'light' ? token.color.grey_40_light : token.color.grey_40_dark};
  border-radius: 4px;

  > svg {
    width: 16px;
    height: 16px;
    opacity: 0;
  }
`;
