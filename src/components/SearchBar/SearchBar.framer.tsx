import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { SearchBar as _SearchBar } from './SearchBar';

export function SearchBar(props: ComponentProps<typeof _SearchBar>) {
  const { children, ...restProps } = props;
  void children;

  return (
    <FramerProvider>
      <_SearchBar {...restProps} />
    </FramerProvider>
  );
}

applyFramerProperties(SearchBar, {
  variant: {
    title: 'Variant',
    type: ControlType.Enum,
    options: ['primary', 'solid'],
    defaultValue: 'primary',
  },
  value: {
    title: 'Value',
    type: ControlType.String,
    defaultValue: '',
  },
  placeholder: {
    title: 'Placeholder',
    type: ControlType.String,
    defaultValue: 'Gyudong',
  },
});
