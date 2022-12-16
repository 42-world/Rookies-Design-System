import { ControlType } from 'framer';
import { themeProperty } from '../../common/property';
import { addStrictPropertyControls } from '../../common/utils';
import { Tabs } from './Tabs';

addStrictPropertyControls(Tabs, {
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
