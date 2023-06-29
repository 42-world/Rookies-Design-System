import { Text } from '../Text';
import { Thumbnail } from '../Thumbnail';

type Props = {
  imageSrc: string;
  imageAlt?: string;
  primary?: string;
  secondary?: string;
  title: string;
};

export function Card({ imageSrc, imageAlt, primary = '', secondary = '', title }: Props) {
  return (
    <div className="group flex w-[278px] flex-col transition-transform duration-200 ease-in-out active:scale-92">
      <div className="transition-transform duration-200 ease-in-out group-hover:translate-y-m8">
        <Thumbnail src={imageSrc} alt={imageAlt} width={278} ratio="16:9" />
      </div>
      <div className="mt-3 transition-spacing duration-200 ease-in-out">
        <Text text={`${[primary, secondary].join(' · ')}`} size="body2" weight="regular" color="secondary" />
      </div>
      {title && <Text text={title} size="body1" weight="medium" color="primary" className="line-clamp-1" />}
    </div>
  );
}
