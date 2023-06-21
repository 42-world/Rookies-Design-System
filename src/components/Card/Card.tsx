import { Text } from '../Text';
import { Thumbnail } from '../Thumbnail';

type Props = {
  imageSrc: string;
  imageAlt?: string;
  primary?: string;
  secondary?: string;
  detail: string;
};

export function Card({ imageSrc, imageAlt, primary = '', secondary = '', detail }: Props) {
  return (
    <div className="group flex w-[278px] flex-col">
      <div className="transition-spacing duration-300 ease-in-out group-hover:mt-[-8px]">
        <Thumbnail src={imageSrc} alt={imageAlt} width={278} ratio="16:9" />
      </div>
      <div className="mt-3 transition-spacing duration-300 ease-in-out group-hover:mt-5">
        <Text text={`${primary} · ${secondary}`} size="body2" weight="regular" color="secondary" />
      </div>
      {detail && <Text text={detail} size="body1" weight="medium" color="primary" className="line-clamp-1" />}
    </div>
  );
}
