import cx from 'classnames';

interface Props {
  src: string;
  alt?: string;
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
