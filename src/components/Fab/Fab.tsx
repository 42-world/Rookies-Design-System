import { css } from '@emotion/css';
import { MouseEventHandler } from 'react';
import { token } from '../../common/token';
import { PlusOutlineIcon } from '../../assets/icons/PlusOutlineIcon';

type Props = {
  /**
   * 활성화 여부
   */
  isActived?: boolean;

  /**
   * 클릭 이벤트
   */
  onClick: MouseEventHandler<HTMLDivElement>;
};

/**
 * Fab 컴포넌트
 *
 * @author gudong
 */
export function Fab({ isActived, onClick }: Props) {
  return (
    <div className={fabStyle(isActived)} onClick={onClick}>
      <PlusOutlineIcon color="grey_5_light" />
    </div>
  );
}

const fabStyle = (isActived?: boolean) => css`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  background-color: ${token.color.main_green_10};
  overflow: hidden;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${token.color.main_green_20};
  }

  ${isActived && activedStyle}
`;

const activedStyle = css`
  background-color: ${token.color.main_green_20};
`;
