import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { IconText as _IconText } from './IconText';

export function IconText(props: ComponentProps<typeof _IconText>) {
  return (
    <FramerProvider>
      <_IconText {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Avatar, {});
