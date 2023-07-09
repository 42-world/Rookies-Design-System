import { Button } from '../Button';
import { Text } from '../Text';

import Mail from '@material-design-icons/svg/filled/mail.svg';
import Github from '../../assets/icons/Github.svg';

interface Props {
  /**
   * 웹 사이트의 GitHub 주소입니다.
   */
  githubLink?: string;
  /**
   * 웹 사이트의 메일 주소입니다.
   */
  mailLink?: string;
  /**
   * 푸터의 텍스트입니다.
   */
  text: string;
}

export function Footer({ githubLink = '', mailLink = '', text }: Props) {
  return (
    <div className="flex flex-col">
      <div className="align-center mb-6 flex w-full flex-row justify-center gap-2">
        <a href={githubLink} target="_blank" className="inline-block h-fit w-fit" rel="noreferrer">
          <Button variant="secondary" icon={<Github />} />
        </a>
        <a href={mailLink} target="_blank" className="inline-block h-fit w-fit" rel="noreferrer">
          <Button variant="secondary" icon={<Mail />} />
        </a>
      </div>
      <div className="align-center flex justify-center">
        <Text size="body2" color="secondary" text={text} />
      </div>
    </div>
  );
}
