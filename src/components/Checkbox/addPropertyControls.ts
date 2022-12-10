import { addPropertyControls, ControlType } from 'framer';
import { Checkbox } from './Checkbox';

addPropertyControls(Checkbox, {
  theme: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['light', 'dark'],
    defaultValue: 'light',
  },
  direction: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['row', 'column'],
    defaultValue: 'row',
  },
  list: {
    type: ControlType.Array,
    control: {
      type: ControlType.Object,
      controls: {
        text: {
          type: ControlType.String,
        },
        isChecked: { type: ControlType.Boolean },
      },
    },
    defaultValue: [
      { text: 'text1', isChecked: true },
      { text: 'text2', isChecked: true },
      { text: 'text3', isChecked: false },
    ],
  },
});
