import { addPropertyControls, ControlType } from 'framer';
import { Feed } from './Feed';

addPropertyControls(Feed, {
  theme: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['light', 'dark'],
    defaultValue: 'light',
  },
  title: {
    type: ControlType.String,
    defaultValue: '이건 제목입니다',
  },
  contents: {
    type: ControlType.String,
    defaultValue:
      '나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄 이런 젼차로 어린 백셩이 니르고져 홀 배 이셔도 마참내 제 뜨들 시러펴디 몯 할 노미 하니라',
  },
  isThumbed: {
    type: ControlType.Boolean,
    defaultValue: false,
  },
  thumbCount: {
    type: ControlType.Number,
    defaultValue: 1,
    displayStepper: true,
    min: 0,
  },
  commentCount: {
    type: ControlType.Number,
    defaultValue: 21,
    displayStepper: true,
    min: 0,
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
