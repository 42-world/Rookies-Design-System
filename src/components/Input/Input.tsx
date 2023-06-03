import cx from 'classnames';
import { useTheme } from '../../context';
import { forwardRef, useState, useId, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  defaultValue?: string;
  subLabel?: string;
  variant: 'outline' | 'filled';
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ id: idFromProps, label, value: valueFromProps, defaultValue, subLabel, variant, ...restProps }, ref) => {
    const id = useId();
    const [value, setValue] = useState(valueFromProps ?? defaultValue ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div className="flex flex-col space-y-2">
        {label && <label htmlFor={idFromProps ?? id}>{label}</label>}
        <div className="w-full px-4 rounded-lg border border-border-primary">
          <input ref={ref} id={idFromProps ?? id} value={value} onChange={handleChange} {...restProps} />
        </div>
        {subLabel && <span className="text-sm leading-[1.8] text-text-secondary">{subLabel}</span>}
      </div>
    );
  },
);
