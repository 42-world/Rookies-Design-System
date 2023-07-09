import cx from 'classnames';
import { Avatar } from '../Avatar';
import { Text } from '../Text';

interface Props {
  /**
   * 사진의 주소입니다.
   */
  src: string;
  /**
   * 사진의 대체 텍스트입니다.
   */
  alt?: string;
  /**
   * 사진의 가로 크기입니다.
   */
  size?: '40px' | '64px';
  /**
   * 본문입니다. 대개 사용자의 이름을 나타냅니다.
   */
  mainText: string;
  /**
   * 부가적인 설명이 들어갑니다.
   */
  subText?: string;
}

export function AvatarText({ src, alt = '', size = '40px', mainText, subText }: Props) {
  return (
    <div className={cx('flex flex-row', { 'gap-3': size === '40px', 'gap-4': size === '64px' })}>
      <Avatar src={src} alt={alt} size={size} />
      <div className="flex flex-col items-start justify-center">
        <Text text={mainText} size={size === '64px' ? 'heading3' : 'body2'} weight="medium" />
        {subText && <Text text={subText} size={size === '64px' ? 'body2' : 'small'} color="secondary" />}
      </div>
    </div>
  );
}
