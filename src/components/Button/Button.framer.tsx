import AddCard from '@material-design-icons/svg/filled/power.svg';
import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Button as _Button } from './Button';

export function Button({ icon, ...props }: Omit<ComponentProps<typeof _Button>, 'icon'> & { icon: JSX.Element[] }) {
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
  // activated: {
  //   title: 'Activated',
  //   type: ControlType.Boolean,
  //   defaultValue: true
  // }
});
