import { ControlType } from 'framer';
import { ComponentProps, useEffect, useState } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Input as _Input } from './Input';

interface InputProps {
  variant: 'outlined' | 'filled';
  size: 'small' | 'medium';
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
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const { children, ...transformedProps } = transformProps(props);
  void children;

  return (
    <FramerProvider>
      <_Input {...transformedProps} value={value} onValueChange={setValue} />
    </FramerProvider>
  );
}

applyFramerProperties(Input, {
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['small', 'medium'],
    defaultValue: 'medium',
  },
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
