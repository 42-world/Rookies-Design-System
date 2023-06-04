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
    <div className="w-[278px] flex flex-col group">
      <div className="group-hover:mt-[-8px] transition-spacing ease-in-out duration-300">
        <Thumbnail src={imageSrc} alt={imageAlt} width={278} ratio="16:9" />
      </div>
      <div className="mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300 text-sm font-normal text-text-secondary dark:text-text-secondary_dark">
        <span>{primary}</span>
        <span className="mx-1">·</span>
        <span>{secondary}</span>
      </div>
      {detail && (
        <p className="text-base font-medium line-clamp-1 text-text-primary dark:text-text-primary_dark">{detail}</p>
      )}
    </div>
  );
}
