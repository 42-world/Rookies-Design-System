import cx from 'classnames';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import { Text } from '../Text';
import { useControllableState } from './useControllableState';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 입력창에 붙는 라벨입니다.
   */
  label?: string;
  /**
   * 입력값입니다.
   */
  value?: string;
  /**
   * 입력창의 기본값입니다.
   */
  defaultValue?: string;
  /**
   * 하단에 출력되는 라벨입니다.
   */
  subLabel?: string;
  /**
   * 입력창의 종류를 결정하는 변수입니다.
   */
  variant?: 'outline' | 'filled';
  /**
   * 필수 입력 칸인지 결정하는 변수입니다.
   */
  required?: boolean;
  /**
   * 에러 발생 여부를 결정하는 변수입니다.
   */
  hasError?: boolean;
  /**
   * 입력창 우측에 붙는 컴포넌트입니다.
   */
  rightAddon?: ReactNode;
  /**
   * 값이 변경되었을 때의 동작을 정의하는 함수입니다.
   */
  onValueChange?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: idFromProps,
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
              variant === 'outline',
            'bg-bg-secondary dark:bg-bg-secondary_dark': variant === 'filled',
            'border-color-red focus-within:border-color-red': hasError,
          })}
        >
          <input
            ref={ref}
            id={idFromProps ?? id}
            className="h-[44px] w-full bg-transparent text-base font-normal leading-[1.5] text-text-primary placeholder:text-text-tertiary focus:outline-none dark:text-text-primary_dark dark:placeholder:text-text-tertiary_dark"
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
