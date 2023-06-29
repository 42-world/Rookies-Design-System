import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Button as _Button } from './Button';

type OriginalProps = ComponentProps<typeof _Button>;

type Props = Omit<OriginalProps, 'icon'> & {
  icon: JSX.Element[];
  variant: OriginalProps['variant'];
  activated: boolean;
};

export function Button({ icon, ...props }: Props) {
  if (!icon.length) {
    return (
      <FramerProvider>
        <_Button {...props} />
      </FramerProvider>
    );
  }

  const IconComponent = () => icon[0];
  return (
    <FramerProvider>
      <_Button icon={IconComponent} {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Button, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Lorem Ipsum',
  },
  variant: {
    title: 'Variant',
    type: ControlType.Enum,
    options: ['primary', 'secondary', 'text'],
    defaultValue: 'primary',
  },
  icon: {
    title: 'Icon',
    type: ControlType.ComponentInstance,
  },
  activated: {
    title: 'Activated',
    type: ControlType.Boolean,
    defaultValue: false,
    hidden(props) {
      return !(props.variant === 'text');
    },
  },
});
