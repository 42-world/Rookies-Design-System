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
    <div className="group flex w-[278px] flex-col transition-transform duration-300 ease-in-out active:scale-92">
      <div className="transition-transform duration-300 ease-in-out group-hover:translate-y-m8">
        <Thumbnail src={imageSrc} alt={imageAlt} width={278} ratio="16:9" />
      </div>
      <div className="mt-3 transition-spacing duration-300 ease-in-out">
        <div className="flex flex-row items-center gap-1">
          {primary && <Text text={primary} size="body2" weight="regular" color="secondary" />}
          {primary && secondary && <Text text={'·'} size="body2" weight="regular" color="secondary" />}
          {secondary && <Text text={secondary} size="body2" weight="regular" color="secondary" />}
        </div>
      </div>
      {title && <Text text={title} size="body1" weight="medium" color="primary" className="line-clamp-1" />}
    </div>
  );
}
