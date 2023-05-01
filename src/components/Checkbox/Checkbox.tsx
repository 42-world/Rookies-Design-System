import { css } from '@emotion/css';
import { MouseEventHandler } from 'react';
import { CheckMarkIcon } from '../../assets/icons/CheckMarkIcon';
import { token } from '../../common/token';
import { Theme } from '../../common/type/theme';
import { useTheme } from '../../context';

type Props = {
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
export function Checkbox({ text = '', isChecked = false, onClick }: Props) {
  const theme = useTheme();
  const buttonBorderColor = {
    light: token.color.grey_40_light,
    dark: token.color.grey_40_dark,
    checked: token.color.main_green_10,
  }[isChecked ? 'checked' : theme];

  const textColor = {
    light: token.color.grey_60_light,
    dark: token.color.grey_60_dark,
    checked: token.color.main_green_10,
  }[isChecked ? 'checked' : theme];

  return (
    <label className={checkboxWrapperStyle(theme)}>
      <button className={checkboxMarkStyle(buttonBorderColor)} onClick={onClick}>
        <CheckMarkIcon className={checkboxIconStyle(isChecked)} color={'main_green_10'} />
      </button>
      <input type="checkbox" className={checkboxInputStyle} checked={isChecked} />
      <span className={checkboxSpanStyle(textColor)}>{text}</span>
    </label>
  );
}

const checkboxWrapperStyle = (theme: Theme) =>
  css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    gap: 12,
    color: theme === 'light' ? token.color.grey_60_light : token.color.grey_60_dark,
    overflow: 'hidden',
  });

const checkboxMarkStyle = (buttonBorderColor: string) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    border: `2px solid ${buttonBorderColor}`,
    borderRadius: 4,
    backgroundColor: 'transparent',
  });

const checkboxIconStyle = (isChecked: boolean) =>
  css({
    display: isChecked ? 'block' : 'none',
    width: '100%',
    height: '100%',
    aspectRatio: '1 / 1',
  });

const checkboxInputStyle = css({
  opacity: 0,
  width: 16,
  height: 16,
});

const checkboxSpanStyle = (textColor: string) =>
  css({
    fontSize: 14,
    color: textColor,
    whiteSpace: 'pre',
    lineHeight: 1.2,
  });
