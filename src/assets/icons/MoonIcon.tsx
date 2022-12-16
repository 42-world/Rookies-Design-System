import { token } from '../../common/token';
import type { Color } from '../../common/token/color';

interface Props {
  color: Color;
}

export const MoonIcon = ({ color: colorName }: Props) => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color={token.color[colorName]}>
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>
  );
};
