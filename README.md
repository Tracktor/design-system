# Tracktor design system

A design system React library

## Installation

```console
yarn add git+https://github.com/Tracktor/design-system.git
```

Specific version can be installed

```console
yarn add git+https://github.com/Tracktor/design-system.git#1.0.0
```

## Usage

### Basic
It is recommended to use `ThemeProvider` to
benefit from the default theme configuration.

``` typescript jsx
import { Button, ThemeProvider } from "design-system";

const App = () => (
  <ThemeProvider>
    <Button>Text</Button>
  </ThemeProvider>
);

export default App;
```

### import from module chunk
For a project that uses only a few components,
it is recommended to import your components directly
from module chunked

``` typescript jsx
import Button from "design-system/lib/components/Button";
import ThemeProvider from "design-system/lib/context/Theme/ThemeProvider";

const App = () => (
  <ThemeProvider>
    <Button>Text</Button>
  </ThemeProvider>
);

export default App;

```

## Docs

Read more about the design system: https://zeroheight.com/392e62971/p/7983f7-armature

## Changelog