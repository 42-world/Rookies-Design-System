import { css } from '@emotion/css';
import { token } from '../../common/token';
import { Theme } from '../../common/type';

type Props = {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 프로필 이미지
   */
  img: string;

  /**
   * 프로필 이름
   */
  name?: string; // TODO: optional 이 framer 에 존재하는걸까?

  /**
   * 부가 설명
   *
   * @example 1분 전
   */
  seconderyText?: string;
};

/**
 * 프로필 컴포넌트
 *
 * @author junseo
 */
export function Avatar({ theme, img, name, seconderyText }: Props) {
  return (
    <div className={ContainerStyle}>
      <img src={img} className={profileStyle} />
      <div className={detailStyle(theme)}>
        <p>{name}</p>
        <p>{seconderyText}</p>
      </div>
    </div>
  );
}

const detailStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 1px;
  white-space: nowrap; // framer에서 import 할 때 text 깨짐 방지

  & > p:first-of-type {
    font-size: 16px;
    color: ${theme === 'light' ? token.color.grey_70_light : token.color.grey_70_dark};
    font-weight: 500;
  }

  & > p:last-of-type {
    font-size: 12px;
    color: ${theme === 'light' ? token.color.grey_40_light : token.color.grey_40_dark};
  }
`;

const ContainerStyle = css`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
`;

const profileStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${token.color.grey_10_light};
  object-fit: cover;
`;
