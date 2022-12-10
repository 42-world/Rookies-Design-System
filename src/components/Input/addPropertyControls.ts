import { addPropertyControls, ControlType } from 'framer';
import { Input } from './Input';

addPropertyControls(Input, {
  theme: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['light', 'dark'],
    defaultValue: 'light',
  },
  isError: {
    type: ControlType.Boolean,
    defaultValue: true,
  },
  errorMessage: {
    type: ControlType.String,
    defaultValue: '에러 메시지',
  },
  value: {
    type: ControlType.String,
    defaultValue: '',
  },
  onChange: {
    type: ControlType.EventHandler,
  },
  onChangeless: {
    type: ControlType.Boolean,
    defaultValue: false,
  },
  placeholder: {
    type: ControlType.String,
    defaultValue: 'placeholder',
  },
});
