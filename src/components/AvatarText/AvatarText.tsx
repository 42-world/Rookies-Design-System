import cx from 'classnames';
import { Avatar } from '../Avatar';
import { Text } from '../Text';

interface Props {
  src: string;
  alt?: string;
  size?: '40px' | '64px';
  mainText: string;
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
