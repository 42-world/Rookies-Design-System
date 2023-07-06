import Search from '@material-design-icons/svg/filled/search.svg';
import { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button';

type SearchBarVariant = 'primary' | 'solid';
interface InputProps {
  /**
   * 검색창의 종류를 결정하는 변수입니다.
   */
  variant: SearchBarVariant;
}

type Props = InputProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputProps>;

const variantStyles: Record<SearchBarVariant, string> = {
  primary:
    'bg-gradient-to-r from-green-200 to-color-system_100 shadow-searchbar hover:shadow-searchbar_hover dark:shadow-searchbar_dark dark:hover:shadow-searchbar_hover_dark',
  solid:
    'bg-border-primary dark:bg-border-primary_dark focus-within:bg-color-system_200 dark:focus-within:bg-color-system_200 hover:shadow-searchbar_solid_hover dark:hover:shadow-searchbar_solid_hover_dark',
};

export const SearchBar = forwardRef<HTMLInputElement, Props>(
  ({ variant = 'primary', className, ...restProps }, ref) => {
    return (
      <div className={twMerge('relative h-10 w-full overflow-hidden rounded-[20px] p-0.5', variantStyles[variant])}>
        <div className="flex h-full w-full flex-row items-center rounded-[20px] bg-bg-primary pl-4 pr-1 dark:bg-bg-primary_dark">
          <input
            ref={ref}
            className={twMerge(
              'h-full flex-1 border-0 bg-inherit text-sm font-medium leading-6 outline-0 placeholder:text-text-tertiary dark:text-text-tertiary_dark dark:placeholder:text-text-tertiary_dark',
              className,
            )}
            {...restProps}
          />
          <Button type="submit" variant="text" icon={<Search />} aria-label="검색" />
        </div>
      </div>
    );
  },
);
