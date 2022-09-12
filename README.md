# Tracktor design system

**A design system React library**

> The library is based on [MUI Core](https://mui.com/material-ui/getting-started/overview/)

- [Features](#Features)
- [Installation](#Installation)
- [Usage](#Usage)
    - [Provide the theme](#Provide-the-theme)
- [Docs](#Docs)
    - [Storybook](#Storybook)
- [Local installation](#local-installation)
- [Available Scripts](#Available-Scripts)
    - [yarn dev](#yarn-dev)
    - [yarn build](#yarn-build)
    - [yarn preview](#yarn-preview)
- [Convention](#Convention)

## Features

- 📦 **[React](https://fr.reactjs.org)** - v18+ with Hooks
- ⚡️ **[Vite](https://vitejs.dev)** - Next Generation Frontend Tooling
- 📐 **[ESLint](https://eslint.org)** - Code analyzer
- 🚀 **[Vitest](https://vitest.dev)** - A Vite native unit test framework. It's fast!
- 🛠️ **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)** - React DOM testing
  utilities
- 💅 **[Emotion CSS](https://emotion.sh/docs/introduction)** - Writing css styles with JavaScript


## Installation

```console
yarn add git+https://github.com/Tracktor/design-system
```

Specific version can be installed

```console
yarn add git+https://github.com/Tracktor/design-system#1.0.0
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

Start storybook

```console
yarn storybook
```

Or you can start storybook with docker

```console
docker-compose up
```

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

<details>
  <summary>Troubleshooting</summary>
  <ul>
    <li>
      <p>      
        <span>If you got a message</span>
        <code>Failed to fetch dynamically imported module: http://localhost:6006/.storybook/preview.tsx</code>
        <span>when you start the storybook, then restart the storybook.</span>
      </p>
    </li>
  </ul>
</details>

## Local installation

Clone the repository and install dependencies

```console 
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the library for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html) for more information.

### `yarn preview`

Locally preview production build

## Convention

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Versioning](https://semver.org)
- [Conventional Commits](https://www.conventionalcommits.org)
