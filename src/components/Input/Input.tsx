import cx from 'classnames';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import { Text } from '../Text';
import { useControllableState } from '../../utils/useControllableState';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input의 크기
   * @default medium
   */
  size?: 'small' | 'medium';
  /**
   * Input 상단에 표시되는 라벨
   */
  label?: string;
  /**
   * Input의 값, undefined일 경우 컴포넌트 내부에서 관리
   **/
  value?: string;
  /**
   * uncontrolled 방식으로 사용할 때 Input의 기본값
   */
  defaultValue?: string;
  /**
   * Input 하단에 표시되는 서브 라벨
   */
  subLabel?: string;
  /**
   * Input의 스타일, outline일 경우 테두리가 있고 filled일 경우 테두리가 없음
   * @default outline
   **/
  variant?: 'outlined' | 'filled';
  /**
   * Input이 필수인지 여부, true일 경우 라벨 앞에 * 표시
   * @default false
   */
  required?: boolean;
  /**
   * Input에 에러가 있는지 여부, true일 경우 테두리가 빨간색으로 표시
   * @default false
   */
  hasError?: boolean;
  /**
   * Input 오른쪽에 추가되는 요소
   * @example
   * ```tsx
   * <Input
   *  rightAddon={<Button>전송</Button>}
   * />
   * ```
   */
  rightAddon?: ReactNode;
  /**
   * Input 값이 변경될 때 호출되는 이벤트
   * @param value 변경된 값
   * @example
   * ```tsx
   * <Input
   *  onValueChange={(value) => console.log(value)}
   * />
   * ```
   **/
  onValueChange?: (value: string) => void;
}

/**
 * `Input` 컴포넌트는 사용자의 입력을 받는 컴포넌트입니다.
 * @example
 * ```tsx
 * <Input
 *  label="이메일"
 *  placeholder="이메일을 입력해주세요."
 * />
 * ```
 */
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
      disabled,
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
      if (maxLength && e.target.value.length > maxLength) {
        return;
      }
      setValue(e.target.value);
    };

    return (
      <div
        className={cx('flex flex-col space-y-2', {
          'opacity-40': disabled,
        })}
      >
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
          className={cx('flex w-full items-center rounded-lg border border-solid px-4', {
            'border-border-primary bg-transparent focus-within:border-color-blue_200 dark:border-border-primary_dark':
              variant === 'outlined',
            'border-transparent bg-bg-secondary dark:bg-bg-secondary_dark': variant === 'filled',
            '!border-color-red focus-within:border-color-red': hasError,
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
                'cursor-not-allowed': disabled,
              },
            )}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            disabled={disabled}
            {...restProps}
          />
          {rightAddon && <span className="flex">{rightAddon}</span>}
        </div>
        {subLabel && <Text text={subLabel} size="body2" weight="regular" color={hasError ? 'red_200' : 'secondary'} />}
      </div>
    );
  },
);
