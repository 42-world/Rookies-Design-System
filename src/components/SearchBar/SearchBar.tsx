import { InputHTMLAttributes } from 'react';
import { Icon } from '../Icon';
import Search from '@material-design-icons/svg/filled/search.svg';

interface InputProps {
  variant: 'primary' | 'solid';
}

type Props = InputProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputProps>;

export function SearchBar({ variant, value, placeholder, onChange }: Props) {
  return (
    <div className="relative flex h-10 w-full flex-row items-center overflow-hidden rounded-[20px] bg-gradient-to-r from-green-200 to-color-system_100 p-0.5">
      <input
        value={value}
        placeholder={placeholder}
        className="h-full flex-1 rounded-[20px] pl-4 text-sm font-medium leading-6 placeholder:text-text-tertiary dark:text-text-tertiary_dark"
        onChange={onChange}
      />
      <Icon svg={Search} />
    </div>
  );
}
