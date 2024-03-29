import { ChangeEvent } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import CheckIcon from '@material-design-icons/svg/outlined/check.svg';

import { Text } from '../Text';

interface Props {
  /**
   * 체크박스의 라벨에 들어가는 텍스트입니다.
   */
  labelText: string;
  /**
   * 체크박스의 체크 여부입니다.
   */
  checked?: boolean;
  /**
   * 체크박스 활성화 여부입니다.
   */
  disabled?: boolean;
  /**
   * 체크 여부 변경 시 호출되는 함수입니다.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({ labelText, checked = false, disabled = false, onChange }: Props) {
  return (
    <label className={cx('flex flex-row items-center  gap-2', { 'opacity-[0.3]': disabled })}>
      <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
      <div
        className={cx(
          ' flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-border-primary transition-colors duration-200 hover:border-color-system_200 dark:border-border-primary_dark dark:hover:border-color-system_200',
          {
            ['border-color-system_200 bg-color-system_200  dark:border-color-system_200']: checked,
          },
        )}
      >
        <CheckIcon
          viewBox="0 0 24 24"
          className={twMerge(
            cx('h-4 w-4 fill-white opacity-100 transition-opacity duration-200', { 'opacity-0': !checked }),
          )}
        />
      </div>
      <Text text={labelText} size="body2" weight="regular" />
    </label>
  );
}
