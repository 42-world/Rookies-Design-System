import ChevronRight from '@material-design-icons/svg/filled/chevron_right.svg';
import { Icon } from '../Icon';
import { Text } from '../Text';

interface Props {
  /**
   * 컴포넌트와 연결되는 주소입니다.
   */
  href: string;
  /**
   * 헤더의 텍스트입니다.
   */
  text: string;
}

export function GroupHeader({ href, text }: Props) {
  return (
    <a
      className="flex flex-row items-center gap-1 text-text-primary transition-gap duration-200 ease-in-out hover:gap-2"
      href={href}
    >
      <Text text={text} size="heading3" weight="semibold" />
      <Icon svg={<ChevronRight />} className="h-6 w-6" />
    </a>
  );
}
