# Contributing

- [Features](#Features)
- [Local installation](#local-installation)
- [Docs](#Docs)
- [Storybook](#Storybook)
- [Sending a Pull Request](#Sending-a-Pull-Request)
- [Available Scripts](#Available-Scripts)
    - [yarn run dev](#yarn-run-dev)
    - [yarn run build](#yarn-run-build)
    - [yarn run preview](#yarn-run-preview)
- [Convention](#Convention)

## Features

- 📦 **[React](https://fr.reactjs.org)** - v18+ with Hooks
- ⚡️ **[Vite](https://vitejs.dev)** - Next Generation Frontend Tooling
- 💨️ **[Yarn](https://yarnpkg.com/)** - Yarn is package manager
- 📐 **[ESLint](https://eslint.org)** - Code analyzer
- 🚀 **[Vitest](https://vitest.dev)** - A Vite native unit test framework. It's fast!
- 🛠️ **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)** - React DOM testing
  utilities
- 💅 **[Emotion CSS](https://emotion.sh/docs/introduction)** - Writing css styles with JavaScript
- 🐶 **[Husky](https://typicode.github.io/husky)** - Modern native git hooks made easy
- 🚦 **[Chromatic](https://www.chromatic.com/)** - Visual testing regression

## Local installation

Clone the repository and install dependencies with [yarn](https://yarnpkg.com/)

```bash 
yarn install
```

## Docs

- [Material UI (MUI)](https://mui.com/material-ui/getting-started/overview)
- [Figma](https://www.figma.com/file/3fprVesPjVIo124UWy9xhU/MUI-for-Figma-Material-Pro-v5.9.0?node-id=4662%3A14)
- [Storybook](https://storybook.tracktor.fr/)

## Storybook

You can run local storybook.

```bash
yarn storybook
```

Or you can start storybook with docker

```bash
docker-compose up
```

Then you may open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## Sending a Pull Request

1. Clone the repository and create a new branch: `git checkout
  ``` bash
git clone https://github.com/Tracktor/design-system.git  
```

2. Synchronize your local master branch with the upstream one:
```bash
git checkout master
git pull upstream master
```

3. Install the dependencies with [yarn](https://yarnpkg.com/) :
```bash
yarn install
```
4. Create a new branch:
```bash
git checkout -b my-branch-name
```
5. Make changes, commit and push :
```bash
git push -u origin HEAD
```
6. Go to the [repository](https://github.com/Tracktor/design-system) and make a Pull Request.

## Available Scripts

In the project directory, you can run:

### `yarn run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run build`

Builds the library for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html) for more information.

### `yarn run preview`

Locally preview production build

## Convention

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Versioning](https://semver.org)
- [Conventional Commits](https://www.conventionalcommits.org)
