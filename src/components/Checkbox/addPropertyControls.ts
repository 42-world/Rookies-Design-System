import { ControlType } from 'framer';
import { themeProperty } from '../../common/property';
import { addStrictPropertyControls } from '../../common/utils';
import { Checkbox } from './Checkbox';

addStrictPropertyControls(Checkbox, {
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
