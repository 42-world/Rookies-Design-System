import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { SideNavigation as _SideNavigation } from './SideNavigation';

export function SideNavigation(props: ComponentProps<typeof _SideNavigation>) {
  return (
    <FramerProvider>
      <_SideNavigation {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(SideNavigation, {
  hasIcon: {
    title: 'Icon',
    type: ControlType.Boolean,
  },
  focus: {
    title: 'Focus',
    type: ControlType.Number,
    min: 0,
    displayStepper: true,
  },
  list: {
    title: 'List',
    type: ControlType.Array,
    control: {
      type: ControlType.Object,
      controls: {
        text: {
          type: ControlType.String,
        },
        link: {
          type: ControlType.Link,
        },
        icon: {
          type: ControlType.Enum,
          options: [
            'BellIcon',
            'ChatIcon',
            'CheckMarkIcon',
            'MoonIcon',
            'PlusIcon',
            'SearchIcon',
            'SunIcon',
            'ThumbIcon',
          ],
          // hidden: ({ hasIcon }) => !hasIcon,
        },
      },
    },
    defaultValue: [
      { text: 'text1', icon: 'Home' },
      { text: 'text2', icon: 'Map' },
      { text: 'text3', icon: 'Globe' },
    ],
  },
});
