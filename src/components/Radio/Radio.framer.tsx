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

applyFramerProperties(Radio, {
  label: {
    title: 'Label',
    type: ControlType.String,
    defaultValue: 'Radio',
  },
  selected: {
    title: 'Selected',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  disabled: {
    title: 'Disabled',
    type: ControlType.Boolean,
    defaultValue: false,
  },
});
