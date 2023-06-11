import Face from '@material-design-icons/svg/filled/face.svg';
import { Icon } from '../Icon';

type Props = {
  text: string;
};

export function Sample({ text }: Props) {
  return (
    <div>
      <Icon svg={Face} className="inline-block" />
      <span className={'text-blue-500 dark:text-pink-600'}>This is Sample! "{text}"</span>
    </div>
  );
}
