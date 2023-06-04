import { useTheme } from '../../context';

export function Jiychoi() {
  const theme = useTheme();

  return (
    <div className={theme === 'light' ? 'text-text-primary' : 'text-color-white'}>
      <h1>Jiychoi</h1>
      <p>Hi, I'm {theme} Jiychoi</p>
      <p>Poam최 지 미쳐따이</p>
    </div>
  );
}
