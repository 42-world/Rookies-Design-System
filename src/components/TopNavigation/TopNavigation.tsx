import { css } from '@emotion/css';
import { BellIcon, MoonIcon, PlusIcon, SearchIcon, SunIcon } from '../../assets/icons';
import { token } from '../../common/token';
import { Theme, useTheme } from '../../context';
import { Text } from '../../typography/Text';

type User = {
  profileLink: string;
  profileImg: any;
};

type links = {
  homeLink: string;
  themeLink: string;
  searchLink: string;
  createLink: string;
  alertLink: string;
};

type Props = {
  links: links;
  user: User;
};

/**
 * 상단 네비게이션 컴포넌트
 *
 * @author jiychoi
 */
export function TopNavigation({ links, user }: Props) {
  const theme = useTheme();

  return (
    <div className={containerStyle(theme)}>
      <div className={wrapperStyle}>
        <a href={links.homeLink} className={logoStyle(theme)}>
          42world
        </a>
        <div className={iconListStyle}>
          <a href={links.themeLink} className={iconContainerStyle}>
            {theme === 'light' ? <SunIcon color="grey_50_light" /> : <MoonIcon color="grey_50_dark" />}

            <Text
              align="center"
              color="grey_50"
              size="caption"
              text={theme === 'light' ? '밝은 테마' : '어두운 테마'}
            />
          </a>
          <a href={links.searchLink} className={iconContainerStyle}>
            <SearchIcon color={theme === 'light' ? 'grey_50_light' : 'grey_50_dark'} />
            <Text align="center" color="grey_50" size="caption" text="검색" />
          </a>
          <a href={links.createLink} className={iconContainerStyle}>
            <PlusIcon color={theme === 'light' ? 'grey_50_light' : 'grey_50_dark'} />
            <Text align="center" color="grey_50" size="caption" text="글쓰기" />
          </a>
          <a href={links.alertLink} className={iconContainerStyle}>
            <BellIcon color={theme === 'light' ? 'grey_50_light' : 'grey_50_dark'} />
            <Text align="center" color="grey_50" size="caption" text="알림" />
          </a>
          <a href={user.profileLink} className={iconContainerStyle}>
            <img src={user.profileImg} className={profileStyle(theme)}></img>
            <Text align="center" color="grey_50" size="caption" text="나" />
          </a>
        </div>
      </div>
      <style>@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');</style>
    </div>
  );
}

const containerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
  padding: 8px 0px 8px 0px;
`;

const wrapperStyle = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  padding: 0px 20px 0px 20px;

  & a {
    text-decoration: none;
  }
`;

const logoStyle = (theme: Theme) => css`
  font-weight: 700;
  color: ${theme === 'light' ? token.color.grey_80_light : token.color.grey_80_dark};
  font-size: 24px;
  margin: 0;
  font-family: 'Raleway', serif;
  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
  @font-face {
    font-family: 'Raleway', serif;
    src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
  }

  @media (max-width: ${token.screenSize.TABLET_SIZE}) {
    font-size: 22px;
  }
`;

const profileStyle = (theme: Theme) => css`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${theme === 'light' ? token.color.grey_20_light : token.color.grey_20_dark};
`;

const iconContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 70px;
  text-decoration: none;

  @media (max-width: 700px) {
    width: fit-content;

    & p {
      display: none;
    }
  }
`;

const iconListStyle = css`
  display: flex;
  gap: 8px;

  @media (max-width: 700px) {
    gap: 20px;

    & a:nth-child(3) {
      display: none;
    }
  }
`;
