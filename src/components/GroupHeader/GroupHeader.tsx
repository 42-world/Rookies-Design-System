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
      className="flex flex-row items-center gap-1 text-text-primary transition-gap duration-200 ease-in-out hover:gap-2 dark:text-text-primary_dark"
      href={href}
    >
      <Text text={text} size="heading3" weight="semibold" />
      <Icon svg={ChevronRight} className="h-6 w-6" />
    </a>
  );
}
