import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { SortSelector as _SortSelector } from './SortSelector';

export function SortSelector(props: ComponentProps<typeof _SortSelector>) {
  return (
    <FramerProvider>
      <_SortSelector {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(SortSelector, {
  selectedIndex: {
    title: 'SelectedIndex',
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0,
    min: 0,
  },
  list: {
    title: 'List',
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
    defaultValue: [{ text: 'sort1' }, { text: 'sort2' }, { text: 'sort3' }],
  },
  onClick: {
    title: 'onClick',
    type: ControlType.EventHandler,
  },
});
