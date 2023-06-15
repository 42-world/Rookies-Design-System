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
applyFramerProperties(Button, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Button',
  },
  variant: {
    title: 'Variant',
    type: ControlType.Enum,
    options: ['primary', 'secondary', 'text'],
    defaultValue: 'primary',
  },
  icon: {
    title: 'Icon',
    type: ControlType.ComponentInstance,
  },
});
