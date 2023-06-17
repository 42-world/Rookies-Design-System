import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Sample as _Sample } from './Sample';

export function Sample(props: ComponentProps<typeof _Sample>) {
  return (
    <FramerProvider>
      <_Sample {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Sample, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Hello!',
  },
});
