import cx from 'classnames';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../Icon';
import { Text } from '../Text';

type ButtonVariant =
  | {
      /**
       * 버튼의 유형입니다.
       */
      variant: 'text';
      /**
       * 텍스트 버튼이 활성화되었는지 여부입니다.
       */
      activated?: boolean;
    }
  | {
      /**
       * 버튼의 유형입니다.
       */
      variant: 'primary';
    }
  | {
      /**
       * 버튼의 유형입니다.
       */
      variant: 'secondary';
    };

type ButtonProps = Partial<ButtonVariant> & {
  /**
   * 버튼에 들어가는 텍스트입니다.
   */
  text?: string;
  /**
   * 버튼에 들어가는 아이콘입니다.
   */
  icon?: ReactElement;
};

type Props = ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

const variantStyles: Record<ButtonVariant['variant'], string> = {
  primary: 'bg-color-system_200 border-0 enabled:hover:bg-color-system_300',
  secondary:
    'border-border-primary dark:border-border-primary_dark enabled:hover:border-color-system_200 enabled:hover:dark:border-color-system_200',
  text: 'border-0',
};

export function Button(props: Props) {
  const { text, disabled, icon, className, ...restProps } = props;

  const variant = props.variant ?? 'primary';
  const activated = props.variant === 'text' && props.activated;

  return (
    <button
      className={twMerge(
        `group flex h-8 flex-row items-center gap-2 rounded-2xl border border-solid duration-200 enabled:transition-all enabled:active:scale-92 ${variantStyles[variant]}`,
        icon && !text ? 'px-2' : 'px-3',
        disabled && 'cursor-not-allowed opacity-30',
        className,
      )}
      disabled={disabled}
      {...restProps}
    >
      {icon && (
        <Icon
          svg={icon}
          size="small"
          className={twMerge(
            'transition-colors duration-200',
            variant === 'primary'
              ? 'fill-color-white'
              : 'fill-text-secondary group-enabled:group-hover:fill-color-system_200 dark:fill-text-secondary_dark',
            activated && 'fill-color-system_200 dark:fill-color-system_200',
          )}
        />
      )}
      {text && (
        <Text
          text={text}
          size="body2"
          weight="medium"
          color={variant === 'primary' ? 'white' : 'secondary'}
          className={cx('transition-colors duration-200', {
            'group-enabled:group-hover:text-color-system_200': variant !== 'primary',
            'text-color-system_200 dark:text-color-system_200': activated,
          })}
        />
      )}
    </button>
  );
}
