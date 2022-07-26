# Tracktor design system
**A design system React library**

- [Features](#Features)  
- [Installation](#Installation)  
- [Usage](#Usage)
  - [Provide the theme](#Provide the theme)
  - [Import from module chunk](#Import from module chunk)
- [Docs](#Docs)  
- [Contributing](#Contributing)  
- [Changelog](#Changelog)  

## Features

- 📦 **[React](https://fr.reactjs.org)** - v18+ with Hooks
- ⚡️ **[Vite](https://vitejs.dev)** - Next Generation Frontend Tooling
- 📐 **[ESLint](https://eslint.org)** - Code analyzer
- 🚀 **[Vitest](https://vitest.dev)** - A Vite native unit test framework. It's fast!
- 🛠️ **[React Testing Library ](https://testing-library.com/docs/react-testing-library/intro/)** - React DOM testing utilities

## Installation

```console
yarn add git+https://github.com/Tracktor/design-system.git
```

Specific version can be installed

```console
yarn add git+https://github.com/Tracktor/design-system.git#1.0.0
```

## Usage

### Provide the theme
Put`<ThemeProvider>`around your application. Custom theme can be provided as prop`theme={YOUR_THEME}`

```typescript jsx
import { Button, ThemeProvider } from "design-system";

const App = () => (
  <ThemeProvider>
    <Button>Text</Button>
  </ThemeProvider>
);

export default App;
```

### Import from module chunk
For a project that uses only a few components,
it is recommended to import your components directly
from module chunked

```typescript jsx
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

## Contributing

## Changelog