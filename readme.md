# 42World Design System

This is a design system for [42World](https://42world.kr).

- [Storybook](https://42-world.github.io/design/latest/storybook)

## Installation

```bash
yarn add @42world/design-core
```

## Usage

```tsx
import { Button } from '@42world/design-system';

export default function App() {
  return <Button>Button</Button>;
}
```

## Development

- `yarn run serve` This runs a local web server with the built code.
- `yarn run build` This builds the code in `dist`.

Start the development server with:

```bash
yarn run serve
```

Open Framer, create a code file and paste the following:

```tsx
import 'http://localhost:8000/typography/Text/applyProperties.framer.js';
import { Text } from 'http://localhost:8000/typography/Text/index.js';

export default Text as React.ComponentType;
```

Beware that esm was designed for many small files that the browser can cache and optimize for. If you make your library too big, you'll lose out on these advantages. But it's a trade-off.

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
- we also recommend to use `themeProperty` in `common/property` folder. This property is used to define theme property controls in Framer.

```tsx
import { ControlType } from "framer"
import { applyFramerProperties } from '../../common/framer'
import { themeProperty } from '../../common/property'
import { Button } from "./Button"

applyFramerProperties(Button, {
  theme: themeProperty,
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "Title",
  },
  ...
})
```

We recommend to define `theme` as a prop in every component file. This is because we does not support `ThemeProvider` and `useTheme` yet.

```tsx
import { Theme } from "../../theme"

type Props = {
  /**
   * 테마
   */
  theme: Theme;

  ...
}
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

Any files in `common/framer` folder will be ignored in the publishing process. This folder is for Framer specific files.

```bash
dist/common/framer # ignored
```

Any files with path `*.framer.*` will be ignored in the publishing process. This is for Framer specific files.

```bash
dist/typography/Text/Text.framer.js # ignored
```

### Check List

- StoryBook 에서 정상적으로 동작하는가?
- Framer 에서 정상적으로 동작하는가?
- 패키지를 다운받았을때 정상적으로 동작하는가?
