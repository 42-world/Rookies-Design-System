import cx from 'classnames';
import { ChevronRight } from '../../assets/icons';
import { useTheme } from '../../context';
import { Text } from '../Text';

interface Props {
  href: string;
  text: string;
}

export function GroupHeader({ href, text }: Props) {
  const theme = useTheme();

  return (
    <a
      className={cx('flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out', {
        'text-text-primary': theme === 'light',
        'text-text-primary_dark': theme === 'dark',
      })}
      href={href}
    >
      <Text text={text} size="heading3" weight="semibold" />
      <ChevronRight classname={cx('w-6', 'h-6')} />
    </a>
  );
}
