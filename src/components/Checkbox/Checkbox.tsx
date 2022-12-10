import { css } from '@emotion/css';
import { useCallback, useState } from 'react';
import { CheckMarkIcon } from '../../assets/icons';
import { token } from '../../common/token';
import { Theme } from '../../common/type/theme';

type CheckboxProps = {
  text: string;
  isChecked: boolean;
};

type Props = {
  theme: Theme;
  direction: Direction;
  list: CheckboxProps[];
};

type InnerProps = {
  theme: Theme;
  item: CheckboxProps;
};

type Direction = 'row' | 'column';

export function Checkbox({ theme, direction, list }: Props) {
  return (
    <div className={containerStyle(direction)}>
      {list.map((item) => (
        <CheckboxInnerElement theme={theme} item={item} />
      ))}
    </div>
  );
}

function CheckboxInnerElement({ theme, item }: InnerProps) {
  const [checked, setChecked] = useState(item.isChecked);

  const handleCheck = useCallback(() => {
    console.log(checked);
    setChecked((prevState: boolean) => !prevState);
  }, [checked]);

  return (
    <div className={checkboxWrapperStyle(theme)}>
      <button className={checkboxButtonStyle(theme)} onClick={handleCheck}>
        <CheckMarkIcon color={theme === 'light' ? 'grey_60_light' : 'grey_60_dark'} />
      </button>
      <p onClick={handleCheck}>{item.text}</p>
    </div>
  );
}

const containerStyle = (direction: Direction) => css`
  display: flex;
  flex-direction: ${direction};
  gap: 22px;
  justify-content: 'start';
  align-items: 'start';
  white-space: nowrap;
`;

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

  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', sans-serif;

  @font-face {
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
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
