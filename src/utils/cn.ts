import cx, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ArgumentArray) {
  return twMerge(cx(args));
}
