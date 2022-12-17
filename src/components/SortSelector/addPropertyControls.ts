import { ControlType } from 'framer';
import { addStrictPropertyControls } from '../../common/utils';
import { SortSelector } from './SortSelector';

addStrictPropertyControls(SortSelector, {
  theme: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['light', 'dark'],
    defaultValue: 'light',
  },

  selectIndex: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0,
    min: 0,
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
      },
    },
    defaultValue: [{ text: '124123234' }, { text: '144213122' }, { text: 'text3' }],
  },
});
