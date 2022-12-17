import { css } from '@emotion/css';
import { token } from '../../common/token';
import { Theme } from '../../common/type/theme';

type ListProps = {
  text: string;
  link: string;
};

type Props = {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 선택된 인덱스
   */
  selectedIndex: number;

  /**
   * 리스트
   */
  list: ListProps[];

  /**
   * selector 클릭 이벤트
   */
  onClick: React.MouseEventHandler<SVGTextElement>;
};

/**
 * 정렬셀렉터 컴포넌트
 *
 *  @author sham
 */
export const SortSelector = ({ list, theme, selectedIndex, onClick }: Props) => {
  return (
    <div className={containerStyle}>
      {list.map((item, index) => {
        return (
          <div className="item">
            <text className={beforeItem(selectedIndex === index)}>•</text>
            <text className={itemText(selectedIndex === index)} onClick={onClick}>
              {item.text}
            </text>
          </div>
        );
      })}
    </div>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: row;
`;

const beforeItem = (isFocus: boolean) => css`
  color: ${isFocus ? token.color.main_green_10 : token.color.grey_40_light};
  margin: 4px;
`;

const itemText = (isFocus: boolean) => css`
  color: ${isFocus ? token.color.grey_40_light : token.color.grey_40_dark};
`;
