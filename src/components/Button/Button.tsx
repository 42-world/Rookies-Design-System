import cx from 'classnames';
import { ButtonHTMLAttributes, FC, SVGAttributes } from 'react';
import { Icon } from '../Icon';
import { Text } from '../Text';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps {
  variant?: ButtonVariant;
  text?: string;
  icon?: FC<SVGAttributes<SVGSVGElement>>;
}

type Props = ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

const variantStyles = {
  primary: 'bg-color-blue_200 border-0 hover:bg-color-blue_300',
  secondary:
    'border-border-primary dark:border-border-primary_dark hover:border-color-blue_200 hover:dark:border-color-blue_200',
  text: 'border-0',
};

export function Button({ text, variant = 'primary', icon, ...restProps }: Props) {
  return (
    <button
      className={cx(
        `group h-8 flex flex-row items-center gap-2 px-3 rounded-2xl border border-solid ${variantStyles[variant]}`,
        {
          'px-0': !icon,
        },
      )}
      {...restProps}
    >
      {icon && (
        <Icon
          svg={icon}
          size="small"
          className={cx(
            variant === 'primary' ? 'fill-color-white' : 'fill-text-secondary dark:fill-text-secondary_dark',
            {
              'group-hover:fill-color-blue_200': variant !== 'primary',
            },
          )}
        />
      )}
      {text && (
        <Text
          text={text}
          size="body2"
          weight="medium"
          color={variant === 'primary' ? 'white' : 'secondary'}
          className={cx({
            'group-hover:text-color-blue_200': variant !== 'primary',
          })}
        />
      )}
    </button>
  );
}
