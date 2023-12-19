# Tracktor design system

[![npm version](https://badge.fury.io/js/@tracktor%2Fdesign-system.svg)](https://badge.fury.io/js/@tracktor%2Fdesign-system)

**A design system React library by [Tracktor](https://tracktor.fr/)**

> The library is based on [MUI Core](https://mui.com/material-ui/getting-started/overview/)

- [Installation](#Installation)
- [Usage](#Usage)
    - [Provide the theme](#Provide-the-theme)
- [Package](#Package)
- [Docs](#Docs)
- [Contributing](#Contributing)

## Installation

**npm:**

```bash
npm install @tracktor/design-system
```

**bun:**

```bash
bun add @tracktor/design-system
```

**yarn**:

```bash
yarn add @tracktor/design-system
```

**pnpm**:

```bash
pnpm add @tracktor/design-system
```

## Usage

### Provide the theme

Put `<ThemeProvider>` around your application.
Custom theme can be provided as prop `theme={YOUR_CUSTOM_THEME}`

```typescript jsx
import { Button, ThemeProvider } from "@tracktor/design-system";

const App = () => (
  <ThemeProvider>
    <Button>Text</Button>
  </ThemeProvider>
);

export default App;
```

## Package

Package are available in `@tracktor/design-system/{package}`

| Package | Description                                   |
|---------|-----------------------------------------------|
| colors  | This package contains material design colors. |

## Docs

- [Material UI (MUI)](https://mui.com/material-ui/getting-started/overview)
- [Figma](https://www.figma.com/file/3fprVesPjVIo124UWy9xhU/MUI-for-Figma-Material-Pro-v5.9.0?node-id=4662%3A14)
- [Storybook](https://storybook.tracktor.fr/)

## Contributing

Read the [contributing guide](/CONTRIBUTING.md) to learn about our process.
