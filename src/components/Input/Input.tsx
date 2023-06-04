import cx from 'classnames';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import { useTheme } from '../../context';
import { useControllableState } from './useControllableState';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  defaultValue?: string;
  subLabel?: string;
  variant: 'outline' | 'filled';
  hasError: boolean;
  rightAddon: ReactNode;
  onValueChange: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      id: idFromProps,
      label,
      value: valueFromProps,
      defaultValue,
      subLabel,
      variant,
      rightAddon,
      hasError,
      maxLength,
      onValueChange: onValueChangeFromProps,
      ...restProps
    },
    ref,
  ) => {
    const id = useId();
    const theme = useTheme();
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
              className={cx('before:content-["*"] before:mr-1 text-sm leading-[1.8]  font-normal', {
                'text-text-secondary': theme === 'light',
                'text-text-secondary_dark': theme === 'dark',
              })}
            >
              {label}
            </label>
          )}
          {maxLength && (
            <span
              className={cx('text-sm leading-[1.8] font-normal ml-auto', {
                'text-text-secondary': theme === 'light',
                'text-text-secondary_dark': theme === 'dark',
              })}
            >
              ({value.length}/{maxLength})
            </span>
          )}
        </div>
        <div
          className={cx('flex items-center w-full rounded-lg px-4', {
            'border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200':
              variant === 'outline',
            [theme === 'light' ? 'bg-bg-secondary' : 'bg-bg-secondary_dark']: variant === 'filled',
            'border-color-red focus-within:border-color-red': hasError,
          })}
        >
          <input
            ref={ref}
            id={idFromProps ?? id}
            className={cx('w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5]', {
              'text-text-primary placeholder:text-text-tertiary': theme === 'light',
              'text-text-primary_dark placeholder:text-text-tertiary_dark': theme === 'dark',
            })}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            {...restProps}
          />
          {rightAddon && <span className="flex">{rightAddon}</span>}
        </div>
        {subLabel && (
          <span
            className={cx('text-sm leading-[1.8] font-normal', {
              'text-text-secondary': theme === 'light',
              'text-text-secondary_dark': theme === 'dark',
              '!text-color-red': hasError,
            })}
          >
            {subLabel}
          </span>
        )}
      </div>
    );
  },
);
