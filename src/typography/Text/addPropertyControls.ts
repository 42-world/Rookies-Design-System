import { addPropertyControls, ControlType } from 'framer';
import { Text } from './Text';

addPropertyControls(Text, {
  theme: {
    title: '테마',
    type: ControlType.Enum,
    options: ['light', 'dark'],
    defaultValue: 'light',
    displaySegmentedControl: true,
  },
  size: {
    title: '크기',
    type: ControlType.Enum,
    options: ['header1', 'header2', 'header3', 'header4', 'body1', 'body2', 'body3', 'caption'],
    defaultValue: 'Body1',
  },
  color: {
    title: '색깔',
    type: ControlType.Enum,
    options: ['grey_40', 'grey_50', 'grey_60', 'grey_70', 'main_green_10', 'red_10'],
  },
  align: {
    title: '정렬',
    type: ControlType.Enum,
    options: ['left', 'center', 'right'],
    displaySegmentedControl: true,
  },
  text: {
    title: '내용',
    type: ControlType.String,
    defaultValue: '42월드에 오신걸 환영합니다',
    displayTextArea: true,
  },
});
