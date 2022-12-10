import { addPropertyControls, ControlType } from 'framer';
import { Button } from './Button';

addPropertyControls(Button, {
  childType: {
    title: 'Type',
    type: ControlType.Enum,
    options: ['text', 'link'],
    defaultValue: 'text',
    displaySegmentedControl: true,
  },
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'text',
  },
  link: {
    title: 'Link',
    type: ControlType.String,
    defaultValue: 'https://www.framer.com',
    hidden: ({ childType }) => !(childType === 'link'),
  },
  theme: {
    title: 'Theme',
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['light', 'dark'],
    defaultValue: 'light',
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['normal', 'small'],
    defaultValue: 'normal',
    displaySegmentedControl: true,
  },
  style: {
    title: 'Style',
    type: ControlType.Enum,
    options: ['default', 'primary', 'danger'],
    defaultValue: 'default',
    displaySegmentedControl: true,
  },
  onClick: {
    type: ControlType.EventHandler,
  },
});
