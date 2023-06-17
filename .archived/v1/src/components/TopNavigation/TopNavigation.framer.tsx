import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { TopNavigation as _TopNavigation } from './TopNavigation';

export function TopNavigation(props: ComponentProps<typeof _TopNavigation>) {
  return (
    <FramerProvider>
      <_TopNavigation {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(TopNavigation, {
  links: {
    title: 'Links',
    type: ControlType.Object,
    controls: {
      homeLink: { type: ControlType.Link },
      themeLink: { type: ControlType.Link },
      searchLink: { type: ControlType.Link },
      createLink: { type: ControlType.Link },
      alertLink: { type: ControlType.Link },
    },
  },
  user: {
    title: 'User',
    type: ControlType.Object,
    controls: {
      profileLink: {
        type: ControlType.Link,
      },
      profileImg: {
        type: ControlType.Image,
      },
    },
  },
});
