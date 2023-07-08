import cx from 'classnames';
import { ReactElement } from 'react';
import { Icon } from '../Icon';
import { Text } from '../Text';

type Props = {
  /**
   * 칩에 들어가는 텍스트입니다.
   */
  text?: string;
  /**
   * 칩 선택 여부를 나타냅니다.
   */
  isSelected?: boolean;
  /**
   * 칩에 들어가는 아이콘입니다.
   */
  icon?: ReactElement;
};

export function Chip({ icon, text, isSelected }: Props) {
  return (
    <div
      className={cx(
        'group flex h-8 w-fit select-none flex-row items-center rounded-lg duration-200 ease-out active:scale-92',
        text ? 'px-3' : 'px-2',
        isSelected ? 'bg-bg-secondary' : 'bg-bg-primary_alpha_0',
      )}
    >
      {icon && (
        <Icon
          svg={icon}
          className={cx(
            'mr-2  transition-[fill] group-hover:fill-color-system_200',
            isSelected ? 'fill-text-primary' : 'fill-text-secondary',
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
