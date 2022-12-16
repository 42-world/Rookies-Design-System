import { ControlType } from 'framer';
import { themeProperty } from '../../common/property';
import { addStrictPropertyControls } from '../../common/utils';
import { SideNavigation } from './SideNavigation';

addStrictPropertyControls(SideNavigation, {
  theme: themeProperty,
  hasIcon: {
    title: 'Icon',
    type: ControlType.Boolean,
  },
  focus: {
    title: 'Focus',
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0,
    min: 0,
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
        icon: {
          type: ControlType.String,
        },
        link: {
          type: ControlType.Link,
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
