import { PropsWithChildren } from 'react';
import { Divider } from '../Divider';
import { Thumbnail } from '../Thumbnail';
import { Text } from './../Text/Text';

type Props = PropsWithChildren<{
  title: string;
  thumbnailSrc?: string;
  secondaryTextFirst?: string;
  secondaryTextSecond?: string;
  hasBorder?: boolean;
}>;

const MergedSecondaryText = (first?: string, second?: string) => {
  return (
    <div className="flex flex-row items-center gap-1">
      {first && <Text text={first} size="body2" weight="regular" color="secondary" />}
      {first && second && <Text text="·" size="body2" weight="regular" color="secondary" />}
      {second && <Text text={second} size="body2" weight="regular" color="secondary" />}
    </div>
  );
};

export function ListItem({
  children,
  title,
  thumbnailSrc,
  secondaryTextFirst,
  secondaryTextSecond,
  hasBorder = true,
}: Props) {
  return (
    <div className="w-full cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none">
      <div className="flex flex-row justify-between items-center py-4">
        <div className="flex flex-row items-center">
          {thumbnailSrc && <Thumbnail src={thumbnailSrc} alt={title} width={85} ratio="16:9" />}
          <div className="ml-3 flex-1">
            {MergedSecondaryText(secondaryTextFirst, secondaryTextSecond)}
            <Text text={title} size="body1" weight="medium" color="primary" />
          </div>
        </div>
        {children}
      </div>
      {hasBorder && <Divider variant="secondary" />}
    </div>
  );
}

function MetadataItems({ children }: Pick<Props, 'children'>) {
  return (
    <div className="flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark">{children}</div>
  );
}

ListItem.MetadataItems = MetadataItems;
