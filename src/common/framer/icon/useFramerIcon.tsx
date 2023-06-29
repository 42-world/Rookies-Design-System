import Pending from '@material-design-icons/svg/filled/pending.svg';
import { ReactElement, useEffect, useState } from 'react';
import { FramerIconType } from './framerIconType';

type Params = {
  icon: FramerIconType;
};

export function useFramerIcon({ icon }: Params): ReactElement | undefined {
  const [svgElement, SetSvgElement] = useState<ReactElement | undefined>(
    icon.type === 'none' ? undefined : <Pending />,
  );

  useEffect(() => {
    (async function () {
      if (icon.type === 'none') {
        SetSvgElement(undefined);
        return;
      }

      const svg = await fetch(
        `https://raw.githubusercontent.com/marella/material-design-icons/main/svg/${icon.type}/${icon.name}.svg`,
      ).then((res) => res.text());

      SetSvgElement(<svg dangerouslySetInnerHTML={{ __html: svg }} />);
    })();
  });

  return svgElement;
}
