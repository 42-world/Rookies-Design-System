import cx from 'classnames';
import { Icon } from '../Icon';
import { Text } from '../Text';

type Props = {
  icon?: React.FC<React.SVGAttributes<SVGElement>>;
  text?: string;
  isSelected?: boolean;
};

export function Chip({ icon, text, isSelected }: Props) {
  return (
    <div
      className={cx(
        'w-fit h-8 flex flex-row items-center rounded-lg select-none group',
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
