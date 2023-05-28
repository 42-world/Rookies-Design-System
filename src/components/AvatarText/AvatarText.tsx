import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { useTheme } from '../../context';

type Props = {
  /**
   * 프로필 이미지
   */
  img: string;

  /**
   * 프로필 이름
   */
  name: string;

  /**
   * 부가 설명
   *
   * @example 1분 전
   */
  secondaryText?: string;
};

/**
 * 프로필 컴포넌트
 *
 * @author junseo
 */
export function AvatarText({ img, name, secondaryText }: Props) {
  const theme = useTheme();

  return (
    <div>
      나 잘래 "{name}" and 졸려 "{theme}" 와이차 신나하다..222
    </div>
  );

  return (
    <div style={ContainerStyle}>
      hihihi
      <img src={img} style={profileStyle} />
      <div style={detailStyle(theme)}>
        <p>{name}</p>
        <p>{secondaryText}</p>
      </div>
    </div>
  );
}

const detailStyle = (theme: Theme) => ({
  display: 'flex',
  'flex-direction': 'column',
  gap: '1px',
  'white-space': ' nowrap', // framer에서 import 할 때 text 깨짐 방지

  '& > p:first-of-type': {
    'font-size': '16px',
    color: `${theme === 'light' ? token.color.grey_70_light : token.color.grey_70_dark}`,
    'font-weight': '500',
  },

  '& > p:last-of-type': {
    'font-size': '12px',
    color: `${theme === 'light' ? token.color.grey_40_light : token.color.grey_40_dark}`,
  },
});

const ContainerStyle = {
  display: 'flex',
  gap: '12px',
  'justify-content': 'flex-start',
  'align-items': 'center',
};

const profileStyle = {
  width: '40px',
  height: '40px',
  'border-radius': '20px',
  'background-color': '${token.color.grey_10_light}',
  'object-fit': 'cover',
};
