import { ControlType } from 'framer';
import { applyFramerProperties } from '../../common/framer';
import { themeProperty } from '../../common/property';
import { Chip } from './Chip';

applyFramerProperties(Chip, {
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
