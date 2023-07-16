import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import {
  applyFramerProperties,
  createFramerIconProperties,
  FramerIconType,
  FramerProvider,
  useFramerIcon,
} from '../../common/framer';
import { Button as _Button } from './Button';

type OriginalProps = ComponentProps<typeof _Button>;

type Props = Omit<OriginalProps, 'icon'> & {
  icon: FramerIconType;
  variant: OriginalProps['variant'];
  activated: boolean;
  disabled: boolean;
};

export function Button({ icon, ...props }: Props) {
  const svgElement = useFramerIcon({ icon });

  return (
    <FramerProvider>
      <_Button icon={svgElement} {...props} />
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
  icon: createFramerIconProperties({
    title: 'Icon',
    optional: true,
  }),
  activated: {
    title: 'Activated',
    type: ControlType.Boolean,
    defaultValue: false,
    hidden(props) {
      return !(props.variant === 'text');
    },
  },
  disabled: {
    title: 'Disabled',
    type: ControlType.Boolean,
    defaultValue: false,
  },
});
