import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Footer as _Footer } from './Footer';

export function Footer(props: ComponentProps<typeof _Footer>) {
  return (
    <FramerProvider>
      <_Footer {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Footer, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: '@ 2022. Team ROOK!ES',
  },
});
