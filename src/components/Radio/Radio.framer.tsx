import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Radio as _Radio } from './Radio';

export function Radio(props: ComponentProps<typeof _Radio>) {
  return (
    <FramerProvider>
      <_Radio {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Radio, {});
