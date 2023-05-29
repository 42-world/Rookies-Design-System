import { css } from '@emotion/css';
import { MouseEventHandler } from 'react';
import { token } from '../../common/token';

type Props = {
  /**
   * 텍스트
   */
  text: string;

  /**
   * 선택 여부
   */
  isSelected: boolean;

  /**
   * 클릭 이벤트
   */
  onClick: MouseEventHandler<HTMLDivElement>;
};

/**
 * Chip 컴포넌트
 *
 * @author ycha
 */
export function Chip({ text, isSelected, onClick }: Props) {
  return (
    <div className={isSelected ? selectedStyle : unSelectedStyle} onClick={onClick}>
      <p className={isSelected ? selectedTextStyle : unSelectedTextStyle}>{text}</p>
    </div>
  );
}

const unSelectedStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 18px 6px 18px;
  align-content: center;
  border-radius: 8px;
  border: 1px solid ${token.color.grey_20_dark};
  background-color: #fff;
`;

const unSelectedTextStyle = css`
  font-size: 16px;
  margin: 0;
`;

const selectedTextStyle = css`
  color: var(--grey_5_light, #fefefe);
  font-size: 16px;
  margin: 0;
`;

const selectedStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 18px 6px 18px;
  background-color: var(--main_green_10, #41c464);
  overflow: hidden;
  align-content: center;
  gap: 10;
  border-radius: 8px;
`;
