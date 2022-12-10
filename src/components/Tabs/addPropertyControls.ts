import { addPropertyControls, ControlType } from 'framer';
import { Tabs } from './Tabs';

addPropertyControls(Tabs, {
  theme: {
    type: ControlType.Enum,
    options: ['light', 'dark'],
    defaultValue: 'light',
    displaySegmentedControl: true,
  },
  label: {
    type: ControlType.Array,
    control: {
      type: ControlType.String,
    },
    defaultValue: ['text1', 'text2', 'text3'],
  },
  children: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
  },
  align: {
    type: ControlType.Enum,
    options: ['left', 'center'],
    defaultValue: 'left',
    displaySegmentedControl: true,
  },
});
