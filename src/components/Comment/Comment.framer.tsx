import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Comment as _Comment } from './Comment';

export function Comment(props: ComponentProps<typeof _Comment>) {
  return (
    <FramerProvider>
      <_Comment {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Comment, {
  // Add your custom property infos here
});
