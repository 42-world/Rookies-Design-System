import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Feed as _Feed } from './Feed';

export function Feed(props: ComponentProps<typeof _Feed>) {
  return (
    <FramerProvider>
      <_Feed {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Feed, {});
