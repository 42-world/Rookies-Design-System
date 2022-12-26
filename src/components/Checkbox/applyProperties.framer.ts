import { ControlType } from 'framer';
import { applyFramerProperties } from '../../common/framer';
import { themeProperty } from '../../common/property';
import { Checkbox } from './Checkbox';

applyFramerProperties(Checkbox, {
  theme: themeProperty,
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
