import cx from 'classnames';
import { useContext, ChangeEventHandler } from 'react';
import { RadioContext } from './RadioGroup';
import { Text } from '../Text';

export interface Props {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Radio({ label, selected, disabled, onChange }: Props) {
  const context = useContext(RadioContext);

  if (context) {
    selected = context.selectedLabel === label;
    onChange = context.onChange;
  }

  return (
    <label
      className={cx('group flex cursor-pointer flex-row items-center gap-2', {
        'cursor-not-allowed opacity-30': disabled,
      })}
    >
      <input type="radio" value={label} className="hidden" checked={selected} disabled={disabled} onChange={onChange} />
      <div
        className={cx(
          'flex h-5 w-5 flex-row items-center justify-center rounded-full border-2 border-border-primary duration-200',
          {
            'border-color-system_200': selected,
            'group-hover:border-color-system_200': !disabled,
          },
        )}
      >
        <div
          className={cx('h-[10px] w-[10px] rounded-full duration-200', {
            'bg-color-system_200': selected,
          })}
        />
      </div>
      <Text text={label} size="body2" weight="medium" />
    </label>
  );
}
