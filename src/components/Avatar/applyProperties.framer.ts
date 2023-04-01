import { ControlType } from 'framer';
import { applyFramerProperties } from '../../common/framer';
import { themeProperty } from '../../common/property';
import { Avatar } from './Avatar';

applyFramerProperties(Avatar, {
  theme: themeProperty,
  img: {
    title: 'Profile Image',
    type: ControlType.ResponsiveImage,
  },
  name: {
    title: 'Name',
    type: ControlType.String,
  },
  secondaryText: {
    title: 'Secondary Text',
    type: ControlType.String,
  },
});
