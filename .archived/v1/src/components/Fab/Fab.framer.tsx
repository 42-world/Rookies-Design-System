import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Fab as _Fab } from './Fab';

export function Fab(props: ComponentProps<typeof _Fab>) {
  return (
    <FramerProvider>
      <_Fab {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Fab, {
  isActived: {
    title: 'isActived',
    type: ControlType.Boolean,
    defaultValue: false,
    disabledTitle: 'Inactived',
    enabledTitle:'Actived'
  },
  onClick: {
    title: 'onClick',
    type: ControlType.EventHandler,
  },
});
