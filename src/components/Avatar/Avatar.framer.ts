import { ControlType } from 'framer';
import { applyFramerProperties } from '../../common/framer';
import { themeProperty } from '../../common/property';
import { Avatar } from './Avatar';

applyFramerProperties(Avatar, {
  theme: themeProperty,
  img: {
    title: 'Profile Image',
    type: ControlType.String,
    defaultValue: 'https://avatars.githubusercontent.com/u/123423',
  },
  name: {
    title: 'Name',
    type: ControlType.String,
    defaultValue: 'junseo',
  },
  secondaryText: {
    title: 'Secondary Text',
    type: ControlType.String,
    defaultValue: 'hello world!',
  },
});
