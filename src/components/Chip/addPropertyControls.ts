import { ControlType } from 'framer';
import { themeProperty } from '../../common/property';
import { addStrictPropertyControls } from '../../common/utils';
import { Chip } from './Chip';

addStrictPropertyControls(Chip, {
  theme: themeProperty,
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
