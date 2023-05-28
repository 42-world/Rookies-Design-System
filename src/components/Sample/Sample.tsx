import cx from 'classnames';
import { useTheme } from '../../context';

type Props = {
  text: string;
};

export function Sample({ text }: Props) {
  const theme = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-pink-200' : 'bg-gray-300'}>
      나 잘래 "{text}" and 졸려 "{theme}" 와이차 신나하다..
      <br />
      {cx([
        'bg-pink-200 text-lg hover:ring-4 hover:ring-offset-3 hover:opacity-50',
        { 'bg-gray-300': theme === 'light' },
      ])}
    </div>
  );
}
