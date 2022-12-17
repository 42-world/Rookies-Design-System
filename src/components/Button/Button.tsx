import { css } from '@emotion/css';
import React, { MouseEventHandler } from 'react';
import '../../assets/styles/reset.css';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { wrapLinkTag } from './wrapLinkTag';
React;

type TextProps = {
  type: 'text';

  /**
   * 버튼 클릭 이벤트
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type LinkProps = {
  type: 'link';

  /**
   * 링크 주소
   */
  link: string;
};

type Props = (TextProps | LinkProps) & {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 버튼 텍스트
   */
  text: string;

  /**
   * 버튼 사이즈
   */
  size: 'normal' | 'small';

  /**
   * 버튼 스타일
   */
  style: 'default' | 'danger' | 'primary';
};

/**
 * 버튼 컴포넌트
 *
 * @author juchoi
 */
export function Button(props: Props) {
  const isTextButton = props.type === 'text';
  const onClick = isTextButton ? props.onClick : undefined;

  const innerButton = (
    <button className={getClassStyle(props)} onClick={onClick}>
      <span>{props.text}</span>
    </button>
  );

  return isTextButton ? innerButton : wrapLinkTag(props.link, innerButton);
}

const getClassStyle = ({ style, theme, size }: Pick<Props, 'style' | 'theme' | 'size'>) =>
  ({
    default: defaultStyle({ theme, size }),
    danger: dangerStyle({ theme, size }),
    primary: primaryStyle({ theme, size }),
  }[style]);

const defaultStyle = ({ theme, size }: Pick<Props, 'theme' | 'size'>) => css`
  padding: ${size === 'normal' ? '8px 24px 8px 24px' : '4px 24px 4px 24px'};
  border-radius: 8px;
  background-color: ${theme === 'light' ? token.color.grey_10_light : token.color.grey_10_dark};
  border: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
  color: ${theme === 'light' ? token.color.grey_50_light : token.color.grey_50_dark};
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: baseline;
  line-height: 1.875;
  &:hover {
    background-color: ${theme === 'light' ? token.color.grey_20_light : token.color.grey_20_dark};
  }
`;

const dangerStyle = ({ theme, size }: Pick<Props, 'theme' | 'size'>) => css`
  padding: ${size === 'normal' ? '8px 24px 8px 24px' : '4px 24px 4px 24px'};
  border-radius: 8px;
  background-color: ${theme === 'light' ? token.color.grey_10_light : token.color.grey_10_dark};
  border: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
  color: ${theme === 'light' ? token.color.grey_50_light : token.color.grey_50_dark};
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: baseline;
  line-height: 1.875;
  &:hover {
    background-color: ${theme === 'light' ? token.color.red_5_light : token.color.red_5_dark};
    color: ${token.color.red_10_light};
    border: 1px solid ${token.color.red_10_light};
  }
`;

const primaryStyle = ({ theme, size }: Pick<Props, 'theme' | 'size'>) => css`
  padding: ${size === 'normal' ? '8px 24px 8px 24px' : '4px 24px 4px 24px'};
  border-radius: 8px;
  background-color: ${token.color.main_green_10};
  border: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
  color: ${token.color.grey_5_light};
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: baseline;
  line-height: 1.875;
  &:hover {
    background-color: ${token.color.main_green_20};
  }
`;
