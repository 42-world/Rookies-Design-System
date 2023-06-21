import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { SearchBar as _SearchBar } from './SearchBar';

export function SearchBar(props: ComponentProps<typeof _SearchBar>) {
  return (
    <FramerProvider>
      <_SearchBar {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
// applyFramerProperties(SearchBar, {});
