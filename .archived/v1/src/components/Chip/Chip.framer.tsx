import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Chip as _Chip } from './Chip';

export function Chip(props: ComponentProps<typeof _Chip>) {
  return (
    <FramerProvider>
      <_Chip {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Chip, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: '텍스트',
  },
  isSelected: {
    title: 'Is Selected',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  onClick: {
    title: 'onClick',
    type: ControlType.EventHandler,
  },
});
