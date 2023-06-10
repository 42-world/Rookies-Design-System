import type { ComponentProps } from 'react';
import { FramerProvider } from '../../common/framer';
import { Comment as _Comment } from './Comment';

export function Comment(props: ComponentProps<typeof _Comment>) {
  return (
    <FramerProvider>
      <_Comment {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Comment, {});
