import cx from 'classnames';
import { Text } from '../Text';

type Props = {
  children?: JSX.Element;
  text?: string;
  selected?: boolean;
};

export function Chip({ children, text, selected }: Props) {
  return (
    <div
      className={cx(
        'w-fit h-8 flex flex-row items-center rounded-lg select-none',
        text ? 'px-3' : 'px-2',
        selected
          ? 'bg-bg-secondary dark:bg-bg-secondary_dark'
          : 'bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark',
      )}
    >
      <div className={cx([{ hidden: !children }, 'mr-2'])}>{children}</div>
      {text && <Text text={text} size="body2" weight="medium" color={selected ? 'primary' : 'secondary'} />}
    </div>
  );
}
