import ChevronRight from '@material-design-icons/svg/filled/chevron_right.svg';
import { Icon } from '../Icon';
import { Text } from '../Text';

interface Props {
  href: string;
  text: string;
}

export function GroupHeader({ href, text }: Props) {
  return (
    <a
      className="flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark"
      href={href}
    >
      <Text text={text} size="heading3" weight="semibold" />
      <Icon svg={ChevronRight} className="w-6 h-6" />
    </a>
  );
}
