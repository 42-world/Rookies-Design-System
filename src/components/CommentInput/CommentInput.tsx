import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { useControllableState } from '../Input/useControllableState';

interface CommentInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}
/**
 * 댓글 입력창
 * @description 제어와 비제어 컴포넌트를 모두 지원합니다.
 * form 요소로 감싸서 사용해주세요.
 */
export const CommentInput = forwardRef<HTMLInputElement, CommentInputProps>(
  ({ value: valueFromProps, defaultValue, onValueChange, ...restProps }, ref) => {
    const [value, onChange] = useControllableState({
      state: valueFromProps,
      defaultState: defaultValue ?? '',
      onChange: onValueChange,
    });

    return (
      <div className="flex items-center rounded-3xl p-2 border-border-secondary border focus-within:border-color-system_200">
        <input
          ref={ref}
          className="w-full bg-transparent outline-none pl-2 text-sm leading-normal placeholder:text-text-tertiary font-normal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...restProps}
        />
        <button>규동님 버튼 만들어주세요</button>
      </div>
    );
  },
);
