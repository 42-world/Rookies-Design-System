import { ControlType } from 'framer';
import { themeProperty } from '../../common/property';
import { addStrictPropertyControls } from '../../common/utils';
import { Avatar } from './Avatar';

addStrictPropertyControls(Avatar, {
  theme: themeProperty,
  img: {
    title: 'Profile Image',
    type: ControlType.ResponsiveImage,
  },
  name: {
    title: 'Name',
    type: ControlType.String,
  },
  seconderyText: {
    title: 'Secondery Text',
    type: ControlType.String,
  },
});
