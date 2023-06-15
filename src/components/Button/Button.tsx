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
  secondary: 'border-border-primary hover:border-color-blue_200',
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
        <Icon svg={icon} size="small" className={variant === 'primary' ? 'fill-color-white' : 'fill-text-secondary'} />
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
