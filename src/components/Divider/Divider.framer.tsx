import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Divider as _Divider } from './Divder';

export function Divider(props: ComponentProps<typeof _Divider>) {
  return (
    <FramerProvider>
      <_Divider {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(_Divider, {
  variant: {
    title: 'Variant',
    type: ControlType.Enum,
    options: ['primary', 'secondary'],
    defaultValue: 'primary',
  },
});
