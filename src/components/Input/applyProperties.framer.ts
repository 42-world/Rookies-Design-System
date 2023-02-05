import { ControlType } from 'framer';
import { applyFramerProperties } from '../../common/framer';
import { themeProperty } from '../../common/property';
import { Input } from './Input';

applyFramerProperties(Input, {
  theme: themeProperty,
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
    title: 'placeholder',
    type: ControlType.String,
    defaultValue: 'placeholder',
  },
});
