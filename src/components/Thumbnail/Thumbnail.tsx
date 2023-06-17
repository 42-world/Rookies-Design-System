import cx from 'classnames';

type Props = {
  src: string;
  alt?: string;
  width: number;
  rounded: '8px' | '16px';
  ratio?: '16:9' | '16:10' | '1:1';
};

export function Thumbnail({ src, alt = '', width, rounded = '16px', ratio = '16:9' }: Props) {
  const ratioClass = {
    '16:9': 'aspect-video',
    '16:10': 'aspect-16/10',
    '1:1': 'aspect-square',
  }[ratio];

  const roundedClass = {
    '8px': 'rounded-lg',
    '16px': 'rounded-2xl',
  }[rounded];
  return <img src={src} alt={alt} style={{ width }} className={cx(ratioClass, roundedClass, 'object-cover')} />;
}
