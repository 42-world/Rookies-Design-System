import { token } from '../../common/token';
import type { Color } from '../../common/token/color';

interface Props {
  color: Color;
}

export const PlusOutlineIcon = ({ color: colorName }: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      width="24"
      height="24"
      color={token.color[colorName]}
      style={{ width: '60%', height: 'auto' }}
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg>
  );
};
