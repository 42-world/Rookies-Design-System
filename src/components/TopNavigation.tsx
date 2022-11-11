import { css } from '@emotion/css';
import * as React from 'react';
import { tokens } from '../tokens';
import { Text } from '../typography/Text';

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
  theme: 'light' | 'dark';
  links: links;
  user: User;
};

export function TopNavigation({ theme, links, user }: Props) {
  const containerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-bottom: 1px solid ${theme === 'light' ? tokens.color.grey_30_light : tokens.color.grey_30_dark};
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

  const logoStyle = css`
    font-weight: 700;
    color: ${theme === 'light' ? tokens.color.grey_80_light : tokens.color.grey_80_dark};
    font-size: 24px;
    margin: 0;
    font-family: 'Raleway', serif;
    src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
    @font-face {
      font-family: 'Raleway', serif;
      src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
    }

    @media (max-width: 700px) {
      font-size: 22px;
    }
  `;

  const profileStyle = css`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: ${theme === 'light' ? tokens.color.grey_20_light : tokens.color.grey_20_dark};
  `;
  return (
    <div className={containerStyle}>
      <div className={wrapperStyle}>
        <a href={links.homeLink} className={logoStyle}>
          42world
        </a>
        <div className={iconListStyle}>
          <a href={links.themeLink} className={iconContainerStyle}>
            {theme === 'light' ? (
              <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color={tokens.color.grey_50_light}>
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color={tokens.color.grey_50_dark}>
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}

            <Text
              align="center"
              color="grey_50"
              size="Caption"
              text={theme === 'light' ? '밝은 테마' : '어두운 테마'}
              theme={theme}
            />
          </a>
          <a href={links.searchLink} className={iconContainerStyle}>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="24"
              height="24"
              color={theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark}
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <Text align="center" color="grey_50" size="Caption" text="검색" theme={theme} />
          </a>
          <a href={links.createLink} className={iconContainerStyle}>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="24"
              height="24"
              color={theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              ></path>
            </svg>
            <Text align="center" color="grey_50" size="Caption" text="글쓰기" theme={theme} />
          </a>
          <a href={links.alertLink} className={iconContainerStyle}>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="24"
              height="24"
              color={theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark}
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
            <Text align="center" color="grey_50" size="Caption" text="알림" theme={theme} />
          </a>
          <a href={user.profileLink} className={iconContainerStyle}>
            <img src={user.profileImg} className={profileStyle}></img>
            <Text align="center" color="grey_50" size="Caption" text="나" theme={theme} />
          </a>
        </div>
      </div>
      <style>@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');</style>
    </div>
  );
}

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
