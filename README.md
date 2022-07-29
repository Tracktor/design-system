# Tracktor design system
**A design system React library**

>The library is based on [MUI Core](https://mui.com/material-ui/getting-started/overview/)

- [Features](#Features)  
- [Installation](#Installation)  
- [Usage](#Usage)
  - [Provide the theme](#Provide-the-theme)
- [Docs](#Docs)  
  - [Storybook](#Storybook)  
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
Put `<ThemeProvider>` around your application. 
Custom theme can be provided as prop `theme={YOUR_CUSTOM_THEME}`

```typescript jsx
import { Button, ThemeProvider } from "design-system";

const App = () => (
  <ThemeProvider>
    <Button>Text</Button>
  </ThemeProvider>
);

export default App;
```

## Docs

- [Material UI (MUI)](https://mui.com/material-ui/getting-started/overview)
- [Zeroheight](https://zeroheight.com/392e62971/p/7983f7-armature)

### Storybook

Run storybook
```console
yarn storybook
```

## Changelog