import { ControlType } from 'framer';
import { applyFramerProperties } from '../../common/framer';
import { themeProperty } from '../../common/property';
import TopNavigation from './TopNavigation';

applyFramerProperties(TopNavigation, {
  theme: themeProperty,
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
