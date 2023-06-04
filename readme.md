# 42World Design System

This is a design system for [42World](https://42world.kr).

- [Storybook](https://42-world.github.io/design/latest/storybook)

## Usage

install `@42world/design-core` package

```bash
yarn add @42world/design-core
```

import component from `@42world/design-core` package

```tsx
import { Button } from '@42world/design-system';

export default function App() {
  return <Button>Button</Button>;
}
```

## Development

- `yarn dev` This runs a local web server with the built code.
- `yarn build` This builds the code in `dist`.

Open `http://localhost:6006` in your browser to see the Storybook.

Open Framer, create a code file and paste the following:

```tsx
import { Text } from 'http://127.0.0.1:8000/components/Text/Text.framer.js';

export default Text as React.ComponentType;
```

## Code Conventions

Avoid using `export default` in every component file

```tsx
// as-is
export default function Button() {
  return <button>Button</button>;
}

// to-be
export function Button() {
  return <button>Button</button>;
}
```

Avoid using `React.FC` type

```tsx
// as-is
export const Button: React.FC = () => {
  return <button>Button</button>;
};

// to-be
export function Button() {
  return <button>Button</button>;
}
```

Avoid using `React.` prefix

```tsx
// as-is
export function Button() {
  const [count, setCount] = React.useState(0);
}

// to-be
export function Button() {
  const [count, setCount] = useState(0);
}
```

you must create `Component.framer.ts` file for every component file. This file will be used to define property controls for the component in Framer.

- we recommend to use `applyFramerProperties` function in `common/framer` folder. This function checks type more strictly than `addPropertyControls` function.

```tsx
import { ControlType } from "framer"
import { applyFramerProperties } from '../../common/framer'
import { themeProperty } from '../../common/property'
import { Button } from "./Button"

applyFramerProperties(Button, {
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "Title",
  },
  ...
})
```

Please write comment for every prop in every component file.

```tsx
type Props = {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 타이틀
   */
  title: string;

  ...
}
```

Please write name and `@author` in every component function.

```tsx
/**
 * Button
 *
 * @author 42World
 */
export function Button() {
  return <button>Button</button>;
}
```
