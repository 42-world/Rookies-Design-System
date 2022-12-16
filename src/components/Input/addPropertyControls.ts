import { ControlType } from 'framer';
import { themeProperty } from '../../common/property';
import { addStrictPropertyControls } from '../../common/utils';
import { Input } from './Input';

addStrictPropertyControls(Input, {
  theme: themeProperty,
  value: {
    title: 'Value',
    type: ControlType.String,
    defaultValue: 'value',
  },
  onChangeless: {
    title: 'onChangeless',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  hasError: {
    title: 'Error',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  errorMessage: {
    title: 'Error Message',
    type: ControlType.String,
    defaultValue: '에러 메시지',
  },
  placeholder: {
    title: 'Placeholder',
    type: ControlType.String,
    defaultValue: 'placeholder',
  },
  onChange: {
    title: 'onChange',
    type: ControlType.EventHandler,
  }, //TODO: framer 에서 보임?
});
