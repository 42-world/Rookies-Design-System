import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Text as _Text } from './Text';

export function Text(props: ComponentProps<typeof _Text>) {
  return (
    <FramerProvider>
      <_Text {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Text, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: '42월드에 오신걸 환영합니다',
    displayTextArea: true,
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['header1', 'header2', 'header3', 'header4', 'body1', 'body2', 'body3', 'caption'],
    defaultValue: 'Body1',
  },
  color: {
    title: 'Color',
    type: ControlType.Enum,
    options: ['grey_40', 'grey_50', 'grey_60', 'grey_70', 'main_green_10', 'red_10'],
  },
  align: {
    title: 'Align',
    type: ControlType.Enum,
    options: ['left', 'center', 'right'],
    displaySegmentedControl: true,
  },
});
