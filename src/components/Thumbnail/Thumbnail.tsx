import cx from 'classnames';

type Props = {
  /**
   * 썸네일 이미지의 주소입니다.
   */
  src: string;
  /**
   * 썸네일의 대체 텍스트입니다.
   */
  alt?: string;
  /**
   * 썸네일의 너비입니다.
   */
  width: number;
  /**
   * 썸네일의 border-radius 크기입니다.
   */
  rounded?: '8px' | '16px';
  /**
   * 썸네일의 비율입니다.
   */
  ratio?: '16:9' | '16:10' | '1:1';
  /**
   * 썸네일의 className입니다.
   */
  className?: string;
};

export function Thumbnail({ src, alt = '', width, rounded = '16px', ratio = '16:9', className }: Props) {
  const ratioClass = {
    '16:9': 'aspect-video',
    '16:10': 'aspect-16/10',
    '1:1': 'aspect-square',
  }[ratio];

  const roundedClass = {
    '8px': 'rounded-lg',
    '16px': 'rounded-2xl',
  }[rounded];
  return (
    <img src={src} alt={alt} style={{ width }} className={cx(ratioClass, roundedClass, 'object-cover', className)} />
  );
}
