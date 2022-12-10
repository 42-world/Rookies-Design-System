import { css } from '@emotion/css';
import { token } from '../common/token';
import { Theme } from '../common/type';

type Props = {
  theme: Theme;
  profileImg: any;
  username: string;
  createdAt: string;
};

export function Avatar({ theme, profileImg, username, createdAt }: Props) {
  return (
    <div className={ContainerStyle}>
      <img src={profileImg} className={profileStyle} />
      <div className={detailStyle(theme)}>
        <p>{username}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}

const detailStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 1px;
  white-space: nowrap; // framer에서 import 할 때 text 깨짐 방지

  & > * {
    margin: 0;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

    @font-face {
      font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
    }
  }

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
