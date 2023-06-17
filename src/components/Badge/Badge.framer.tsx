import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Badge as _Badge } from './Badge';

export function Badge(props: ComponentProps<typeof _Badge>) {
  return (
    <FramerProvider>
      <_Badge {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Badge, {
  color: {
    title: 'Color',
    type: ControlType.Enum,
    options: ['indigo', 'yellow', 'mint', 'cyan', 'blue', 'pink', 'brown', 'outline', 'mono'],
  },
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: '뱃지',
  },
});
