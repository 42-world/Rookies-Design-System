import { Button } from '../Button';
import { Text } from '../Text';

import Mail from '@material-design-icons/svg/filled/mail.svg';
import Github from '../../assets/icons/Github.svg';

interface Props {
  githubLink?: string;
  mailLink?: string;
  text: string;
}

export function Footer({ githubLink = '', mailLink = '', text }: Props) {
  return (
    <div className="flex flex-col">
      <div className="mb-6 w-full flex flex-row align-center justify-center gap-2">
        <a href={githubLink} target="_blank" className="w-fit h-fit inline-block">
          <Button variant="secondary" icon={Github} />
        </a>
        <a href={mailLink} target="_blank" className="w-fit h-fit inline-block">
          <Button variant="secondary" icon={Mail} />
        </a>
      </div>
      <div className="flex align-center justify-center">
        <Text size="body2" color="secondary" text={text} />
      </div>
    </div>
  );
}
