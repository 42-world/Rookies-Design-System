import { addPropertyControls, ControlType } from 'framer';
import { SideNavigation } from './SideNavigation';

addPropertyControls(SideNavigation, {
  theme: {
    title: 'Theme',
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['light', 'dark'],
    defaultValue: 'light',
  },
  hasIcon: {
    title: 'Has Icon',
    type: ControlType.Boolean,
  },
  currentLink: {
    type: ControlType.Link,
  },
  list: {
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
