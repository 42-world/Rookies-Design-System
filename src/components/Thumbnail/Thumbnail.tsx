import cx from 'classnames';

type Props = {
  src: string;
  alt?: string;
  width: number;
  ratio?: '16:9' | '16:10' | '1:1';
};

export function Thumbnail({ src, alt, width, ratio = '16:9' }: Props) {
  const ratioClass = {
    '16:9': 'aspect-video',
    '16:10': 'aspect-16/10',
    '1:1': 'aspect-square',
  }[ratio];
  return <img src={src} alt={alt} style={{ width }} className={cx(ratioClass, 'object-cover rounded-2xl')} />;
}
