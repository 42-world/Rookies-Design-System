import { ControlType } from 'framer';
import { applyFramerProperties } from '../../common/framer';
import { themeProperty } from '../../common/property';
import { Tabs } from './Tabs';

applyFramerProperties(Tabs, {
  theme: themeProperty,
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
