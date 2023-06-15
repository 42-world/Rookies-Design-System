import Face from '@material-design-icons/svg/filled/face.svg';
import Github from '../../assets/icons/Github.svg';
import { Icon } from '../Icon';
import { Text } from '../Text';

type Props = {
  text: string;
};

export function Sample({ text }: Props) {
  return (
    <div className="flex flex-row items-center">
      <Text text={`This is Samp3le! "${text}"`} size="heading3" weight="semibold" className="mr-2" />
      <Icon svg={Github} size="xsmall" className="inline-block  mr-1" />
      <Icon svg={Face} size="medium" className="inline-block fill-yellow-400" />
    </div>
  );
}
