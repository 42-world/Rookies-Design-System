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

applyFramerProperties(Checkbox, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'text',
  },
  isChecked: {
    title: 'Checked',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  onClick: {
    title: 'onClick',
    type: ControlType.EventHandler,
  },
});
