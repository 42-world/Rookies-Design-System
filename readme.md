# Rookies Design System

- [Storybook](https://pages.rookies.kr/design/latest/storybook)
- [npm](https://www.npmjs.com/package/@rookies-team/design)

## Usage

install `@rookies-team/design` package

```bash
yarn add @rookies-team/design
```

import component from `@rookies-team/design` package

```tsx
import '@rookies-team/design/style.css';
import { Button } from '@rookies-team/design';

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
 * @author Rookies
 */
export function Button() {
  return <button>Button</button>;
}
```

### Generating template

You can use `yarn template` command to easily generate component template files(`index.ts`, `Component.stories.ts`, `Component.framer.tsx`, `Component.tsx`) at once.

If you run `yarn template` command, a prompt asking "What is your component name?" will be printed. Give your component name, and template files will be generated.
