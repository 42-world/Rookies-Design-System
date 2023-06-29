import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Checkbox as _Checkbox } from './Checkbox';

export function Checkbox(props: ComponentProps<typeof _Checkbox>) {
  return (
    <FramerProvider>
      <_Checkbox {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Checkbox, {});
