import cx from 'classnames';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import { Text } from '../Text';
import { useControllableState } from './useControllableState';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'small' | 'medium';
  value?: string;
  defaultValue?: string;
  subLabel?: string;
  variant?: 'outlined' | 'filled';
  required?: boolean;
  hasError?: boolean;
  rightAddon?: ReactNode;
  onValueChange?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: idFromProps,
      size = 'medium',
      label,
      value: valueFromProps,
      defaultValue,
      subLabel,
      variant,
      required,
      rightAddon,
      hasError,
      maxLength,
      onValueChange: onValueChangeFromProps,
      ...restProps
    },
    ref,
  ) => {
    const id = useId();
    const [value, setValue] = useControllableState({
      state: valueFromProps,
      defaultState: defaultValue ?? '',
      onChange: onValueChangeFromProps,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div className="flex flex-col space-y-2">
        <div className="flex w-full">
          {label && (
            <label
              htmlFor={idFromProps ?? id}
              className={cx(
                'text-sm font-normal leading-[1.8] text-text-secondary before:mr-1 dark:text-text-secondary_dark',
                {
                  'before:content-["*"]': required,
                },
              )}
            >
              {label}
            </label>
          )}
          {maxLength ? (
            <Text
              className="ml-auto"
              text={`(${value.length}/${maxLength})`}
              size="body2"
              weight="regular"
              color="secondary"
            />
          ) : null}
        </div>
        <div
          className={cx('flex w-full items-center rounded-lg px-4', {
            'border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200':
              variant === 'outlined',
            'bg-bg-secondary dark:bg-bg-secondary_dark': variant === 'filled',
            'border-color-red focus-within:border-color-red': hasError,
          })}
        >
          <input
            ref={ref}
            id={idFromProps ?? id}
            className={cx(
              'w-full bg-transparent text-base font-normal leading-[1.5] text-text-primary placeholder:text-text-tertiary focus:outline-none dark:text-text-primary_dark dark:placeholder:text-text-tertiary_dark',
              {
                'h-[44px]': size === 'medium',
                'h-[32px]': size === 'small',
              },
            )}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            {...restProps}
          />
          {rightAddon && <span className="flex">{rightAddon}</span>}
        </div>
        {subLabel && <Text text={subLabel} size="body2" weight="regular" color={hasError ? 'red_200' : 'secondary'} />}
      </div>
    );
  },
);
