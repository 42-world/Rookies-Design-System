import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { GroupHeader as _GroupHeader } from './GroupHeader';

export function GroupHeader(props: ComponentProps<typeof _GroupHeader>) {
  return (
    <FramerProvider>
      <_GroupHeader {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(GroupHeader, {
  href: {
    title: 'Href',
    type: ControlType.String,
    defaultValue: 'https://www.google.com',
  },
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'GroupHeader',
  },
});
