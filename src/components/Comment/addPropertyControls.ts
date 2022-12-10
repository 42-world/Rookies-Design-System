import { addPropertyControls, ControlType } from 'framer';
import { Comment } from './Comment';

addPropertyControls(Comment, {
  theme: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['light', 'dark'],
    defaultValue: 'light',
  },
  text: {
    type: ControlType.String,
    defaultValue: '저도 마찬가지에요! 항상 군대에서 뭘 준비해야할지 모르겠어요 ㅠㅠㅜㅜㅜㅜ',
  },
  isThumbed: {
    type: ControlType.Boolean,
    defaultValue: false,
  },
  thumbCount: {
    type: ControlType.Number,
    defaultValue: 1,
    min: 0,
    displayStepper: true,
  },
  user: {
    type: ControlType.Object,
    controls: {
      username: {
        type: ControlType.String,
        defaultValue: 'beson',
      },
      profileImg: {
        type: ControlType.Image,
      },
      createdAt: {
        type: ControlType.String,
        defaultValue: '2시간 전',
      },
    },
  },
});
