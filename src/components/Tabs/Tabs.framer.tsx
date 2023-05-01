import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Tabs as _Tabs } from './Tabs';

export function Tabs(props: ComponentProps<typeof _Tabs>) {
  return (
    <FramerProvider>
      <_Tabs {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Tabs, {
  label: {
    title: 'Label',
    type: ControlType.Array,
    control: {
      type: ControlType.String,
    },
    defaultValue: ['text1', 'text2', 'text3'],
  },
  children: {
    title: 'Children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
  },
  align: {
    title: 'Align',
    type: ControlType.Enum,
    options: ['left', 'center'],
    defaultValue: 'left',
    displaySegmentedControl: true,
  },
});
