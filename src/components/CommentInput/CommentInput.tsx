import SendIcon from '@material-design-icons/svg/filled/send.svg';
import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { Button } from '../Button';

interface CommentInputProps extends InputHTMLAttributes<HTMLInputElement> {}
/**
 * 댓글 입력창
 * @description 제어와 비제어 컴포넌트를 모두 지원합니다.
 * form 요소로 감싸서 사용해주세요.
 */
export const CommentInput = forwardRef<HTMLInputElement, CommentInputProps>(({ className, ...restProps }, ref) => {
  return (
    <div className="flex items-center rounded-3xl border border-border-secondary p-2 pl-4 focus-within:border-color-system_200">
      <input
        ref={ref}
        className={cx('h-8 w-full flex-1 bg-transparent text-sm outline-none', className)}
        {...restProps}
      />
      <Button type="submit" icon={SendIcon} aria-label="댓글 작성" />
    </div>
  );
});
