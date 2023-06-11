import cx from 'classnames';

interface Props {
  children: JSX.Element;
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

export function Icon({ children, size }: Props) {
  return (
    <div
      className={cx(
        { '[&>svg]:w-3 [&>svg]:h-3': size === 'xsmall' },
        { '[&>svg]:w-4 [&>svg]:h-4': size === 'small' },
        { '[&>svg]:w-5 [&>svg]:h-5': size === 'medium' },
        { '[&>svg]:w-6 [&>svg]:h-6': size === 'large' },
        { '[&>svg]:w-8 [&>svg]:h-8': size === 'xlarge' },
      )}
    >
      {children}
    </div>
  );
}
