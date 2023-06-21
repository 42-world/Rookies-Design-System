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
    <div className="w-[278px] flex flex-col group active:scale-92 transition-transform ease-in-out duration-300">
      <div className="group-hover:translate-y-m8 transition-transform ease-in-out duration-300">
        <Thumbnail src={imageSrc} alt={imageAlt} width={278} ratio="16:9" />
      </div>
      <div className="mt-3 transition-spacing ease-in-out duration-300">
        <Text text={`${primary} · ${secondary}`} size="body2" weight="regular" color="secondary" />
      </div>
      {title && <Text text={title} size="body1" weight="medium" color="primary" className="line-clamp-1" />}
    </div>
  );
}
