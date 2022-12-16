import { token } from '../../common/token';
import type { Color } from '../../common/token/color';

interface Props {
  color: Color;
}

export const PlusIcon = ({ color: colorName }: Props) => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color={token.color[colorName]}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
