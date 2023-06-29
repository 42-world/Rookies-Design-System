import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Text as _Text, textAlignConfig, textColorConfig, textSizeConfig, textWeightConfig } from './Text';

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
    defaultValue: 'Lorem ipsum',
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: Object.keys(textSizeConfig),
    defaultValue: 'body1',
  },
  weight: {
    title: 'Weight',
    type: ControlType.Enum,
    options: Object.keys(textWeightConfig),
    defaultValue: 'medium',
  },
  align: {
    title: 'Align',
    type: ControlType.Enum,
    options: Object.keys(textAlignConfig),
  },
  color: {
    title: 'Color',
    type: ControlType.Enum,
    options: Object.keys(textColorConfig),
  },
});
