import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cx from 'classnames';

interface CommentInputProps extends InputHTMLAttributes<HTMLInputElement> {}
/**
 * 댓글 입력창
 * @description 제어와 비제어 컴포넌트를 모두 지원합니다.
 * form 요소로 감싸서 사용해주세요.
 */
export const CommentInput = forwardRef<HTMLInputElement, CommentInputProps>(({ className, ...restProps }, ref) => {
  return (
    <div className="flex items-center rounded-3xl p-2 border-border-secondary border focus-within:border-color-system_200">
      <input
        ref={ref}
        className={cx('flex-1 w-full h-8 text-sm bg-transparent outline-none', className)}
        {...restProps}
      />
      <button>규동님 버튼 만들어주세요</button>
    </div>
  );
});
