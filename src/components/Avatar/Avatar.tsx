import cx from 'classnames';

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
}

export function Avatar({ src, alt = '', size = '40px' }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={cx('rounded-full object-cover', { 'h-10 w-10': size === '40px', 'h-16 w-16': size === '64px' })}
    />
  );
}
