import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Input as _Input } from './Input';

export function Input(props: ComponentProps<typeof _Input>) {
  return (
    <FramerProvider>
      <_Input {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Input, {
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
