import { Button } from '../Button';
import { Text } from '../Text';

import Mail from '@material-design-icons/svg/filled/mail.svg';
import Github from '../../assets/icons/Github.svg';

interface Props {
  onClickGithub?: () => void;
  onClickMail?: () => void;
  text: string;
}

export function Footer({ onClickGithub, onClickMail, text }: Props) {
  return (
    <div className="flex flex-col">
      <div className="mb-6 w-full flex flex-row align-center justify-center gap-2">
        <Button variant="secondary" onClick={onClickGithub} icon={Github} />
        <Button variant="secondary" onClick={onClickMail} icon={Mail} />
      </div>
      <div className="flex align-center justify-center">
        <Text size="body2" color="secondary" text={text} />
      </div>
    </div>
  );
}
