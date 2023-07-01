import cx from 'classnames';
import { ReactElement } from 'react';
import { Icon } from '../Icon';
import { Text } from '../Text';

type Props = {
  text?: string;
  isSelected?: boolean;
  icon?: ReactElement;
};

export function Chip({ icon, text, isSelected }: Props) {
  return (
    <div
      className={cx(
        'group flex h-8 w-fit select-none flex-row items-center rounded-lg duration-200 ease-out active:scale-92',
        text ? 'px-3' : 'px-2',
        isSelected
          ? 'bg-bg-secondary dark:bg-bg-secondary_dark'
          : 'bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark',
      )}
    >
      {icon && (
        <Icon
          svg={icon}
          className={cx(
            'mr-2  transition-[fill] group-hover:fill-color-system_200',
            isSelected
              ? 'fill-text-primary dark:fill-text-primary_dark'
              : 'fill-text-secondary dark:fill-text-secondary_dark',
          )}
        />
      )}
      {text && (
        <Text
          text={text}
          size="body2"
          weight="medium"
          color={isSelected ? 'primary' : 'secondary'}
          className="transition-colors group-hover:text-color-system_200"
        />
      )}
    </div>
  );
}
