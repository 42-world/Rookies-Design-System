import { MouseEventHandler, ReactNode } from 'react';
import { Divider } from '../Divider';
import { Thumbnail } from '../Thumbnail';
import { Text } from './../Text/Text';

interface Props {
  /**
   * 리스트 아이템의 제목입니다.
   */
  title: string;
  /**
   * 썸네일 사진의 주소입니다.
   */
  thumbnailSrc?: string;
  /**
   * 부가적인 정보를 나타내는 텍스트의 좌측입니다.
   */
  secondaryTextFirst?: string;
  /**
   * 부가적인 정보를 나타내는 텍스트의 우측입니다.
   */
  secondaryTextSecond?: string;
  /**
   * 리스트 아이템의 아래쪽에 border를 표시할지 여부입니다.
   */
  hasBorder?: boolean;
  /**
   * 리스트 아이템의 오른쪽에 추가할 컴포넌트입니다.
   */
  rightAddon?: ReactNode;
  /**
   * 리스트 아이템을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const MergedSecondaryText = (first?: string, second?: string) => {
  return (
    <div className="flex flex-row items-center gap-1">
      {first && <Text text={first} size="body2" color="secondary" />}
      {first && second && <Text text="·" size="body2" color="secondary" />}
      {second && <Text text={second} size="body2" color="secondary" />}
    </div>
  );
};

export function ListItem({
  title,
  thumbnailSrc,
  secondaryTextFirst,
  secondaryTextSecond,
  hasBorder = true,
  rightAddon,
  onClick,
}: Props) {
  return (
    <div
      className="w-full cursor-pointer select-none transition-transform duration-200 ease-out active:scale-92"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center">
          {thumbnailSrc && <Thumbnail src={thumbnailSrc} alt={title} width={85} rounded="8px" ratio="16:9" />}
          <div className="ml-3 flex-1">
            {MergedSecondaryText(secondaryTextFirst, secondaryTextSecond)}
            <Text text={title} size="body1" weight="medium" color="primary" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 text-text-secondary">{rightAddon}</div>
      </div>
      {hasBorder && <Divider variant="secondary" />}
    </div>
  );
}
