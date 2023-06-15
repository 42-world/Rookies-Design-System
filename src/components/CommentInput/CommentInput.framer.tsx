import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { CommentInput as _CommentInput } from './CommentInput';

export function CommentInput(props: ComponentProps<typeof _CommentInput>) {
  return (
    <FramerProvider>
      <_CommentInput {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(Avatar, {});
