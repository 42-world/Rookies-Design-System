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
applyFramerProperties(Checkbox, {
  labelText: {
    title: 'LabelText',
    type: ControlType.String,
    defaultValue: 'Lorem Ipsum',
  },
  checked: {
    title: 'Checked',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  disabled: {
    title: 'Disabled',
    type: ControlType.Boolean,
    defaultValue: false,
  },
});
