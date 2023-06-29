import { ControlType } from 'framer';
import { ComponentProps, useRef } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Input as _Input } from './Input';

interface InputProps {
  variant: 'outline' | 'filled';
  value: string;
  label: string;
  hasError: boolean;
  required: boolean;
  maxLength: number;
  focused: boolean;
  helperText: string;
  placeholder: string;
}

const transformProps = (props: InputProps): ComponentProps<typeof _Input> => {
  const { helperText, ...restProps } = props;

  return {
    ...restProps,
    subLabel: helperText,
  };
};

export function Input(props: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { children, ...transformedProps } = transformProps(props);
  void children;

  return (
    <FramerProvider>
      <_Input ref={inputRef} {...transformedProps} />
    </FramerProvider>
  );
}

applyFramerProperties(Input, {
  variant: {
    title: 'Variant',
    type: ControlType.Enum,
    options: ['outlined', 'filled'],
    defaultValue: 'outlined',
  },
  focused: {
    title: 'Focused',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  required: {
    title: 'Required',
    type: ControlType.Boolean,
    defaultValue: true,
  },
  placeholder: {
    title: 'Placeholder',
    type: ControlType.String,
    defaultValue: '플레이스홀더',
  },
  value: {
    title: 'Value',
    type: ControlType.String,
    defaultValue: '',
  },
  label: {
    title: 'Label',
    type: ControlType.String,
    defaultValue: '레이블',
  },
  hasError: {
    title: 'Has Error',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  helperText: {
    title: 'Helper Text',
    type: ControlType.String,
    defaultValue: '헬퍼텍스트',
  },
  maxLength: {
    title: 'Max Length',
    type: ControlType.Number,
    defaultValue: 20,
  },
});
