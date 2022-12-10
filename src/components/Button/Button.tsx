import { css } from '@emotion/css';
import '../../assets/styles/reset.css';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { wrapATag } from './wrapATag';

type TextProps = {
  childType: 'text';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

type LinkProps = {
  childType: 'link';
  link: string;
};

type Props = (TextProps | LinkProps) & {
  theme: Theme;
  text: string;
  size: 'normal' | 'small';
  style: 'default' | 'danger' | 'primary';
};

export function Button(props: Props) {
  const isLinkType = props.childType === 'link';
  const onClick = isLinkType ? () => undefined : props.onClick;

  const innerButton = (
    <button className={getClassStyle(props)} onClick={onClick}>
      <span>{props.text}</span>
    </button>
  );

  return isLinkType ? wrapATag(props.link, innerButton) : innerButton;
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
