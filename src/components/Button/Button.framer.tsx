import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Button as _Button } from './Button';

export function Button(props: ComponentProps<typeof _Button>) {
  return (
    <FramerProvider>
      <_Button {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Avatar, {});
