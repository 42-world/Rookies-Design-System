import cx from 'classnames';

import { useTheme } from '../../context';
import { Thumbnail } from '../Thumbnail';

type Props = {
  imageSrc: string;
  imageAlt?: string;
  primary?: string;
  secondary?: string;
  detail: string;
};

export function Card({ imageSrc, imageAlt, primary = '', secondary = '', detail }: Props) {
  const theme = useTheme();

  return (
    <div className="w-[278px] flex flex-col group">
      <div className="group-hover:mt-[-8px] transition-spacing ease-in-out duration-300">
        <Thumbnail src={imageSrc} alt={imageAlt} width={278} ratio="16:9" />
      </div>
      <div
        className={cx('mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300 text-sm font-normal', {
          'text-text-secondary': theme === 'light',
          'text-text-secondary_dark': theme === 'dark',
        })}
      >
        <span>{primary}</span>
        <span className="mx-1">·</span>
        <span>{secondary}</span>
      </div>
      {detail && (
        <p
          className={cx('text-base font-medium line-clamp-1', {
            'text-text-primary': theme === 'light',
            'text-text-primary_dark': theme === 'dark',
          })}
        >
          {detail}
        </p>
      )}
    </div>
  );
}
