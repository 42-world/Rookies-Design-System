# 42World Design System

This is a design system for [42World](https://42world.kr).

## Installation

```
yarn add @42world/design-system
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

```
yarn run serve
```

Open Framer, create a code file and paste the following:

```.tsx
import "http://localhost:8000/typography/Text/applyProperties.framer.js"
import { Text } from "http://localhost:8000/typography/Text/index.js"

export default Text as React.ComponentType
```

Beware that esm was designed for many small files that the browser can cache and optimize for. If you make your library too big, you'll lose out on these advantages. But it's a trade-off.

## Code Conventions

Avoid using `export default` in every component file

```
// as-is
export default function Button() {
  return <button>Button</button>
}

// to-be
export function Button() {
  return <button>Button</button>
}
```

Avoid using `React.FC` type

```
// as-is
export const Button: React.FC = () => {
  return <button>Button</button>
}

// to-be
export function Button() {
  return <button>Button</button>
}
```

Avoid using `React.` prefix

```
// as-is
export function Button() {
  const [count, setCount] = React.useState(0)
}

// to-be
export function Button() {
  const [count, setCount] = useState(0)
}
```

You must `import React from "react"` in every component file and put `React;` at the beginning of the file. This is because React namespace is exposed in Framer, but not in the browser. So we need to import React explicitly.

```
import React from "react"
React;

export function Button() {
  return <button>Button</button>
}
```

you must create `applyProperties.framer.ts` file for every component file. This file will be used to define property controls for the component in Framer.

- we recommend to use `applyFramerProperties` function in `common/framer` folder. This function checks type more strictly than `addPropertyControls` function.
- we also recommend to use `themeProperty` in `common/property` folder. This property is used to define theme property controls in Framer.

```
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

```
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

```
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

```
/**
 * Button
 *
 * @author 42World
 */
export function Button() {
  return <button>Button</button>
}
```

any files in `common/framer` folder will be ignored in the publishing process. This folder is for Framer specific files.

```
./dist/common/framer // ignored
```

any files with path `*.framer.*` will be ignored in the publishing process. This is for Framer specific files.

```
./dist/typography/Text/applyProperties.framer.js // ignored
```
