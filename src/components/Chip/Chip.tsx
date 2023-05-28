import cx from 'classnames';
import { useTheme } from '../../context';

type Props = {
  children?: JSX.Element;
  text?: string;
  selected?: boolean;
};

export function Chip({ children, text, selected }: Props) {
  const theme = useTheme();

  return (
    <div
      className={cx({
        'w-fit h-8 flex flex-row items-center border-2 rounded-lg border-amber-400 select-none': true,
        [text ? 'px-3' : 'px-2']: true,
        'bg-bg-secondary': selected,
        'bg-bg-secondary_dark': selected && theme === 'dark',
      })}
    >
      <div className={cx([{ hidden: !children }, 'mr-2'])}>{children}</div>
      <span
        className={cx({
          [selected ? 'text-text-primary_dark' : 'text-text-secondary_dark']: theme === 'dark',
          [selected ? 'text-text-primary' : 'text-text-secondary']: theme === 'light',
          'text-sm font-medium': true,
        })}
      >
        {text}
      </span>
    </div>
  );
}
